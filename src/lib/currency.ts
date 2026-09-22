export const USD_TO_NPR_RATE = 153;

export const usdToNpr = (usd: number): number => usd * USD_TO_NPR_RATE;

export const formatNpr = (usd: number): string =>
  `NPR ${usdToNpr(usd).toFixed(2)}`;