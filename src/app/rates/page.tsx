'use client';

import { FC, useEffect } from 'react';
import { Select } from '@mantine/core';
import { RateItem } from './rate-item/rate-item';
import { AppLoader } from '@/components/loader/loader';
import { DataStatus } from '@/common/enums/enums';
import { useAppDispatch, useAppSelector } from '@/hook/hook';
import { rate as rateActions, calculateForm } from '@/store/actions';
import { BYN_RATE } from '@/common/constants/byn-rate';
import style from './page.module.scss';

const Rates: FC = () => {
  const dispatch = useAppDispatch();
  const { rates, status } = useAppSelector((state) => state.rates);
  const { formValues } = useAppSelector((state) => state.calculate);
  const { currencyTo: baseCurrency } = formValues;

  useEffect(() => {
    const loadRates = () => {
      if (status === DataStatus.IDLE) dispatch(rateActions.getAll());
    };
    loadRates();
  }, []);

  const handleSelect = (value: string | null) => {
    const currencyTo = value || BYN_RATE.abbreviation;
    dispatch(calculateForm.setValues({ ...formValues, currencyTo }));
  };

  const options = rates.map(({ abbreviation, name }) => ({
    value: abbreviation,
    label: name,
  }));
  const targetOption = options.find((option) => option.value === baseCurrency);

  return (
    <>
      {rates.length ? (
        <>
          <Select
            w={'100%'}
            label="Base currency"
            size="lg"
            defaultValue={targetOption?.value}
            onChange={handleSelect}
            data={options}
          />
          <ul className={style['rate-list']}>
            {rates.length &&
              [...rates]
                .filter((rate) => rate.abbreviation !== baseCurrency)
                .map((targetRate) => (
                  <RateItem
                    key={targetRate.id}
                    targetRate={targetRate}
                    baseRate={
                      rates.find(
                        (rate) => rate.abbreviation === baseCurrency
                      ) || BYN_RATE
                    }
                  />
                ))}
          </ul>
        </>
      ) : (
        <AppLoader />
      )}
    </>
  );
};

export default Rates;
