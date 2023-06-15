import { Rate } from '@/common/types/types';

export const calculateDiff = (
  targetRate: Rate,
  baseRate: Rate,
  scale: number
): number => {
  const fromValue = targetRate.rate / targetRate.scale;
  const toValue = baseRate.rate / baseRate.scale;
  const value = (fromValue / toValue) * scale;

  return value;
};
