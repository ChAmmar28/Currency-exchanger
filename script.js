// import
import { getCurrensy } from "./fetching.js";
import { cardConstructor } from "./cardConstructor.js";

// global varibles
let baseCurrency = "KGS";
const url = `https://v6.exchangerate-api.com/v6/3431c907cc0b581df072ae7e/latest/${localStorage.getItem(
  "baseCurrency"
)}`;
localStorage.setItem("baseCurrency", baseCurrency);
const globalObject = await getCurrensy(url);

const wrap = document.querySelector(".wrap");

for (let currencyIndex in globalObject["conversion_rates"]) {
  cardConstructor(
    globalObject["base_code"],
    globalObject["conversion_rates"],
    currencyIndex,
    wrap
  );
}
