// import
import { getCurrensy } from "./fetching.js";
import { convertor } from "./convertor.js";
import { cardConstructor } from "./cardConstructor.js";

// global varibles
let baseCurrency = "KGS";
const url = `https://v6.exchangerate-api.com/v6/3431c907cc0b581df072ae7e/latest/${localStorage.getItem(
  "baseCurrency"
)}`;

localStorage.setItem("baseCurrency", baseCurrency);

const globalObject = await getCurrensy(url);
console.log(globalObject);

switch (document.title) {
  // CurrencyPage

  case "CurrencyPage":
    console.log("CurrencyPage");
    const wrap = document.querySelector(".wrap");

    // мне не нравиться внешний вид кода

    for (let currencyIndex in globalObject["conversion_rates"]) {
      cardConstructor(
        globalObject["base_code"],
        globalObject["conversion_rates"],
        currencyIndex,
        wrap
      );
    }

    break;

  // ExchangePage
  case "ExchangerPage":
    console.log("ExchangerPage");
    const input = document.querySelector(".inputContainer");
    const p = document.querySelector(".result");
    const selectList = document.querySelector("select");
    for (let element in globalObject["conversion_rates"]) {
      const option = document.createElement("option");
      option.innerHTML = element;
      selectList.append(option);
    }
    input.addEventListener("change", () => {
      // надо сделать проверку на число в инпуте

      p.innerHTML = convertor(
        input.value,
        globalObject["base_code"],
        globalObject["conversion_rates"],
        selectList.value
      );
    });

    break;

  //Error Page надо будет как-то допилить
  default:
    break;
}
