export const convertor = (
  value = 1,
  fromCurrency,
  currencyList,
  currencyIndex
) => {
  return `${
    value +
    fromCurrency +
    " = " +
    value * currencyList[currencyIndex] +
    currencyIndex
  }`;
};
