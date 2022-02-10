const fs = require('fs');

const writeInFile = (nameFile, contentFile) => {
  return new Promise((res, rej) => (
    fs.writeFile(nameFile, contentFile, (e) => {
      return e 
        ? rej (new Error('Não foi possível gravar no arquivo'))
        : res('ok');
    })
  ))
}

module.exports = writeInFile;