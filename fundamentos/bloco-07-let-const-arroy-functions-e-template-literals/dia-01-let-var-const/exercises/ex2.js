n=4;
const fatorial = (n) => {
  if (n>0) {    
    for (let i = n; i>1; i-=1){
      n = n*(i-1);
    }
  } else if(n === 0) {
    n = 1;
  } else {n=NaN;}
}

fatorial(n);
console.log(n);