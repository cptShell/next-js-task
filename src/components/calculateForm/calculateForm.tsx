'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@mantine/core';
import { NumberInput, Select } from 'react-hook-form-mantine';
import { CalculatedResult } from '../calculatedResult/calculatedResult';
import { Rate, CalculateFormValues, Option } from '@/common/types/types';
import { useAppDispatch, useAppSelector } from '@/hook/hook';
import { INITIAL_FORM_VALUES } from '@/common/constants/initial-form-values.constant';
import { calculateForm as calculateFormActions } from '@/store/actions';
import { Abbreviation } from '@/common/enums/enums';
import style from './calculateForm.module.scss';

type Props = {
  rates: Readonly<Array<Rate>>;
};

export const CalculateForm: FC<Props> = ({ rates }) => {
  const dispatch = useAppDispatch();
  const { formValues } = useAppSelector((state) => state.calculate);
  const { handleSubmit, reset, control } = useForm<CalculateFormValues>({
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

  const options = rates.map(({ abbreviation, name }) => ({
    value: abbreviation,
    label: name,
  }));

  return (
    <>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <Select
          size="lg"
          label="From"
          defaultValue={Abbreviation.BYN}
          name="currencyFrom"
          control={control}
          data={options}
        />
        <NumberInput
          w={'100%'}
          min={1}
          label="Scale"
          size="lg"
          control={control}
          name={'scale'}
        />
        <Select
          size="lg"
          label="To"
          defaultValue={Abbreviation.BYN}
          name="currencyTo"
          control={control}
          data={options}
        />
        <div className={style.controls}>
          <Button variant="filled" size="lg" type="submit">
            Calculate
          </Button>
          <Button variant="outline" color="yellow" size="lg" onClick={onReset}>
            Reset
          </Button>
        </div>
      </form>
      <CalculatedResult formValues={formValues} />
    </>
  );
};
