const getCPF = (doc: number | string) => {
  if ( typeof doc === 'number' ) console.log(doc.toString().replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"));

  if (typeof doc === 'string') console.log(doc);
};

getCPF(88377592744);
getCPF('422.454.243-32');

const selectOS = (system: 'Windows' | 'MacOS' | 'Linux' ) => {
  console.log(`O sistema escolhido é: ${system}`);
};

selectOS('Linux');