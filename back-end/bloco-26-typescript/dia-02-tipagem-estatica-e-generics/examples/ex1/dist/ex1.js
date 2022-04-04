"use strict";
const showBird = (sBird) => {
    console.log(`O pássaro possui o tamanho de ${sBird.size}cm e ${sBird
        .fly ? '' : 'não'} voa e ${sBird.sing ? '' : 'não'} canta}`);
};
showBird({ size: 23, fly: true, sing: false });
const sumValues = (val) => {
    const { x, y } = val;
    console.log(`A soma dos valores é ${x + y}`);
};
const showaddress = (addr) => {
    const { street, district, number, country, reference, city, complemente } = addr;
    console.log('Endereço:');
    console.log('Rua: ', street);
    console.log('Nº: ', number);
    console.log(complemente);
    console.log('Bairro: ', district);
    console.log('Cidade: ', city);
    console.log('Pais: ', country);
    console.log('Referência: ', reference);
};
showaddress({
    street: 'Rua das Gavotas',
    district: 'Copacabana',
    number: 22,
    country: 'Brasil',
    reference: 'Supermercado Zona Sul',
    city: 'Rio de Janeiro',
    complemente: 'Apt 804'
});
