let custo = 3.9,
    venda = 4;

let lucroUnitário = venda - 1.2*custo;
let lucrok = 1000*lucroUnitário;

if (lucrok > 0) {
    console.log("Lucro de R$"+lucrok);
} else if (lucrok === 0) {
    console.log("Reveja sua operação, não está dando lucro");
} else {
    console.log("Prejuízo!!");
}