import { configureStore } from '@reduxjs/toolkit';
import { reducer as rateReducer } from './rate/reducer';
import { currencyRateApi } from '@/services/services';

export const extraArgument = {
  currencyRateApi,
};

const store = configureStore({
  reducer: { rates: rateReducer },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      thunk: { extraArgument },
    });
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
