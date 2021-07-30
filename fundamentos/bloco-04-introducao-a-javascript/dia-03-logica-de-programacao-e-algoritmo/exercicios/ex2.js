let n = 5;
let esp = "";

for (let i = 0; i < n; i += 1){
    for (let j = n; j > 0 ; j -= 1){
        if (j > (i+1)) {
            esp +=' ';
        } else{
            esp += '*';
        }
    }
    console.log(esp);
    esp="";
}