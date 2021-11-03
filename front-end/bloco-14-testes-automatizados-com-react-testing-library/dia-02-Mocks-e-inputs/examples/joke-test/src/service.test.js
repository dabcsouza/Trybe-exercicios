const service = require('./service');
jest.mock('./service');
afterEach(() => jest.clearAllMocks);

test('teste 1 da função gerar números aleatórios',() => {
  service.randNumber.mockReturnValue(10);
  service.randNumber();
  expect(service.randNumber).toHaveBeenCalled();
  expect(service.randNumber).toReturn();
  expect(service.randNumber()).toBe(10);
  expect(service.randNumber).toHaveBeenCalledTimes(2);
});

test('teste 2 da função gerar números aleatórios',() => {
  service.randNumber.mockImplementationOnce((a, b) => a / b);
  expect(service.randNumber(10, 5)).toBe(2);
  expect(service.randNumber(2, 1)).not.toBe(2);
  expect(service.randNumber).toBeCalledTimes(2);
  expect(service.randNumber).lastCalledWith(2, 1)
});

test('teste 3 da função gerar números aleatórios',() => {
  service.randNumber.mockImplementation((a, b, c) => a * b * c);
  expect(service.randNumber(10, 5, 2)).toBe(100);
  expect(service.randNumber(2, 1, 1)).toBe(2);
  jest.resetAllMocks();
  expect(service.randNumber(2, 1, 1)).not.toBe(2);
  service.randNumber.mockImplementation((a) => 2 * a);
  expect(service.randNumber(2)).toBe(4);
  expect(service.randNumber).toHaveBeenCalledTimes(2);
});

test('teste da função caixa alta',() => {
  service.fooUperCase.mockImplementation((a) => a.toLowerCase());
  service.fooFirstLetter.mockImplementation((a) => a[a.length - 1]);
  expect(service.fooUperCase('DAVID')).toBe('david');
  expect(service.fooFirstLetter('souza')).toBe('a');
  service.fooUperCase.mockRestore();
  const mockFooConc = jest.spyOn(service, 'fooConc');
  expect(mockFooConc('Dav', 'i', 'd')).toBe(undefined);
});


