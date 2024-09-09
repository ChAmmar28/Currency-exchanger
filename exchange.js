import { getCurrensy } from "./fetching.js";

// global varibles
const url = `https://v6.exchangerate-api.com/v6/3431c907cc0b581df072ae7e/latest/${localStorage.getItem(
  "baseCurrency"
)}`;

const globalObject = await getCurrensy(url);
console.log(globalObject);

const input = document.querySelector(".inputContainer");
const p = document.querySelector(".result");
const selectA = document.querySelector("#selectA");
const selectB = document.querySelector("#selectB");

for (let element in globalObject["conversion_rates"]) {
  const bOption = document.createElement("option");
  bOption.className = "bO";
  bOption.innerHTML = element;
  selectB.append(bOption);
}
for (let element in globalObject["conversion_rates"]) {
  const aOption = document.createElement("option");
  aOption.className = "aO";
  aOption.innerHTML = element;
  selectA.append(aOption);
}

selectA.addEventListener("change", () => {
  localStorage.setItem("baseCurrency", selectA.value);
  console.log(localStorage.getItem("baseCurrency"));
  location.reload();
});

input.addEventListener("change", () => {
  // надо сделать проверку на число в инпуте
  if (!isNaN(+input.value)) {
  } else {
    console.log("Error of input");
  }
});
