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
}