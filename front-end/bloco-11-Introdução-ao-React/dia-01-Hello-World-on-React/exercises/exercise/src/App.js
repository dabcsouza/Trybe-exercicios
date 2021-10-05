import './App.css';
var Task = (value) => {
  return (
    <li> {value}</li>
  )
}
const todoList = ['Acordar', 'Tomar Banho', 'Estudar ingês', 'Tomar café', 'Estudar',
'Fazer almoço', 'Dar comida para as Crianças', 'Almoçar', 'Trybe', 'Exercícios', 'curso de inglês','Dormir'];
const App = () => {
  return (
    <ol>
      {todoList.map((element) => Task(element))}
    </ol>
    );
};

export default App;
