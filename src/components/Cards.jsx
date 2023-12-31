import "./front_card.css";
import front_card from "../images/bg-card-front.png";
import circle_1 from "../images/card-logo.svg";

const Cards = ({ data, dataNumber, dataMM, dataYY }) => {

 
  return (
    <section className="front_card">
      <img className="front_card-img" src={front_card} alt="card front" />
      <img className="circle_img" src={circle_1} alt="oiii" />
      <p className="front_card-number">{dataNumber || "0000 0000 0000 0000"}</p>

      <p className="front_card-name">{data || "Jane Appleseed"}</p>
  
      <p className="front_card-cvc">
        {dataMM || "00"}/{dataYY || "00"}
      </p>
    </section>
  );
};

export default Cards;
