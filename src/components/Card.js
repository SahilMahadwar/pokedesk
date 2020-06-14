import React, { Component } from "react";

function Card(params) {
  return (
    <div className="main-containerr">
      <div className="second-containerr">
        <p className="typee">
          <b>Type:</b> Balkasurs <br></br>
          <b>Exp: </b>40
        </p>
      </div>
      <img
        className="imagee"
        src="https://i.ibb.co/QfBZZ08/pngguru-com.png"
      ></img>
      <h2 className="pokemon-name">Charmendro</h2>
    </div>
  );
}

export default Card;
