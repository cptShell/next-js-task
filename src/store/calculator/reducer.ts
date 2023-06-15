import { INITIAL_FORM_VALUES } from '@/common/constants/initial-form-values.constant';
import { CalculateFormValues } from '@/common/types/types';
import { createReducer } from '@reduxjs/toolkit';
import { setValues } from './actions';

type State = {
  formValues: CalculateFormValues;
};

const initialState: State = {
  formValues: INITIAL_FORM_VALUES,
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setValues, (state, action) => {
    state.formValues = action.payload;
  });
});
