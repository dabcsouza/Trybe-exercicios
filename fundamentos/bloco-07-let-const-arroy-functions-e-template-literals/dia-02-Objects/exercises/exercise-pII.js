const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};
  
const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};
  
const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addKey = (obj, key, value) => {
  obj[key] = value;
}

addKey(lesson2,'turno', 'Manhã');
console.table(lesson2);

const showKey = (obj) => {
  const keyObj = Object.keys(obj);
  for (let i in keyObj){
    console.log(keyObj[i]);
  }
}

showKey(lesson1);

const objLength = obj => Object.keys(obj).length;
  
console.log(objLength(lesson3));
console.log('\n');

const showValues = (obj) => {
const keyObj = Object.values(obj);
  for (let i in keyObj){
    console.log(keyObj[i]);
  }
}

showValues(lesson3);

console.log('\n');

// SOLVE 1

// const createAllLessons = (objs) => {
//   const allLessons = {};
//   for (let i = 1; i < 4; i += 1) {
//     objName = `lesson${i}`;
//     allLessons[objName] = objs[i-1];
//   }
//   return allLessons;
// }

// const allLessons = createAllLessons([lesson1, lesson2, lesson3]);
// console.log(allLessons);

// SOLVE 2

const allLessonsCreate = (obj1, obj2, obj3) => {
  const object1 = {},
        object2 = {},
        object3 = {};
  object1['lesson1'] = obj1;
  object2['lesson2'] = obj2;
  object3['lesson3'] = obj3;
  const allLessons = Object.assign(object1, object2, object3);
  return allLessons;
}

const allLessons = allLessonsCreate(lesson1, lesson2, lesson3);
// console.log(allLessons);

const allStudents = (obj) => {
  let students = 0;
  for (let i in obj) {
    for (let j in obj[i]) {
      if (typeof obj[i][j] === 'number') {
        students += obj[i][j]
      }
    }
  }
  return students;
}

const students = allStudents(allLessons);
console.log(students);

const getValueByNumber = (obj,number) => {
  const n = Math.ceil(number);
  const validN = objLength(obj);
  if (n >= 0 && n < validN) {
  return  Object.keys(obj)[n];
  } else {
    return 'Entrada Inválida.'
  }
}

console.log(`
${getValueByNumber(lesson1,0)}`);

console.log('\n\n');

const verifyPair = (obj, key, value) => {
  arrEntries = Object.entries(obj);
  for (let i = 0; i < arrEntries.length; i += 1){
    if (arrEntries[i].indexOf(key) !== -1){
      if (arrEntries[i].indexOf(value) !== -1) {
        return true;
      } else {return false;}
    }
  }
}

console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));