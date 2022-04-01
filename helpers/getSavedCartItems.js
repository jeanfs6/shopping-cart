const getSavedCartItems = async () => {
  const getCartItem = localStorage.getItem('cartItem');
  return getCartItem;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
