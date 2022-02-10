const axios = require('axios');
const fs = require('fs').promises;
const fooParam = require('./fooParam');


const randomNumber = Array(3).fill('')
  .map((el) => el = Math.floor(Math.random() * 100 + 1));

// THEN/CATCH
// fooParam(randomNumber[0], randomNumber[1], randomNumber[2])
//   .then((resp) => console.log(`Os números de entrada foram: [${randomNumber}]\nO resultado do cálculo foi: ${resp}`))
//   .catch((e) => console.log(`Error: ${e.message}`));

// async/await
( async () => {
    try {
      const resp = await fooParam(randomNumber[0], randomNumber[1], randomNumber[2]);
      console.log(`Os números de entrada foram: [${randomNumber}]\nO resultado do cálculo foi: ${resp}`)
    } catch(e) {
      console.log(`Error: ${e.message}`);
    }
  }
) ();

(
  async () => {
    try {
      const response = await axios('https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/nodejs/async-flow/simpsons-94f8eb570f2ea830462ee2375ded177b.json');
      await fs.writeFile('./simpsons.json', JSON.stringify(response.data));
    } catch(e) {
      console.log(e.message);
    }
  }
) ();

( async () => {
  try {
    const array = JSON.parse( await fs.readFile('./simpsons.json'));
    array.forEach((obj) => console.log(`${obj.id}- ${obj.name}`));
  } catch(e) {
    console.log(e.message);
  }
}
) ()

