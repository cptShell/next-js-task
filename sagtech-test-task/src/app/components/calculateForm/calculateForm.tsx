import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Rate, CalculateFormValues } from '@/common/types/types';
import { Abbreviation } from '@/common/enums/enums';
import style from './calculateForm.module.scss';
import { CalculatedResult } from '../calculatedResult/calculatedResult';

type Props = {
  rates: Array<Rate>;
};

const initialFormValues: CalculateFormValues = {
  currencyFrom: Abbreviation.BYN,
  currencyTo: Abbreviation.USD,
  scale: 1,
};

export const CalculateForm: FC<Props> = ({ rates }) => {
  const { register, handleSubmit, reset, getValues } =
    useForm<CalculateFormValues>({
      defaultValues: initialFormValues,
    });
  const [formValues, setFormValues] = useState(getValues());

  const onSubmit = (data: CalculateFormValues) => {
    setFormValues(data);
  };

  const onReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFormValues(initialFormValues);
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
        <input type="number" {...register('scale')} />
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
