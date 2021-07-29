let nota;

nota = Math.floor(Math.random()*100 + 1);

if (nota >= 90) {
    console.log("Sua nota é A");
} else if (nota >= 80 && nota < 90) {
    console.log("Sua nota é B");
}else if (nota >= 70 && nota < 80) {
    console.log("Sua nota é C");
}else if (nota >= 60 && nota < 70) {
    console.log("Sua nota é D");
}else if (nota >= 50 && nota < 60) {
    console.log("Sua nota é E");
}else {
    console.log("Sua nota é F");
}