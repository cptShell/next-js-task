import { createAsyncThunk } from '@reduxjs/toolkit';
import { AsyncThunkConfig } from '@/common/types/app/app';
import { Rate } from '@/common/types/types';
import { ActionType } from './common';

export const getAll = createAsyncThunk<Array<Rate>, null, AsyncThunkConfig>(
  ActionType.GET_ALL,
  async (_, { extra }) => {
    const { currencyRateApi } = extra;
    const response = await currencyRateApi.getRates();

    return response || [];
  }
);
