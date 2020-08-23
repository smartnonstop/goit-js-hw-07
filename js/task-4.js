'use strict';

const counter = document.querySelector('#value');
const decrementBtn = document.querySelector('#counter > button[data-action="decrement"]');
const incrementBtn = document.querySelector('#counter > button[data-action="increment"]');

let counterValue = Number(counter.textContent);

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);


function decrement () {
  counterValue -= 1;
  counter.textContent = counterValue;
}

function increment () {
  counterValue += 1;
  counter.textContent = counterValue;
}

