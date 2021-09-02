const confront = (arrRef, arrConf) => {
  let grade = 0
  let verif = i => {
    if (arrRef[i] === arrConf[i]){
      grade += 1;
    } else if (arrRef[i] !== arrConf[i] && arrConf[i] !== 'N.A') {
      grade -= 0.5;
    }
  }
  for (let i = 0; i < arrRef.length; i += 1) {
    verif(i);
  }
  return grade;
}

const checkAns = (template, answer, callback) => {
  const result = callback(template, answer);
  return result;
}

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(checkAns(RIGHT_ANSWERS, STUDENT_ANSWERS,confront));