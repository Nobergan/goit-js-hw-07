const inputValidationRef = document.querySelector('#validation-input');
// console.dir(inputValidationRef);

inputValidationRef.addEventListener('change', handlerInputValidation);

function handlerInputValidation() {
  const inputLength = inputValidationRef.value.length;
  const correctInputLength = Number(inputValidationRef.dataset.length);

  if (inputLength === correctInputLength) {
    inputValidationRef.classList.remove('invalid');
    inputValidationRef.classList.add('valid');
  } else {
    inputValidationRef.classList.remove('valid');
    inputValidationRef.classList.add('invalid');
  }
}
