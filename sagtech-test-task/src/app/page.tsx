'use client';

import { useEffect } from 'react';
import { AppLoader } from './components/loader/loader';
import { CalculateForm } from './components/calculateForm/calculateForm';
import { rate as rateActions } from '@/store/actions';
import { useAppDispatch, useAppSelector } from '@/hook/hook';
import { DataStatus } from '@/common/enums/enums';
import styles from './page.module.scss';

export default function Calculate() {
  const dispatch = useAppDispatch();
  const { rates, status } = useAppSelector((state) => state.rates);

  useEffect(() => {
    const loadRates = () => {
      if (status === DataStatus.IDLE) dispatch(rateActions.getAll());
    };
    loadRates();
  }, []);

  return (
    <main className={styles.main}>
      {status === DataStatus.FULFILLED ? (
        <CalculateForm rates={rates} />
      ) : (
        <AppLoader />
      )}
    </main>
  );
}
