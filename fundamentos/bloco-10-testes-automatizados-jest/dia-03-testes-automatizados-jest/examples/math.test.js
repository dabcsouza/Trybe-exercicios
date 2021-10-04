const math = require('./math');

describe('faz mocks nas funções do arquivo math', () => {
  it('Mocka a função subtrair', () => {
    math.subtrair = jest.fn();
    math.subtrair();
    expect(math.subtrair).toHaveBeenCalled();
  });

  it('Mocka a função multiplicar', () => {
    math.multiplicar = jest
      .fn()
      .mockReturnValue(10);
    math.multiplicar();
    expect(math.multiplicar).toHaveBeenCalled();
    expect(math.multiplicar(2,5)).toBe(10);
    expect(math.multiplicar).toHaveBeenCalledWith(2,5);
    expect(math.multiplicar).toHaveBeenCalledTimes(2);
  });

  it('Mocka a função somar', () => {
    math.somar = jest.fn();
    math.somar.mockImplementation((a, b) => a + b);
    math.somar(35, 45);
    expect(math.somar).toHaveBeenCalled()
    expect(math.somar).toHaveBeenCalledWith(35, 45);
    expect(math.somar).toHaveBeenCalledTimes(1);
    expect(math.somar(35,45)).toBe(80);
    expect(math.somar).toHaveBeenCalledTimes(2);
  });

  it('Mocka a função dividir', () => {
    math.dividir = jest
      .fn()
      .mockReturnValue(15)
      .mockReturnValueOnce(5)
      .mockReturnValueOnce(2);
    math.dividir(2, 5);
    expect(math.dividir).toHaveBeenCalledTimes(1);
    expect(math.dividir).toHaveBeenCalledWith(2,5);
    expect(math.dividir(10,5)).toBe(2);
    expect(math.dividir(30,2)).toBe(15);
  });

  it('Mocka a função original subtrair', () => {
    const minus = jest.spyOn(math, 'subtrair');
    minus.mockReturnValue(20);
    expect(minus(3,5)).toBe(20);
    expect(minus).toHaveBeenCalledTimes(2);
    math.subtrair.mockRestore();
    expect(math.subtrair(5,3)).toBe(2);
  });
});
