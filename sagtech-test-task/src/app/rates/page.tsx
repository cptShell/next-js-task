'use client';

import { DataStatus } from '@/common/enums/enums';
import { useAppDispatch, useAppSelector } from '@/hook/hook';
import { rate as rateActions } from '@/store/actions';
import { useEffect } from 'react';
import style from './page.module.scss';

export default function Home() {
  const dispatch = useAppDispatch();
  const { rates, status } = useAppSelector((state) => state.rates);
  console.log(rates);

  useEffect(() => {
    const loadRates = () => {
      if (status === DataStatus.IDLE) dispatch(rateActions.getAll(null));
    };
    loadRates();
  }, []);

  return (
    <main>
      <h1>Rates</h1>
      <ul className={style['rate-list']}>
        {rates.length &&
          rates.map(({ id, abbreviation, name, rate, scale }) => {
            const text = `${name}: ${scale} ${abbreviation} = ${rate} BYN`;
            return <li key={id}>{text}</li>;
          })}
      </ul>
    </main>
  );
}
