"use strict";
class Student {
    constructor(enr, name, testGr, workGr) {
        this._enrollment = enr;
        this._name = name;
        this._testGrade = testGr;
        this._workGrade = workGr;
    }
    get sumTestGrade() {
        return this._testGrade.reduce((prev, curr) => prev + curr, 0);
    }
    ;
    get sumWorkGrade() {
        return this._workGrade.reduce((prev, curr) => prev + curr, 0);
    }
    ;
    get averageTestGrade() {
        return this.sumTestGrade / this._testGrade.length;
    }
    get averageWorkGrade() {
        return this.sumWorkGrade / this._workGrade.length;
    }
}
const student = new Student(113204177, 'David', [10, 8, 5, 9], [10, 8]);
console.log(student.sumTestGrade);
console.log(student.sumWorkGrade);
console.log(student.averageWorkGrade);
console.log(student.averageTestGrade);
