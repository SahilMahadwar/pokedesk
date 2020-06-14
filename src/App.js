import React from "react";
import "./App.css";
import Card from "./components/Card";
import PokemonsDB from "./components/PokemonsDB";

function App() {
  const pokemons = PokemonsDB;

  return (
    <div className="bod">
      <h1 className="main-headingg">🔥 PokeDesk 🔥</h1>
      <div className="align">
        {pokemons.map((pokemon) => (
          <Card
            id={pokemon.id}
            img={pokemon.img}
            name={pokemon.name}
            type={pokemon.type}
            base_experience={pokemon.base_experience}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
