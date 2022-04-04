type testGrade = [number, number, number, number];
type workGrade = [number, number];
class Student {
  private _enrollment: number;
  private _name: string;
  private _testGrade: testGrade;
  private _workGrade: workGrade;

  constructor (enr: number, name: string, testGr: testGrade, workGr: workGrade) {
    this._enrollment = enr;
    this._name = name;
    this._testGrade = testGr;
    this._workGrade = workGr;
  }

  get sumTestGrade(): number {
    return this._testGrade.reduce((prev: number, curr: number) => prev + curr, 0)
  };

  get sumWorkGrade(): number {
    return this._workGrade.reduce((prev: number, curr: number) => prev + curr, 0)
  };

  get averageTestGrade(): number {
    return this.sumTestGrade / this._testGrade.length;
  }

  get averageWorkGrade(): number {
    return this.sumWorkGrade / this._workGrade.length;
  }
}

const student = new Student(113204177, 'David', [10, 8, 5, 9], [10, 8])

console.log(student.sumTestGrade);
console.log(student.sumWorkGrade);
console.log(student.averageWorkGrade);
console.log(student.averageTestGrade);