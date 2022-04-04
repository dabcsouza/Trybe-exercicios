enum color {
  red = 'Vermelho',
  silver = 'Prata',
  black = 'Preto',
  white = 'Branco',
}

enum turn {
  right = 'Direita',
  left = 'Esquerda',
}

enum sense {
  front = ' foi em frente',
  back = 'Deu ré',
}

interface car {
  _brand: string,
  _color: color,
  _doors: 2 | 4,
}

class car {
  constructor( brand:string, color: color, doors: 2 | 4) {
    this._brand = brand;
    this._color = color;
    this._doors = doors;
  };

  honk = ():void => {
    console.log('< Bip Bip >');
  }

  openTheDoor = ():void => console.log('A porta está aberta.')

  closeTheDoor = ():void => console.log('A porta está fechada.')

  turnOn = ():void => console.log('O Carro está ligado.')

  turnOff = ():void => console.log('O Carro está desligado.')

  speedUp = (velocity:number):void => {
    console.log(`A velocidade do carro é ${velocity * 1.1}`);
  };

  speedDown = (velocity:number):void => {
    console.log(`A velocidade do carro é ${velocity * 0.9}`)
  };

  stop = ():void => console.log('O carro está parado.')

  turn = (turn: turn):void => console.log(`O carro virou a ${turn}.`)

  sense = (sense: sense, distance: number):void => {
    console.log( `O Carro ${sense} ${distance}m.`)
  };

  detail = (detail: string) => console.log(detail);
};

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
Car1.detail('Abrir a porta de trás do lado do carona.');
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