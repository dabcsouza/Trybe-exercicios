const { expect } = require("chai");

const verificaNumero = require('./verificaNumero');
const writeInFile = require('./writeInFile');

describe('Dado uma função que verifica um número passado por parâmetro', () => {
  describe('verifica se a resposta', () => {
    it('é uma string', () => {
      response = verificaNumero(6);
      expect(response).to.be.a('string');
    });
    it('é "positivo" se o parâmetro for positivo.', () => {
      response = verificaNumero(8);
      expect(response).to.be.equal('positivo');
    });
    it('é "neutro" se o parâmetro for zero.', () => {
      response = verificaNumero(0);
      expect(response).to.be.equal('neutro');
    });
    it('é "negativo" se o parâmetro for negativo.', () => {
      response = verificaNumero(-10);
      expect(response).to.be.equal('negativo');
    });
    it('é "o valor deve ser um número" se o parâmetro não for do tipo number.', () => {
      response = verificaNumero('a');
      expect(response).to.be.equal('o valor deve ser um número');
    });
  });
});

describe('Dado uma função que escreve dados em um arquivo verifica', () => {
  it('se writeInFile é uma função', () => {
    expect(writeInFile).to.be.a('function');
  });

  it('se a função for chamada com os parâmetros corretos retorna uma string',
    async () => {
      const response = await writeInFile('./arquivo', 'Meu texto');      
      expect(response).to.be.a('string');
    });

  it('se a função for chamada com os parâmetros corretos retorna ok',
    async () => {
      const response = await writeInFile('./arquivo', 'Meu texto');      
      expect(response).to.be.equal('ok');
    });
});