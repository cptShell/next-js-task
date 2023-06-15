import { CurrencyRateApi } from './currency-rate/currency-rate.service';

const apiPrefix = process.env.NEXT_PUBLIC_API_BASE_LINK as string;
export const currencyRateApi = new CurrencyRateApi(apiPrefix);
