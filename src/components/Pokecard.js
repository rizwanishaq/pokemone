import React from "react";
import "./Pokecard.css";

function Pokecard({ id, name, type, exp }) {
  const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

  let padToThree = number => (number <= 999 ? `00${number}`.slice(-3) : number);
  return (
    <div className="Pokecard">
      <h1 className="Pokecard-title">{name}</h1>
      <div className="Pokecard-image">
        <img src={`${POKE_API}${padToThree(id)}.png`} alt={name} />
      </div>
      <div className="Pokecard-data">Type: {type}</div>
      <div className="Pokecard-data">EXP: {exp}</div>
    </div>
  );
}

export default Pokecard;
