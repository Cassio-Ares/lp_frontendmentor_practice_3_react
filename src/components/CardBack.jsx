import "./cardBack.css";
import cardBack from "../images/bg-card-back.png";
import { useEffect, useState } from "react";

const CardBack = ({ dataCvc }) => {
 
  
  return (
    <section className="card_back">
      <img className="card_back-img" src={cardBack} alt="Card back" />
      <p className="card_back-number">{dataCvc || "000"}</p>
    </section>
  );
};

export default CardBack;
