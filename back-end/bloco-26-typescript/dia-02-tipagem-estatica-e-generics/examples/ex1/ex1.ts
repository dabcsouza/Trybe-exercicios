type bird = {
  size: number,
  fly: boolean,
  sing: boolean,
};

const showBird = (sBird: bird): void => {
  console.log(`O pássaro possui o tamanho de ${sBird.size}cm e ${sBird
    .fly ? '' : 'não'} voa e ${sBird.sing ? '' : 'não'} canta}`)
};

showBird({size: 23, fly: true, sing: false});

type values = {
  x: number,
  y: number,
};

const sumValues = (val: values): void => {
  const {x, y} = val;
  console.log(`A soma dos valores é ${x + y}`);
};

type address = {
  street: string,
  district: string,
  number: number,
  country: string,
  reference: string,
  city: string,
  complemente: string,
}

const showaddress = (addr: address): void => {
  const { street, district,
      number, country, reference, city, complemente } = addr;
  console.log('Endereço:');
  console.log('Rua: ', street);
  console.log('Nº: ', number);
  console.log(complemente);
  console.log('Bairro: ', district);
  console.log('Cidade: ', city)
  console.log('Pais: ', country);
  console.log('Referência: ', reference);
}

showaddress({
  street: 'Rua das Gavotas',
  district: 'Copacabana',
  number: 22,
  country: 'Brasil',
  reference: 'Supermercado Zona Sul',
  city: 'Rio de Janeiro',
  complemente: 'Apt 804'
});

