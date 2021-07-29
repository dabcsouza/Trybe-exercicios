let salario = 100000;

if (salario <= 1556.94){
    console.log(salario*(1- .08));
} else if (salario > 1556.94 && salario <= 2592.92) {
    if (salario*(1 - .09) <= 1903.99) {
        console.log(salario*(1 - .09));
    } else {
        console.log(salario*(1 - .09)*(1-.075) + 142.8)
    }
} else if (salario > 2592.92 && salario <= 5189.82) {
    if (salario*(1 - .11) <=  2826.65){
        console.log(salario*(1 - .11)*(1-.075) + 142.8);
    } else if (salario*(1 - .11) > 2826.65 && salario*(1 - .11) <= 3751.05) {
        console.log(salario*(1 - .11)*(1-.15) + 354.8);
    }else if (salario*(1 - .11) > 3751.05 && salario*(1 - .11) <= 4664.68) {
        console.log(salario*(1 - .11)*(1-.225) + 636.13);
    }
} else {
    if ((salario - 570.88) <= 4664.68){
        console.log((salario - 570.88)*(1-.225) + 636.13);
    }else{
        console.log((salario-570.88)*(1 - .275) + 869.36);
    }
}