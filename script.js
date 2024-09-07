const wrap = document.querySelector(".wrap");

let name = "USD";
const url = `https://v6.exchangerate-api.com/v6/3431c907cc0b581df072ae7e/latest/`;

let getCurrensy = async () => {
  try {
    let response = await fetch(url + name);
    let data = await response.json();
    console.log("ok");
    return {
      base_code: data["base_code"],
      conversion_rates: data["conversion_rates"],
    };
  } catch (error) {
    console.error(error);
  }
};

// надо будет вынести в отдельный файл
const cardConstructor = (obj, element, place) => {
  let currencyCard = document.createElement("div");
  currencyCard.id = `${element}`;
  currencyCard.innerHTML = `1${obj["base_code"]} = ${obj["conversion_rates"][element]}${element}`;
  place.append(currencyCard);
};

// мне не нравиться внешний вид кода
getCurrensy().then((data) => {
  for (let element in data["conversion_rates"]) {
    cardConstructor(data, element, wrap);
  }
});
