export const cardConstructor = (
  currencyFrom,
  currencyList,
  currencyIndex,
  place
) => {
  const currencyCard = document.createElement("div");
  const cardText = document.createElement("p");
  currencyCard.id = `${currencyIndex}`;
  currencyCard.addEventListener("click", () => {
    console.log(currencyCard.id);
    localStorage.setItem("baseCurrency", currencyCard.id);
    location.reload();
  });
  cardText.innerHTML = `1 ${currencyFrom} = ${
    currencyList[currencyIndex] + currencyIndex
  }`;
  place.append(currencyCard);
  currencyCard.append(cardText);
};
