import { Component } from "react";

export default class Pokemon extends Component {
  render() {
    const {name, type, averageWeight, image} = this.props.pokemon
    return (
      <section className="pokemon-card">
        <div className="poke-info">
          <p> {name} </p>
          <p> {type} </p>
          <p> {averageWeight.value} {averageWeight.measurementUnit} </p>
        </div>
        <div className="poke-image">
          <img src={image} alt={ name }/>
        </div>
      </section>
    )
  }
}