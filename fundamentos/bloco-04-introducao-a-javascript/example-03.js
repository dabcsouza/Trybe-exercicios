nota = Math.floor(Math.random()*100 + 1);

if (nota > 80) {
    console.log("Parabéns, você foi aprovada(o)!");
} else if (nota >= 60 && nota <=80 ) {
    console.log("Você está na nossa lista de espera");
}if (nota < 60) {
    console.log("Você foi reprovada(o)");
}