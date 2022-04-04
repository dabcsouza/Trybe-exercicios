"use strict";
var color;
(function (color) {
    color["red"] = "Vermelho";
    color["silver"] = "Prata";
    color["black"] = "Preto";
    color["white"] = "Branco";
})(color || (color = {}));
var turn;
(function (turn) {
    turn["right"] = "Direita";
    turn["left"] = "Esquerda";
})(turn || (turn = {}));
var sense;
(function (sense) {
    sense["front"] = " foi em frente";
    sense["back"] = "Deu r\u00E9";
})(sense || (sense = {}));
class car {
    constructor(brand, color, doors) {
        this.honk = () => {
            console.log('< Bip Bip >');
        };
        this.openTheDoor = () => console.log('A porta está aberta.');
        this.closeTheDoor = () => console.log('A porta está fechada.');
        this.turnOn = () => console.log('O Carro está ligado.');
        this.turnOff = () => console.log('O Carro está desligado.');
        this.speedUp = (velocity) => {
            console.log(`A velocidade do carro é ${velocity * 1.1}`);
        };
        this.speedDown = (velocity) => {
            console.log(`A velocidade do carro é ${velocity * 0.9}`);
        };
        this.stop = () => console.log('O carro está parado.');
        this.turn = (turn) => console.log(`O carro virou a ${turn}.`);
        this.sense = (sense, distance) => {
            console.log(`O Carro ${sense} ${distance}m.`);
        };
        this.detail = (detail) => console.log(detail);
        this._brand = brand;
        this._color = color;
        this._doors = doors;
    }
    ;
}
;
const Car1 = new car('volkswagen gol', color.silver, 4);
Car1.turnOn();
Car1.sense(sense.front, 600);
Car1.turn(turn.left);
Car1.sense(sense.front, 200);
Car1.detail('Na rotátória pegue a segunda saida a direita.');
Car1.sense(sense.front, 1200);
Car1.turn(turn.right);
Car1.sense(sense.front, 400);
Car1.stop();
Car1.detail('Abrir a porta de tras do lado do carona.');
Car1.openTheDoor();
Car1.closeTheDoor();
Car1.sense(sense.front, 300);
Car1.turn(turn.right);
Car1.sense(sense.front, 2000);
Car1.turn(turn.right);
Car1.sense(sense.front, 100);
Car1.stop();
Car1.detail('O passageiro irá descer.');
Car1.openTheDoor();
Car1.closeTheDoor();
Car1.detail('to be continued.');
