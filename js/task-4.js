const decrementRef = document.querySelector('button[data-action="decrement"]');
const incrementRef = document.querySelector('button[data-action="increment"]');
const valueRef = document.querySelector('#value');

let counterValue = 0;

const countDecrement = function () {
  counterValue -= 1;
  valueRef.textContent = counterValue;
};

const countIncrement = function () {
  counterValue += 1;
  valueRef.textContent = counterValue;
};

decrementRef.addEventListener('click', countDecrement);
incrementRef.addEventListener('click', countIncrement);
