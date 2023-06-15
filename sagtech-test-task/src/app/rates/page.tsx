'use client';

import { useEffect } from 'react';
import { RateItem } from './rate-item/rate-item';
import { DataStatus } from '@/common/enums/enums';
import { useAppDispatch, useAppSelector } from '@/hook/hook';
import { rate as rateActions } from '@/store/actions';
import { BYN_RATE } from '@/common/constants/byn-rate';
import style from './page.module.scss';
import { setValues } from '@/store/calculator/actions';

export default function Rates() {
  const dispatch = useAppDispatch();
  const { rates, status } = useAppSelector((state) => state.rates);
  const { formValues } = useAppSelector((state) => state.calculate);
  const { currencyTo: baseCurrency } = formValues;

  const handleChooseBase = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setValues({ ...formValues, currencyTo: e.target.value }));
  };

  useEffect(() => {
    const loadRates = () => {
      if (status === DataStatus.IDLE) dispatch(rateActions.getAll());
    };
    loadRates();
  }, []);

  return (
    <main>
      <h1>Rates</h1>
      <select onChange={handleChooseBase}>
        {rates.map(({ id, abbreviation, name }) => {
          return (
            <option key={id} value={abbreviation}>
              {name}
            </option>
          );
        })}
      </select>
      <ul className={style['rate-list']}>
        {rates.length &&
          [...rates]
            .filter((rate) => rate.abbreviation !== baseCurrency)
            .map((targetRate) => (
              <RateItem
                key={targetRate.id}
                targetRate={targetRate}
                baseRate={
                  rates.find((rate) => rate.abbreviation === baseCurrency) ||
                  BYN_RATE
                }
              />
            ))}
      </ul>
    </main>
  );
}
