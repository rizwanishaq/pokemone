import React from "react";
import "./Pokedex.css";
import Pokecard from "./Pokecard";

function Pokedex({ pokemon, exp, isWinner }) {
  let title = isWinner ? (
    <h1 className="Pokedex-winner">Winning Hand</h1>
  ) : (
    <h1 className="Pokedex-loser">Losing Hand</h1>
  );
  return (
    <div className="Pokedex">
      {title}
      <h4>Total Experience: {exp}</h4>
      <div className="Pokedex-cards">
        {pokemon.map(p => (
          <Pokecard
            key={p.id}
            id={p.id}
            name={p.name}
            type={p.type}
            exp={p.base_experience}
          />
        ))}
      </div>
    </div>
  );
}

export default Pokedex;
