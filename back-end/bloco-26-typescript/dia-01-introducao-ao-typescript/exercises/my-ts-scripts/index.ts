import readlineSync from 'readline-sync';
import { exec as area } from './area.js';
import { exec as capacity } from './capacity.js';
import { exec as length } from './length.js';
import { exec as mass } from './mass.js';
import { exec as volume } from './volume.js';


enum scriptsOptions {
  area = 1,
  capacity,
  length,
  mass,
  volume
};

const scripts: any = {
  area,
  capacity,
  length,
  mass,
  volume,
}

let exitProgram: string = 'n';

while(exitProgram.toLocaleLowerCase() !== 's') {
  console.log('Opções: ')
  for(let i: number = 1; i <= 4; i += 1) {
    console.log(`${i} - ${scriptsOptions[i]}`);
  };
  const chose: number = Number(readlineSync.question('Escolha um script de conversão: '));
  try {
    if(isNaN(chose) || (chose < 0 && chose > 4)) throw new Error('Opção inválida');
    scripts[scriptsOptions[chose]]();
    exitProgram = readlineSync.question('Deseja encerrar o Programa s/n ? ');
  } catch (e: any) {
    console.log(e.message);
  }
}