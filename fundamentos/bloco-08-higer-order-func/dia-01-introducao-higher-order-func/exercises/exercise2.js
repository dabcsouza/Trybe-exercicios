const checkResult = (n1, n2) => {
  let verify;
  n1 === n2 ? verify = true:verify = false;
  return verify;
}

const result = (callback, nPlayed) => {
  const number = Math.ceil(Math.random()*5);
  const fResult = callback(number, nPlayed);
  if (fResult) {
    return 'Parabéns você ganhou';
  }
  return  'Tente novamente';
}

console.log(result(checkResult,3));