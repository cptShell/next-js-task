'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { CalculatedResult } from '../calculatedResult/calculatedResult';
import { Rate, CalculateFormValues } from '@/common/types/types';
import { Abbreviation } from '@/common/enums/enums';
import { useAppDispatch, useAppSelector } from '@/hook/hook';
import { INITIAL_FORM_VALUES } from '@/common/constants/initial-form-values.constant';
import { calculateForm as calculateFormActions } from '@/store/actions';
import style from './calculateForm.module.scss';

type Props = {
  rates: Array<Rate>;
};

export const CalculateForm: FC<Props> = ({ rates }) => {
  const dispatch = useAppDispatch();
  const { formValues } = useAppSelector((state) => state.calculate);
  const { register, handleSubmit, reset } = useForm<CalculateFormValues>({
    defaultValues: { ...formValues },
  });

  const onSubmit = (data: CalculateFormValues) => {
    dispatch(calculateFormActions.setValues(data));
  };

  const onReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(calculateFormActions.setValues(INITIAL_FORM_VALUES));
    reset();
  };

  const options = rates.map(({ id, abbreviation, name }) => (
    <option key={id} value={abbreviation}>
      {name}
    </option>
  ));

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <select defaultValue={Abbreviation.BYN} {...register('currencyFrom')}>
          {options}
        </select>
        <input min={1} type="number" {...register('scale')} />
        <select defaultValue={Abbreviation.USD} {...register('currencyTo')}>
          {options}
        </select>
        <button>Calculate</button>
        <button onClick={onReset}>Reset</button>
      </form>
      <CalculatedResult formValues={formValues} />
    </>
  );
};
