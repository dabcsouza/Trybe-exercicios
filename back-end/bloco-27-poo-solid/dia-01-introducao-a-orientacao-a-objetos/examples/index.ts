class tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string;
  private _connectedTo?:string;

  constructor(
    brand: string,
    size: number,
    resolution: string,
    connections: string,
    connectedTo?: string,
  ) {
    console.log(`Tv ${brand} criada.`);
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
    if (!connectedTo) this._connectedTo = 'not defined'
    this._connectedTo = connectedTo;
  }

  readonly turnOn = () => {
    console.log(`Tv ${this._brand} ligada...`);
  }

  get connectedTo() {
    return this._connectedTo;
  }

  set connectedTo(val: string|undefined) {
    try {
      if(!val) throw new Error('Sorry, connection unavailable!');
      if(this._connections.includes(val)) {
        this._connectedTo = val
      } else { console.log('Sorry, connection unavailable!') }
    } catch (e: any) {
      console.log(e.message);
    }
  }
};

const tv1 = new tv('Lg', 32, '4K', 'HDMI/VGA/RGB');
tv1.turnOn();
console.log(tv1.connectedTo);
tv1.connectedTo = 'HDMI'
console.log(tv1.connectedTo);
//Abstracao. Metodos que não sei como funciona: 
// fetch, ls, history do linux, git;