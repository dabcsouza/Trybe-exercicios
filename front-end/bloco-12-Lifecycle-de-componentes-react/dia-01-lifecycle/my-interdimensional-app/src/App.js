import './App.css';
import React, { Component } from 'react'

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    }
    this.fetchCharacters = this.fetchCharacters.bind(this);
  }

  async fetchCharacters() {
   const requisiton = await fetch('https://rickandmortyapi.com/api/character');
   const response = await requisiton.json();
   this.setState({
     characters: response.results,
   });
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <h1>
          Ricky and Morty Characters:
        </h1>
        <div className="body">
          { 
            characters.map( ({name, image}) => (
              <div 
                className="container"
                id={name}
              >
                <h3>{ name }</h3>
                <img
                  src={image}
                  alt={name}
                />
              </div>
            ))
          }
        </div>
      </div>
  );
}
}