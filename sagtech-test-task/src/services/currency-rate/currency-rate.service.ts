import { BYN_RATE } from '@/common/constants/byn-rate';
import { ApiRoutes, HttpCode } from '@/common/enums/enums';
import { Currency, CurrencyDTO, Rate, RateDTO } from '@/common/types/types';
import axios, { Axios } from 'axios';

export class CurrencyRateApi {
  #axiosInstance: Axios;

  constructor(apiPrefix: string) {
    this.#axiosInstance = axios.create({
      baseURL: apiPrefix,
      params: { periodicity: 0 },
      headers: {
        Accept: 'application/json',
      },
    });
  }

  async getCurrencies(): Promise<Array<Currency> | null> {
    const response = await this.#axiosInstance.get<Array<CurrencyDTO>>(
      ApiRoutes.CURRENCIES
    );

    if (response.status !== HttpCode.OK) return null;

    const mappedData: Array<Currency> = response.data.map((data) => {
      return {
        id: data.Cur_ID,
        abbreviation: data.Cur_Abbreviation,
        name: data.Cur_Name,
        scale: data.Cur_Scale,
      };
    });

    return mappedData;
  }

  async getRates(): Promise<Array<Rate> | null> {
    const url = `${ApiRoutes.RATES}`;

    const response = await this.#axiosInstance.get<Array<RateDTO>>(url);

    if (response.status !== HttpCode.OK) return null;

    const mappedData: Array<Rate> = [BYN_RATE].concat(
      response.data.map((data) => {
        return {
          id: data.Cur_ID,
          abbreviation: data.Cur_Abbreviation,
          name: data.Cur_Name,
          scale: data.Cur_Scale,
          rate: data.Cur_OfficialRate,
        };
      })
    );

    return mappedData;
  }
}
