import { ApiBaseLink } from '@/common/constants/api-routes.constant';
import { CurrencyRateApi } from './currency-rate/currency-rate.service';
export const currencyRateApi = new CurrencyRateApi(ApiBaseLink);
