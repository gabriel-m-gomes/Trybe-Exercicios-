const myFizzBuzz = require('./ myFizzBuzz');

describe('requisito 1', () => {
    it('A função myFizzBuzz recebe (num), sendo num um número divisível por 3 e 5, e verifique se o retorno é o esperado.', () => {
      expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });
});

describe('requisito 2', () => {
    it('A função myFizzBuzz recebe (num), sendo num um número divisível por 3, e verifique se o retorno é o esperado.', () => {
      expect(myFizzBuzz(9)).toBe('fizz');
    });
});

describe('requisito 3', () => {
    it('A função myFizzBuzz recebe (num), sendo num um número divisível por 5, e verifique se o retorno é o esperado.', () => {
      expect(myFizzBuzz(10)).toBe('buzz');
    });
});

describe('requisito 4', () => {
    it('A função myFizzBuzz recebe (num), sendo num um número divisível por nenhum dos dois, e verifique se o retorno é o esperado.', () => {
      expect(myFizzBuzz(2)).toBe(2);
    });
});

describe('requisito 5', () => {
    it('A função myFizzBuzz recebe (num), sendo num um tipo primitivel diferente de number número, e verifique se o retorno é o esperado.', () => {
      expect(myFizzBuzz('')).toBe(false);
    });
});