'use strict';

const fontSizeControlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

fontSizeControlRef.addEventListener('input', fontSizeControlHandler);

function fontSizeControlHandler(event) {
  const fontSize = event.target.value;
  textRef.style.fontSize = fontSize+'px';
}