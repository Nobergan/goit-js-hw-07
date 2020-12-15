const fontSizeControlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

fontSizeControlRef.addEventListener('input', handleChangeFontSize);

function handleChangeFontSize() {
  textRef.style.fontSize = `${fontSizeControlRef.value}px`;
}
