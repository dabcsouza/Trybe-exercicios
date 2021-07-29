let nomePeca= "Peao";

console.log(nomePeca.toLowerCase());

if (nomePeca.toLowerCase() ==="bispo"){
    console.log("diagonal");
}else if (nomePeca.toLowerCase() ==="cavalo"){
    console.log("movimento em L >> 3 casas horizontais e 1 vertical ou 1 casa horizontais e 3 verticais");
}else if (nomePeca.toLowerCase() ==="rei"){
    console.log("Qualquer movimento 1 casa");
}else if (nomePeca.toLowerCase() ==="rainha"){
    console.log("Qualquer movimento quantas casas precisar");
}else if (nomePeca.toLowerCase() ==="torre"){
    console.log("vertical e horizontal quantas casas precisar");
}else if (nomePeca.toLowerCase() ==="peao"){
    console.log("vertical uma casa");
}else {
    console.log("Peça inválida.")
}