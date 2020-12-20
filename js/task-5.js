const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', handlerInput);

function handlerInput(event) {
  if (inputRef.value === '') {
    outputRef.textContent = 'незнакомец';
  } else {
    outputRef.textContent = event.target.value;
  }
}
