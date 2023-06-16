import { FC } from 'react';
import { CalculateFormValues } from '@/common/types/types';
import { useAppSelector } from '@/hook/hook';
import { calculateDiff } from '@/helpers/helpers';
import { Title } from '@mantine/core';

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
    const value = calculateDiff(rateFrom, rateTo, scale);
    const fromText = `${scale} ${rateFrom.abbreviation}`;
    const toText = `${Number.isInteger(value) ? value : value.toFixed(2)} ${
      rateTo.abbreviation
    }`;
    resultText = `${fromText} = ${toText}`;
  }

  return <Title order={1}>{resultText}</Title>;
};
