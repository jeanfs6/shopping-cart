const cartItem = document.querySelector('.cart__items');
const totalPrice = document.querySelector('.total-price');
const emptyCart = document.querySelector('.empty-cart');

const calculateCartItem = () => {
  const li = document.querySelectorAll('.cart__item');
  // console.log(li);
  let totalP = 0;
  console.log(li[0]);
  // console.log(li[0].innerText);
  // console.log(li[0].innerText.split(' '));
  // console.log(li[0].innerText.split('$'));
  li.forEach((item) => {
     totalP += Number(item.innerText.split('$')[1]);
    //  console.log(totalP);
     });
     totalPrice.innerHTML = totalP;
}; 
const clearCart = () => {
  cartItem.innerHTML = '';
  calculateCartItem();
};

emptyCart.addEventListener('click', clearCart);

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
  saveCartItems(cartItem.innerHTML);
  calculateCartItem();
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
    saveCartItems(cartItem.innerHTML);
    calculateCartItem();
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
   const getList = await getSavedCartItems();
   cartItem.innerHTML = getList;
   cartItem.addEventListener('click', cartItemClickListener);
 await products();
 listenerButton();
 calculateCartItem();
};
