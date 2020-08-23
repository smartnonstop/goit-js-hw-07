'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');

const ingredientElems = ingredients.map(ingredient => {
  
  const categoryItem = document.createElement('li');
  categoryItem.textContent = ingredient;
  
  return categoryItem;

});

ingredientsRef.append(...ingredientElems);
