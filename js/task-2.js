const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const createLiItem = ingredient => {
  const ingredientItemRef = document.createElement('li');
  ingredientItemRef.textContent = ingredient;

  return ingredientItemRef;
};

const ingredientsItems = ingredients.map(ingredient =>
  createLiItem(ingredient),
);
// console.log(ingredientsItems);

const ingredientsRef = document.querySelector('#ingredients');
// console.log(ingredientsRef);

ingredientsRef.append(...ingredientsItems);
