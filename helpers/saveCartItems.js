const saveCartItems = async (cartItemsAdd) => {
  localStorage.setItem('cartItem', cartItemsAdd);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
