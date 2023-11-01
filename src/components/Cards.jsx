import "./front_card.css";
import front_card from "../images/bg-card-front.png";
import circle_1 from "../images/card-logo.svg";
import { useEffect, useState } from "react";

const Cards = ({ dataName, dataNumber, dataMM, dataYY }) => {
  

  const nameRegExp = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
  const numberRegExp = /^[0-9]*$/;
  const MMRegExp = /^0[1-9]|1[0-2]*$/;

  const isvalidName = nameRegExp.test(dataName);
  const isValidNumber = numberRegExp.test(dataNumber);
  const isValidMM = MMRegExp.test(dataMM);
  const isValidYY = numberRegExp.test(dataYY);



 

  


   

  return (
    <section className="front_card">
      <img className="front_card-img" src={front_card} alt="card front" />
      <img className="circle_img" src={circle_1} alt="oiii" />
      <p className="front_card-number">{dataNumber}</p>


      <p className="front_card-name">{dataName || "Cassio"}</p>



      <p className="front_card-cvc">
        {dataMM}/{dataYY}
      </p>
    </section>
  );
};

export default Cards;
