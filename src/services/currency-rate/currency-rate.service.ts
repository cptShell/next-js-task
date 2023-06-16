import { BYN_RATE } from '@/common/constants/byn-rate';
import { ApiRoutes, HttpCode } from '@/common/enums/enums';
import { CurrencyDTO, Rate, RateDTO } from '@/common/types/types';
import axios, { Axios } from 'axios';

export class CurrencyRateApi {
  private axiosInstance: Axios;

  constructor(apiPrefix: string) {
    this.axiosInstance = axios.create({
      baseURL: apiPrefix,
      params: { periodicity: 0 },
      headers: {
        Accept: 'application/json',
      },
    });
  }

  async getCurrencies(): Promise<Array<CurrencyDTO> | null> {
    const response = await this.axiosInstance.get<Array<CurrencyDTO>>(
      ApiRoutes.CURRENCIES
    );

    if (response.status !== HttpCode.OK) return null;

    return response.data;
  }

  async getRates(): Promise<Array<Rate> | null> {
    const url = `${ApiRoutes.RATES}`;

    const { data: rates, status } = await this.axiosInstance.get<
      Array<RateDTO>
    >(url);
    const currencies = await this.getCurrencies();

    if (status !== HttpCode.OK) return null;

    if (rates && currencies) {
      const mappedData: Array<Rate> = rates.reduce(
        (acc, rateDTO) => {
          const targetCurrency = currencies.find(
            (currency) => currency.Cur_ID === rateDTO.Cur_ID
          );

          if (targetCurrency) {
            acc.push({
              id: rateDTO.Cur_ID,
              quotName: targetCurrency.Cur_QuotName,
              nameMulti: targetCurrency.Cur_NameMulti,
              scale: rateDTO.Cur_Scale,
              rate: rateDTO.Cur_OfficialRate,
              name: targetCurrency.Cur_Name,
              abbreviation: targetCurrency.Cur_Abbreviation,
            });
          }

          return acc;
        },
        [BYN_RATE]
      );

      return mappedData;
    }

    return null;
  }
}
