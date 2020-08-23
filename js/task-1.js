'use strict';

const categoiresListRef = document.querySelector('#categories');

const categories = [...categoiresListRef.children];

console.log(`В списке ${categories.length} категории.`);

categories.forEach(category => {
  
  const [categoryName, categoryItems] = category.children; 

  console.log('Категория:', categoryName.textContent);
  console.log('Количество элементов:', categoryItems.children.length);

})
 
