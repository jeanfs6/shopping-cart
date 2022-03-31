const getSavedCartItems = async () => {
  const recuperaCarrinho = localStorage.getItem('cartItem');
  return recuperaCarrinho;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
