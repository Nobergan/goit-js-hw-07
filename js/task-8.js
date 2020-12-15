const inputRef = document.querySelector('input[type="number"]');
const renderBtnRef = document.querySelector('button[data-action="render"]');
const destroyBtnRef = document.querySelector('button[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');

inputRef.addEventListener('input', countBoxesHandler);
renderBtnRef.addEventListener('click', createBoxesHandler);
destroyBtnRef.addEventListener('click', destroyBoxesHandler);

let count;

function countBoxesHandler(event) {
  count = event.target.value;
}

function createBoxesHandler() {
  let boxSize = 30;

  for (let i = 0; i < count; i += 1) {
    const newBox = document.createElement('div');

    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    newBox.style.backgroundColor = `rgb(${red} ${green} ${blue})`;
    newBox.style.width += `${(boxSize += 10)}px`;
    newBox.style.height += `${(boxSize += 10)}px`;

    boxesRef.append(newBox);
  }

  inputRef.value = null;
}

function destroyBoxesHandler() {
  const boxes = document.querySelectorAll('#boxes div');
  boxes.forEach(box => box.remove());
}
