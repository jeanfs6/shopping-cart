const saveCartItems = async (cartItemsAdd) => {
  localStorage.setItem('cartItem', cartItemsAdd); // nome da chave  e o valor
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
