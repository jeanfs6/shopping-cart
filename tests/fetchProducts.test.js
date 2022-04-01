require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  // implemente seus testes aqui
  
  it('Teste se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  it('teste se a fetch foi chamada e executa a função fetchProducts com o argumento "computador"', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  })
  it('Teste se a função fetch utiliza o endpoint certo de acordo com o parâmetro passado;', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  })
  it('Testa se o retorno da função fetProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch', async () => {
     const result = await fetchProducts('computador');
    expect(result).toEqual(typeof computadorSearch);
  })
  it('Testa se, ao chamar a função fetchProducts sem argumento, retorna um erro', async () => {
    expect(await fetchProducts()).toEqual(new Error('You must provide an url'));
  })

});
