const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  return students.map((student, index) => {
    const studentObj = {};
    studentObj['name'] = student;
    let lastAverage = grades[index].reduce((acc, grade,_,array) =>  {
    acc += grade/(array.length);
    return acc;
  }, 0);
  studentObj['average'] = Math.round(lastAverage*10)/10;
  return studentObj;
  });
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);