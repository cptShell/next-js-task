import { ApiRoutes } from '@/common/enums/enums';
import axios, { Axios } from 'axios';

export class CurrencyRateApi {
  #axiosInstance: Axios;

  constructor(apiPrefix: string) {
    this.#axiosInstance = axios.create({
      baseURL: apiPrefix,
    });
  }

  async getRates(): Promise<any> {
    const response = await this.#axiosInstance.get(ApiRoutes.CURRENCIES);
    return response.data;
  }
}
