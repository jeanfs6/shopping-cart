require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');

it('Teste se fetchItem é uma função', () => {
  expect(typeof fetchItem).toBe('function');
});
it('teste se a fetch foi chamada e executa a função fetchItem com o argumento "MLB1615760527"', async () => {
  await fetchItem('MLB1615760527');
  expect(fetch).toHaveBeenCalled();
})
it('Teste se a função fetch utiliza o endpoint certo de acordo com o parâmetro passado;', async () => {
  await fetchItem('MLB1615760527');
  expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
})
it('Testa se o retorno da função fetProducts com o argumento "MLB1615760527" é uma estrutura de dados igual ao objeto já importado no computador', async () => {
   const result = await fetchItem('MLB1615760527');
  expect(result).toEqual(typeof item);
})
it('Testa se, ao chamar a função fetchItem sem argumento, retorna um erro', async () => {
  expect(await fetchItem()).toEqual(new Error('mensagem esperada aqui'));
})

});


