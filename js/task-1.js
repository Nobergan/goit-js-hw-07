// const categoriesRef = document.querySelector('#categories');
// console.log(categoriesRef);

const categoriesItemsRef = categories.querySelectorAll('.item');
console.log(`В списке ${categoriesItemsRef.length} категории.`);

const categoriesList = function (items) {
  items.forEach(item => {
    const title = item.querySelector('h2');
    const itemCount = item.querySelectorAll('li');

    console.log(`Категория: ${title.textContent}`);
    console.log(`Количество элементов: ${itemCount.length}`);
  });
};

categoriesList(categoriesItemsRef);
