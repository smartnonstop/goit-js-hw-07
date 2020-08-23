'use strict';

const userInputRef = document.querySelector('#controls > input[type="number"]');
const renderBtnRef = document.querySelector('#controls > button[data-action="render"]');
const destroyBtnRef = document.querySelector('#controls > button[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');



renderBtnRef.addEventListener('click', renderBtnHandler);
destroyBtnRef.addEventListener('click', destroyBtnHandler);



function renderBtnHandler() {
  const amount = Number(userInputRef.value);
  const min = Number(userInputRef.getAttribute('min'));
  const max = Number(userInputRef.getAttribute('max'));

  (amount >= min && amount <= max) ? createBoxes(amount) : alert('Введите число от 0 до 100!');
}

function destroyBtnHandler() {
  destroyBoxes();
}

function destroyBoxes() {
  const boxes = [...boxesRef.children];

  boxes.forEach(box => {
    box.remove();
  });
}

function createBoxes(amount) {
  
  const boxes = [];
  const defaultWidth = 30;

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    const boxWidth = 30 + i*10;

    box.style.width = boxWidth+'px';
    box.style.height = boxWidth+'px';
    box.style.backgroundColor = getRandomColor();

    boxes.push(box);
  }

  boxesRef.append(...boxes);

}
 
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

