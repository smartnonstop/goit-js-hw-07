'use strict';

const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
const placeholder = nameOutput.textContent;


nameInput.addEventListener('input', nameInputHandler);

function nameInputHandler (event) {
  const userInput = event.target.value;

  if (userInput.length === 0) {
    nameOutput.textContent = placeholder;
  } else {
    nameOutput.textContent = userInput;
  }

}