const fetchProducts = async (product) => {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${product}`);
  // console.log(response);
  const data = await response.json();
  // console.log(data);
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
