const register = (employeeName) => {
  const email = `${employeeName.toLowerCase().split(' ').slice(0,3).toString().replace(',','-')}@trybe.com`;
  const fullName = employeeName;
  const employeeObject = {};
  employeeObject.nomeCompleto = fullName;
  employeeObject.email = email;
  return employeeObject;
}

const newEmployees = (funcReg) => {
  const employees = {
    id1: funcReg('Pedro Guerra'),
    id2: funcReg('Luiza Drumond'),
    id3: funcReg('Carla Paiva'),
  }
  return employees;
};

console.log(newEmployees(register));