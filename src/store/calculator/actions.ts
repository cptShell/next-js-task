import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { CalculateFormValues, Rate } from '@/common/types/types';
import { ActionType } from './common';

export const setValues = createAction<CalculateFormValues>(
  ActionType.SET_VALUES
);
