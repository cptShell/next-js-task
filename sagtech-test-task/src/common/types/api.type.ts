export type CurrencyDTO = {
  Cur_ID: number;
  Cur_Abbreviation: string;
  Cur_Name: string;
  Cur_Scale: number;
};

export type RateDTO = { Cur_OfficialRate: number } & CurrencyDTO;

export type Currency = {
  id: number;
  abbreviation: string;
  name: string;
  scale: number;
};

export type Rate = { rate: number } & Currency;
