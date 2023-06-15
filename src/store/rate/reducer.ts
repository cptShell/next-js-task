import { createReducer } from '@reduxjs/toolkit';
import { getAll } from './actions';
import { DataStatus } from '@/common/enums/enums';
import { Rate } from '@/common/types/types';

type State = {
  rates: Array<Rate>;
  status: DataStatus;
};

const initialState: State = {
  rates: [],
  status: DataStatus.IDLE,
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(getAll.fulfilled, (state, action) => {
    state.status = DataStatus.FULFILLED;
    state.rates = action.payload;
  });
});
