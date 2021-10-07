import './App.css';
import {Component} from 'react';


class App extends Component {
  constructor() {
    super();
    this.state = {
      cliquesBtn1: 0,
      cliquesBtn2: 0,
      cliquesBtn3: 0
    }

    this.btn1 = this.btn1.bind(this);
    this.btn2 = this.btn2.bind(this);
    this.btn3 = this.btn3.bind(this);
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
    }))
  }

  render() {
      return (
        <div>
          <button onClick={this.btn1}>Botão 1 - {this.state.cliquesBtn1} cliques</button> 
          <button onClick={this.btn2}>Botão 2 - {this.state.cliquesBtn2} cliques</button> 
          <button onClick={this.btn3}>Botão 3 - {this.state.cliquesBtn3} cliques</button> 
        </div>
      );
    }
  }

export default App;
