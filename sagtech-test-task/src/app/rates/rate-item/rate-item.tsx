import { Rate } from '@/common/types/types';
import { calculateDiff } from '@/helpers/helpers';
import { FC } from 'react';

type Props = {
  targetRate: Rate;
  baseRate: Rate;
};

export const RateItem: FC<Props> = ({ targetRate, baseRate }) => {
  const {
    abbreviation: targetAbbreviation,
    name: targetName,
    scale: targetScale,
  } = targetRate;
  const { abbreviation: baseAbbreviation } = baseRate;

  const value = calculateDiff(targetRate, baseRate, targetScale);
  const targetText = `${targetScale} ${targetName} (${targetAbbreviation})`;
  const baseText = `${
    Number.isInteger(value) ? value : value.toFixed(4)
  } ${baseAbbreviation}`;
  const text = `${targetText} = ${baseText}`;

  return <li>{text}</li>;
};
