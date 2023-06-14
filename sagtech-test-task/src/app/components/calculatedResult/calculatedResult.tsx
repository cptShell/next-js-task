import { FC } from 'react';
import { CalculateFormValues } from '@/common/types/types';
import { useAppSelector } from '@/hook/hook';

type Props = {
  formValues: CalculateFormValues;
};

export const CalculatedResult: FC<Props> = ({ formValues }) => {
  const { currencyFrom, currencyTo, scale } = formValues;
  const { rates } = useAppSelector((state) => state.rates);

  const rateFrom = rates.find((rate) => rate.abbreviation === currencyFrom);
  const rateTo = rates.find((rate) => rate.abbreviation === currencyTo);

  let resultText = 'Oops, something went wrong!';

  if (rateFrom && rateTo) {
    const fromValue = rateFrom.rate / rateFrom.scale;
    const toValue = rateTo.rate / rateTo.scale;
    const value = (fromValue / toValue) * scale;
    const fromText = `${scale} ${rateFrom.abbreviation}`;
    const toText = `${value.toFixed(4)} ${rateTo.abbreviation}`;

    resultText = `${fromText} = ${toText}`;
  }

  return <h2>{resultText}</h2>;
};
