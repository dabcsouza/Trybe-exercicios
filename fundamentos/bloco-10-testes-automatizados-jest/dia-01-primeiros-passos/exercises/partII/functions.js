function encode(textToEncode) {
  let text = textToEncode;
  for (let i in text){
    text = text.replace('a', '1');
    text = text.replace('e', '2');
    text = text.replace('i', '3');
    text = text.replace('o', '4');
    text = text.replace('u', '5');
  }
  return text;
}
