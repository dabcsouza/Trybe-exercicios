function palindrome(word){
    let wordToComp = word;
    word = word.toLowerCase();
    wordToRev = word.split('').reverse();
    word = wordToRev.join('');
    if (wordToComp === word) {
        return true;
    } else {
        return false;
    }    
}

let num = [2, 4, 6, 7, 10, 0, -3];

function minPosition(num){
    let position = 0;
        for (let i = 1; i < num.length; i += 1){
            if (num[i] < num[i-1]){
                position = i;
            }
        }
    return position;
}
 
function maxPosition(num){
    let position = 0;
        for (let i = 1; i < num.length; i += 1){
            if (num[i] > num[i-1]){
                position = i;
            }
        }
    return position;
}


console.log(minPosition(num));
console.log(maxPosition(num));
