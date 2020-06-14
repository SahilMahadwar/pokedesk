import React, { Component } from "react";

function Card(props) {
  return (
    <div className="main-containerr">
      <div className="second-containerr">
        <p className="typee">
          <b>Type:</b> {props.type} <br></br>
          <b>Exp: </b>
          {props.base_experience}
        </p>
      </div>
      <img
        className="imagee"
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${props.img}.png`}
      ></img>
      <h2 className="pokemon-name">{props.name}</h2>
    </div>
  );
}

export default Card;
