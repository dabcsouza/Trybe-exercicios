const sum = require ('./sum.js');
const myRemove = require ('./myRemove.js');
const myRemoveWithoutCopy = require ('./myRemoveWithoutCopy.js');
const myFizzBuzz = require('./myFizzBuzz.js');

describe('Realiza testes na função sum.', () => {
it('Testa se a soma de 4 e 5 retorna 9', () => {
  expect(sum(4, 5)).toBe(9);
});
it('Testa se a soma de 0 e 0 retorna 0', () => {
  expect(sum(0,0)).toBe(0);
});
});

describe('Realiza testes na função myRemove',() => {
  it('Verifica se for passado o array [1, 2, 3, 4] e 3 retorna o array especificado', () => {
  expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('Verifica se for passado o arrya [1, 2, 3, 4] e 3 não retorna o array [1, 2, 3, 4]', () => {
    expect( myRemove( [1, 2, 3, 4], 3) ).not.toEqual( [1, 2, 3, 4] );
  });
  it('Verifica se nenhum ítem for passado para remoção, o array não sofre alteração', () => {
    expect( myRemove([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });
  it('Verifica se for passado o array [1, 2, 3, 4] e 5 retorna o array especificado', () => {
  expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe('Realiza alguns testes na função myRemoveWithoutCopy', () => {
  it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado',() => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações', () => {
    const myArray = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy(myArray, 3)).toEqual(myArray);
  });
  it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado',() => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe('Realiza alguns testes na função myFizzBuzz', () => {
  it('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });
  it('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });
  it('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(13)).toBe(13);
  });
  it('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz('13')).toBeFalsy();
  });
});

describe('realiza alguns testes para verificar se os Objetos são iguais.', () => {

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

it('Verifica se o obj1 e obj 2 são iguais', () => {
  expect(obj1).toEqual(obj2);
});
it('Verifica se o obj1 é diferente do obj3', () => {
  expect(obj1).not.toEqual(obj3);
});
});
