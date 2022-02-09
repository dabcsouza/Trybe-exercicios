const fs = require('fs').promises;

const nomeDoArquivo = 'meu-arquivo.txt';

fs.readFile(nomeDoArquivo, 'utf-8')
  .then((content) => { 
    console.log(`Conteúdo do arquivo: ${content}`);
    fs.writeFile('./meu-arquivo2.txt', `${content}\n${content}\nMeu textão`)
      .then(() => {
        console.log('Arquivo escrito com sucesso!');
      })
      .catch((e) => {
        console.log(`Erro ao escrever no arquivo: ${e.message}`);
      })
  })
  .catch((e) => {
    console.log(`Não foi possível ler o arquivo ${ nomeDoArquivo }
     Erro: ${e}`);
     process.exit(1);
  });