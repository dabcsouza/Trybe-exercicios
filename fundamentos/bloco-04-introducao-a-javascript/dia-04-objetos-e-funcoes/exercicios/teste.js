function hydrate(bebidas) {
    let str = bebidas.replace(/[^0-9]/g,"");
    let sum = 0;
    for (let i=0; i < str.length; i += 1){
        sum += parseInt(str[i], 10);
    }
    if (sum > 1){
    return sum + " copos de água";
    } else if (sum === 1) {return sum + " copo de água"}
}

console.log(hydrate("1 cerveja"));