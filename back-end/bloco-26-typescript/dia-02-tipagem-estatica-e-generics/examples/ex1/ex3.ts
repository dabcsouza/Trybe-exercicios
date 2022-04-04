enum Color {
  Black = 'Preto',
  White = 'Branco',
  Grey = 'Cinza',
  Yellow = 'Amarelo',
  Undefined = 'Indefinido',
}

interface dog {
  _name: string,
  _type: string,
  _color?: Color,
  dogSayHello(): void, 
};

class dog {
  constructor(name: string, type: string, color?: Color) {
    this._name = name;
    this._type = type;
    this._color = color;
  }

  dogSayHello () {
    console.log(`${this._name} diz: ${this._name.split('').map(_e => 'Au auuuu')}`)
  }
};

const Dog1 = new dog('Scooby', 'shih tzu');
console.log(Dog1);
Dog1._color = Color.Grey;
console.log(Dog1, '\n \n');

const Dog2 = new dog('Spyke', 'Pastor Alemão', Color.Yellow);

console.log(Dog2, '\n\n');
Dog2.dogSayHello();
Dog1.dogSayHello();