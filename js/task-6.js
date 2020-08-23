'use strict';

const validationInputRef = document.querySelector('#validation-input');

validationInputRef.addEventListener('blur', validationInputHandler);


function validationInputHandler(event) {
  const input = event.target;
  const currentLength = input.value.length;
  const dataLength = Number(input.getAttribute('data-length'));

  if (currentLength === dataLength) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
    
}