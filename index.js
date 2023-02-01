const num1Input = document.querySelector("#num1");
const num2Input = document.querySelector("#num2");
const addBtn = document.querySelector("#add-numbers");
const resultDivAdd = document.querySelector("#resultAdd");

addBtn.addEventListener("click", function() {
  const num1 = parseInt(num1Input.value);
  const num2 = parseInt(num2Input.value);
  const sum = num1 + num2;
  resultDivAdd.innerHTML = sum;
});

const subNum1Input = document.querySelector("#subNum1");
const subNum2Input = document.querySelector("#subNum2");
const subBtn = document.querySelector("#subtract-numbers");
const resultDivSub = document.querySelector("#resultSub");

subBtn.addEventListener("click", function() {
  const subNum1 = parseInt(subNum1Input.value);
  const subNum2 = parseInt(subNum2Input.value);
  const resultSub = subNum1 - subNum2;
  resultDivSub.innerHTML = resultSub;
  console.log(resultSub)
});

const xNum1Input = document.querySelector("#xNum1");
const xNum2Input = document.querySelector("#xNum2");
const xBtn = document.querySelector("#multiply-numbers");
const resultDivMult = document.querySelector("#resultMult");

xBtn.addEventListener("click", function() {
  const xNum1 = parseInt(xNum1Input.value);
  const xNum2 = parseInt(xNum2Input.value);
  const resultMult = xNum1 * xNum2;
  resultDivMult.innerHTML = resultMult;
  console.log(resultMult)
});
