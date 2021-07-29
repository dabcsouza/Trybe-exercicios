let a=13,
    b=14;
    c = 15;
    

if (a > b){
    if (a > c) {
    console.log("O maior número é: " + a);
    } else if (a < c){
        console.log("O maior número é: " + c); 
    } else {
        console.log("O maior número é : " + a);
    }
} else if (b > c){
    console.log("O maior número é: " + b);
} else if(b < c) {
        console.log("O maior número é: " + c);
} else {
        console.log("O maior número é: " + b);
}
