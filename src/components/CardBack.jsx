import "./cardBack.css";
import cardBack from "../images/bg-card-back.png";


const CardBack = ({ dataCvc }) => {
  //console.log(dataCvc)
 
  
  return (
    <section className="card_back">
      <img className="card_back-img" src={cardBack} alt="Card back" />
      <p className="card_back-number">{dataCvc || "000"}</p>
    </section>
  );
};

export default CardBack;
