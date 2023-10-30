import "./cardBack.css";
import cardBack from "../images/bg-card-back.png";
import { useState } from "react";

const CardBack = ({ dataCvc }) => {
  const [cvc, setCvc] = useState("000");

  const numberRegExp = /^[0-9]*$/

  const isValidCVC = numberRegExp.test(dataCvc);



  
  return (
    <section className="card_back">
      <img className="card_back-img" src={cardBack} alt="Card back" />
      <p className="card_back-number">{cvc}</p>
    </section>
  );
};

export default CardBack;
