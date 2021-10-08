import './App.css';
import {Component} from 'react';


class App extends Component {
  constructor() {
    super();
    this.state = {
      cliquesBtn1: 0,
      cliquesBtn2: 0,
      cliquesBtn3: 0,
      backgroundColor1: 'linear-gradient(90deg, rgba(9,121,31,0.7287289915966386) 35%, rgba(10,207,19,0.7483368347338936) 100%)',
      backgroundColor2: 'linear-gradient(90deg, rgba(9,121,31,0.7287289915966386) 35%, rgba(10,207,19,0.7483368347338936) 100%)',
      backgroundColor3: 'linear-gradient(90deg, rgba(9,121,31,0.7287289915966386) 35%, rgba(10,207,19,0.7483368347338936) 100%)'
    }

    this.btn1 = this.btn1.bind(this);
    this.btn2 = this.btn2.bind(this);
    this.btn3 = this.btn3.bind(this);
    this.changeBackgroundColor1 = this.changeBackgroundColor1.bind(this);
    this.changeBackgroundColor2 = this.changeBackgroundColor2.bind(this);
    this.changeBackgroundColor3 = this.changeBackgroundColor3.bind(this);
  }
  btn1() {
    this.setState((previous,_prop) => ({
      cliquesBtn1: previous.cliquesBtn1 + 1
    }));
  }

  btn2() {
    this.setState((previous, _prop) => ({
      cliquesBtn2: previous.cliquesBtn2 + 1
    }))
  }

  btn3() {
    this.setState((previous,_prop) => ({
      cliquesBtn3: previous.cliquesBtn3 + 1
    }));
  }

  changeBackgroundColor1(number) {
    if(number % 2 === 0) {
      this.setState((_previous,_prop) => ({
        backgroundColor1: 'linear-gradient(90deg, rgba(9,121,31,0.7287289915966386) 35%, rgba(10,207,19,0.7483368347338936) 100%)'
      }));
    } else {
      this.setState((_previous,_prop) => ({
        backgroundColor1: 'linear-gradient(90deg, rgba(121,9,9,0.7287289915966386) 35%, rgba(207,43,10,0.7483368347338936) 100%)'
      }));
    }
  }

  changeBackgroundColor2(number) {
    if(number % 2 === 0) {
      this.setState((_previous,_prop) => ({
        backgroundColor2: 'linear-gradient(90deg, rgba(9,121,31,0.7287289915966386) 35%, rgba(10,207,19,0.7483368347338936) 100%)'
      }));
    } else {
      this.setState((_previous,_prop) => ({
        backgroundColor2: 'linear-gradient(90deg, rgba(121,9,9,0.7287289915966386) 35%, rgba(207,43,10,0.7483368347338936) 100%)'
      }));
    }
  }

  changeBackgroundColor3(number) {
    if(number % 2 === 0) {
      this.setState((_previous,_prop) => ({
        backgroundColor3: 'linear-gradient(90deg, rgba(9,121,31,0.7287289915966386) 35%, rgba(10,207,19,0.7483368347338936) 100%)'
      }));
    } else {
      this.setState((_previous,_prop) => ({
        backgroundColor3: 'linear-gradient(90deg, rgba(121,9,9,0.7287289915966386) 35%, rgba(207,43,10,0.7483368347338936) 100%)'
      }));
    }
  }

  render() {
      return (
        <section>
          <div className="buttons">
            <div className="background" onClick={() => this
              .changeBackgroundColor1(this.state.cliquesBtn1 + 1)}
              style={{
                background: this.state.backgroundColor1,
              }}>
              <button onClick={this.btn1}>Botão 1 - {this.state.cliquesBtn1} cliques</button>
            </div>
            <div className="background" onClick={() => this
              .changeBackgroundColor2(this.state.cliquesBtn2 + 1)}
              style={{
                background: this.state.backgroundColor2,
              }}>
              <button onClick={this.btn2}>Botão 2 - {this.state.cliquesBtn2} cliques</button>
            </div>
            <div className="background" onClick={() => this
              .changeBackgroundColor3(this.state.cliquesBtn3 + 1)}
              style={{
                background: this.state.backgroundColor3,
              }}>
              <button onClick={this.btn3}>Botão 3 - {this.state.cliquesBtn3} cliques</button>
            </div>
          </div>
            <ul className="legend">
              <li className="odd">Impar</li>
              <li className="even">Par</li>
            </ul> 
        </section>
      );
    }
  }

export default App;
