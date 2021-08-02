let n = 5;
let mid = n/2;
let print = "";

for (let i = 0; i < n; i += 1){
    for (let j = n - 1; j >= 0 ; j -= 1){
        if ((i%2) === 1) {
            print +=' ';
        } else{
            if (j < mid - i/2 || j > mid + i) {
                print +=' ';
            } else {
                print += '*';
            }
        }
    }
    console.log(print);
    print="";
}