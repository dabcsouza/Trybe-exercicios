const testingScope = escopo => {
  const ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
  const ifScopef = `Ótimo, fui utilizada no escopo !`;
  escopo?console.log(ifScope):console.log(ifScopef);
}

testingScope(true);