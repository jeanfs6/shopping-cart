// const { fetchItem } = require("./helpers/fetchItem");
const cartItem = document.querySelector('.cart__items');

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}
 const products = async () => {
  const items = document.querySelector('.items');
   const data = await fetchProducts('computador');
   data.results.forEach((element) => {
     const ObjectProduct = {
       sku: element.id,
       name: element.title,
       image: element.thumbnail,
       
      };
      const item = createProductItemElement(ObjectProduct);
      items.appendChild(item);
   });
 };

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  event.target.remove();
 }
 
function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}
const fetchItemId = async (idItem) => {
  const data = await fetchItem(idItem);
  const resultItem = createCartItemElement({
    sku: data.id, name: data.title, salePrice: data.price });
    cartItem.appendChild(resultItem);
};

const listenerButton = () => {
  const buttons = document.querySelectorAll('.item__add');
  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const getId = getSkuFromProductItem(event.target.parentElement);
      fetchItemId(getId);
    });
  });
};
window.onload = async () => { 
 await products();
 listenerButton();
};
