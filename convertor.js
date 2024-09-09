// это та вещь из-за которой я так долго делал 2ую стр

export const convertor = (
  value,
  currencyList,
  currencyIndexA,
  currencyIndexB
) => {
  console.log(value);
  console.log(currencyList);
  console.log(currencyIndexA);
  console.log(currencyIndexB);

  return `${
    value +
    currencyIndexA +
    " = " +
    value * currencyList[currencyIndexB] +
    currencyIndexB
  }`;
};
