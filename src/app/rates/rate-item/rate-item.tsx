import { FC } from 'react';
import { Rate } from '@/common/types/types';
import { calculateDiff } from '@/helpers/helpers';
import style from './rate-item.module.scss';

type Props = {
  targetRate: Rate;
  baseRate: Rate;
};

export const RateItem: FC<Props> = ({ targetRate, baseRate }) => {
  const {
    abbreviation: targetAbbreviation,
    quotName: targetQuotName,
    scale: targetScale,
  } = targetRate;
  const { abbreviation: baseAbbreviation } = baseRate;

  const value = calculateDiff(targetRate, baseRate, targetScale);
  const targetText = `${targetQuotName} (${targetAbbreviation})`;
  const baseText = `${
    Number.isInteger(value) ? value : value.toFixed(2)
  } ${baseAbbreviation}`;

  return (
    <li className={style['rate-item']}>
      <span>{targetText}</span>
      <span>{baseText}</span>
    </li>
  );
};
