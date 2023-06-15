import { Abbreviation } from '../enums/enums';
import { CalculateFormValues } from '../types/types';

export const INITIAL_FORM_VALUES: CalculateFormValues = {
  currencyFrom: Abbreviation.BYN,
  currencyTo: Abbreviation.USD,
  scale: 1,
};
