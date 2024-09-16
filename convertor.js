// это та вещь из-за которой я так долго делал 2ую стр

export const convertor = (
  value,
  currencyList,
  currencyIndexA,
  currencyIndexB
) => {
  const conversionRate = currencyList[currencyIndexB];
  const convertedValue = value * conversionRate;

  return `${value} ${currencyIndexA} = ${convertedValue.toFixed(
    2
  )} ${currencyIndexB}`;
};
