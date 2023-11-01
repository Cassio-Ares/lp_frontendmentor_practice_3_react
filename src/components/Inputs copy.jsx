import { useState } from "react";
import Btn from "./Btn";
import "./inputs.css";

const Inputs = (props) => {
 const [form, setForm] = useState({
    name: "",
    number: "",
 })



  function handleChange(event) {
    event.preventDefault();

    const changeValue = event.target.value;

    
    props.number(changeValue);
    props.month(changeValue);
    props.year(changeValue);
    props.cvc(changeValue);
  }

  return (
    <form className="form">
      <label className="form_label" htmlFor="name">
        CARDHOLDER NAME
      </label>
      <input
        className="form_input"
        type="text"
        placeholder="Jane Appleseed"
        name="name"
        onChange={(e)=> {
          let name = e.target.value
         
          setForm({...form, name: name})

           props.name(form.name)
        }}
        
        required
      />

      <label className="form_label" htmlFor="cardNumber">
        CARD NUMBER
      </label>
      <input
        className="form_input"
        type="tel"
        placeholder="1234 5678 9123 0000"
        name="cardNumber"
        minLength="16"
        maxLength="16"
        onChange={handleChange}
        required
      />

      <div className="form_section">
        <div className="form_section-date">
          <label className="form_label" htmlFor="MM/YY">
            EXP. DATE(MM/YY)
          </label>
          <div>
            <input
              className="form_section-input"
              type="tel"
              placeholder="MM"
              name="MM/YY"
              minLength="2"
              maxLength="2"
              onChange={handleChange}
              required
            />
            <input
              className="form_section-input"
              type="tel"
              placeholder="YY"
              name="MM/YY"
              minLength="1"
              maxLength="2"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form_section-cvc">
          <label className="form_label" htmlFor="CVC">
            CVC
          </label>
          <input
            className="form_section-cvc"
            type="tel"
            placeholder="123"
            name="CVC"
            minLength="3"
            maxLength="3"
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <Btn style_btn="form_btn" text="CONFIRM" />
    </form>
  );
};

export default Inputs;
