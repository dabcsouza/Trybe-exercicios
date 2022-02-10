const fooParam = (a, b, c) => {
  const params = [Number(a), Number(b), Number(c)]
  return new Promise((resolve, reject) => {
    if(params.some((element) => isNaN(element))) (
      reject(new Error('Informe apenas números'))
    );

    const calc = (params[0] + params[1]) * params[2];
    if ( calc < 50) (
      reject(new Error('Valor muito baixo'))
    );

    resolve(calc);
  })
}

module.exports = fooParam;