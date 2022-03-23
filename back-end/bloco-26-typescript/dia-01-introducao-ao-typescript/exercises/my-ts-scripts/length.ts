import readlineSync from 'readline-sync';
export function convert( value: number, baseUnit: string, convUnit: string): number {
  const units = ['mm', 'cm', 'dm', 'm', 'dam', 'hm', 'km'];
  if (units.indexOf(baseUnit) === -1 || units.indexOf(convUnit) === -1) {
    throw new Error(`Unidade inválida! As unidades Disponíves são: ${units}.`);
  }
  const convertTable: any = {
    mm: -3,
    cm: -2,
    dm: -1,
    m: 0,
    dam : 1,
    hm: 2,
    km: 3,
  };
  return value * ( 10 ** (convertTable[baseUnit] - convertTable[convUnit]))
};

export const exec = (): void => {
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

