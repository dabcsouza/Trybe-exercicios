"use strict";
class tv {
    constructor(brand, size, resolution, connections, connectedTo) {
        this.turnOn = () => {
            console.log(`Tv ${this._brand} ligada...`);
        };
        console.log(`Tv ${brand} criada.`);
        this._brand = brand;
        this._size = size;
        this._resolution = resolution;
        this._connections = connections;
        if (!connectedTo)
            this._connectedTo = 'not defined';
        this._connectedTo = connectedTo;
    }
    get connectedTo() {
        return this._connectedTo;
    }
    set connectedTo(val) {
        try {
            if (!val)
                throw new Error('Sorry, connection unavailable!');
            if (this._connections.includes(val)) {
                this._connectedTo = val;
            }
            else {
                console.log('Sorry, connection unavailable!');
            }
        }
        catch (e) {
            console.log(e.message);
        }
    }
}
;
const tv1 = new tv('Lg', 32, '4K', 'HDMI/VGA/RGB');
tv1.turnOn();
console.log(tv1.connectedTo);
tv1.connectedTo = 'HDMI';
console.log(tv1.connectedTo);
//Abstracao. Metodos que não sei como funciona: 
// fetch, ls, history do linux, git;
