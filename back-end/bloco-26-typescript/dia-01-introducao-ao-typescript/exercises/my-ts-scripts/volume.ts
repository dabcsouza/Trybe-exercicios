import readlineSync from 'readline-sync';
export function convert( value: number, baseUnit: string, convUnit: string): number {
  const units = ['mm³', 'cm³', 'dm³', 'm³', 'dam³', 'hm³', 'km³'];
  if (units.indexOf(baseUnit) === -1 || units.indexOf(convUnit) === -1) {
    throw new Error(`Unidade inválida! As unidades Disponíves são: ${units}.`);
  }
  const convertTable: any =  {
    'mm³': -3,
    'cm³': -2,
    'dm³': -1,
    'm³': 0,
    'dam³': 1,
    'hm³': 2,
    'km³': 3,
  };
  return value * ( 10 ** (convertTable[baseUnit] - convertTable[convUnit]))
};

export function exec(): void {
  try {
    const value = readlineSync.question('Insira um valor a ser convertido: ');
    if (isNaN(Number(value))) throw new Error('Valor Inválido');
    const base: string = readlineSync.question('Insira sua unidade de partida: ');
    const toConvert: string = readlineSync.question('Insira sua unidade destino: ');
    console.log(`${value}${base} equivale a ${convert(Number(value), base, toConvert)}${toConvert}.`)
  } catch(e: any) {
    console.log(e.message);
  }
};