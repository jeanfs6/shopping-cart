const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('4 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');
  it('Teste se saveCartItems quando recebe o argumento <ol><li>Item</li></ol> o método localStorage.setItem é chamado', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalled();
  });
  it('Teste se saveCartItems quando recebe dois argumentos, "cartItems"e "<ol><li>Item</li></ol>" respectivamente o método localStorage é chamado', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage).toHaveBeenCalledWith('cartItems', '<ol><li>Item</li></ol>');
  });
});

