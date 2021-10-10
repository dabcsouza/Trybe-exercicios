import { Component } from "react";
import pokemons from "../data";
import Pokemon from "./Pokemon";

export default class Pokedex extends Component {
  render() {
    return (
      <section className="pokemon-list">
        {pokemons.map((pokemon) => (
            <Pokemon 
              key={pokemon.id}
              pokemon={pokemon}
            />
        ))}
      </section>
    )
  }
}