// function encode(textToEncode) {
//     let text = textToEncode;
//     for (let i in text){
//       text = text.replace('a', '1');
//       text = text.replace('e', '2');
//       text = text.replace('i', '3');
//       text = text.replace('o', '4');
//       text = text.replace('u', '5');
//     }
//     console.log(text)
//   }

//   encode('How are you today?');


// function techList(arrTech, name) {
    
//     let arrAns = [];
//     let arrMan = arrTech.sort();

//     for (let i = 0; i < arrMan.length; i += 1){
//         arrAns.push({tech: arrMan[i],
//                      name: name});
//     }
//     return arrAns;
//     }

// techList(["React", "Jest", "HTML", "CSS", "JavaScript"],'David');
// [ 'CSS', 'HTML', 'JavaScript', 'Jest', 'React' ].length





// generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]);

// function checkNumber(number){
//     let contRepeat = 0;
//     for (let i in number){
//         if (number[i] < 0) {
//             return 0;
//             break;
//         }
//     }
//     for (let i in number){
//         if (number[i] > 9) {
//             return 1;
//             break;
//         }
//     }
//     number = number.sort();
//     let nRepeat = 0;
//     let nRepeatQ = 0;
//     for (let i = 1; i < number.length; i += 1){
//         if (number[i] === number[i-1]){
//             contRepeat += 1;
//             if (contRepeat > 2){
//                 nrepeat = number[i];
//                 for (let j in number){
//                     if (nrepeat == number[j]){
//                         nRepeatQ += 1;
//                     }
//                 }
//                 if (nRepeatQ >= 3) {
//                     return 2;
//                     break;
//                 }
//             }
//         }
//     }
//     return 3;
// }

// function generatePhoneNumber(telNumber) {
//     if (telNumber.length === 11 && checkNumber(telNumber) === 3) {
//         let numberFormated;
//         numberFormated = telNumber.join();
//         return numberFormated;

//         //Uso do replace tirado do blog da Trybe https://blog.betrybe.com/javascript/javascript-replace/
//     } else if (checkNumber(telNumber) === 0) {
//         return "não é possível gerar um número de telefone com esses valores";
//     } else if (checkNumber(telNumber) === 1) {
//         return "não é possível gerar um número de telefone com esses valores";
//     } else if (checkNumber(telNumber) === 2){
//         return "não é possível gerar um número de telefone com esses valores";
//     } else { return "Array com tamanho incorreto.";}
//   }

//   console.log(generatePhoneNumber([2, 2, 3, 4, 5, 6, 7, 8, 9, 0, 9]));

