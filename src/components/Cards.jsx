import "./front_card.css";
import front_card from "../images/bg-card-front.png";
import circle_1 from "../images/card-logo.svg";
import { useState } from "react";


const Cards = ({dataName, dataNumber, dataMM, dataYY}) => {
   const [number, setNumber] = useState('0000 0000 0000 0000');
   const [name, setName] = useState('Jane Appleseed');
   const [MM, setMM] = useState('00');
   const [YY, setYY] = useState('00');

   

  

  return (
    <section className="front_card">
      <img className="front_card-img" src={front_card} alt="card front" />
      <img className="circle_img" src={circle_1} alt="oiii" />
      <p className="front_card-number">{number}</p>
      <p className="front_card-name">{name}</p>
      <p className="front_card-cvc">{MM}/{YY}</p>
    </section>
  );
};

export default Cards;