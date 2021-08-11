const firstLi = document.getElementById('firstLi');
const secondLi = document.getElementById('secondLi');
const thirdLi = document.getElementById('thirdLi');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

firstLi.addEventListener('click', changeClass);
input.addEventListener('keyup', alteraNome);
thirdLi.addEventListener('dblclick',redirect);
secondLi.addEventListener('mouseover',changeColor);


function changeClass(element){
  if (document.querySelector('.tech')){

  } else {
    element.target.className = "tech";
  }
}

function alteraNome(){
  document.querySelector('.tech').innerText = input.value;
}

function redirect(){
  open('https://dabcsouza.github.io/');
}

function changeColor(){
  secondLi.style.backgroundColor = '#65B5FC';
}

/* 
 

 Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/