"use strict";
var Color;
(function (Color) {
    Color["Black"] = "Preto";
    Color["White"] = "Branco";
    Color["Grey"] = "Cinza";
    Color["Yellow"] = "Amarelo";
    Color["Undefined"] = "Indefinido";
})(Color || (Color = {}));
;
class dog {
    constructor(name, type, color) {
        this._name = name;
        this._type = type;
        this._color = color;
    }
    dogSayHello() {
        console.log(`${this._name} diz: ${this._name.split('').map(_e => 'Au auuuu')}`);
    }
}
;
const Dog1 = new dog('Scooby', 'shih tzu');
console.log(Dog1);
Dog1._color = Color.Grey;
console.log(Dog1, '\n \n');
const Dog2 = new dog('Spyke', 'Pastor Alemão', Color.Yellow);
console.log(Dog2, '\n\n');
Dog2.dogSayHello();
Dog1.dogSayHello();
