let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald'
};

console.log('Bem Vinda ' + info['personagem'] + '.');

info.recorrente = 'Sim';
console.log(info);
console.log();

for (let i in info){
    console.log(i);
}

console.log();
for (let i in info){
    console.log(info[i]);
}

console.log();

let newInfo = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
  };


if (info.recorrente === 'Sim' && newInfo.recorrente === 'Sim') {
    delete info.recorrente;
    delete newInfo.recorrente;
    for (let i in info){
        console.log (info[i] + ' e ' + newInfo[i]);
    }
    console.log('Ambos recorrentes');   
}