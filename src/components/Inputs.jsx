import Btn from "./Btn";
import "./inputs.css";

const Inputs = (props) => {
  /**
   * props envia os dados para que o elemento pai 
   * faça o tratamento.
   */

    // const nameRegExp = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
  // const numberRegExp = /^[0-9]*$/;
  // const MMRegExp = /^0[1-9]|1[0-2]*$/;

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
        onChange={props.onChangeName}
        value={props.input_value_Name}
        pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$"
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
        onChange={props.onChangeNumber}
        value={props.valueNumber}
        pattern="[0-9]+$" 
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
              onChange={props.onChangeMonth}
              value={props.valueMM}
              pattern= "0[1-9]|1[0-2]+$"
              required
            />
            <input
              className="form_section-input"
              type="tel"
              placeholder="YY"
              name="MM/YY"
              minLength="1"
              maxLength="2"
              onChange={props.onChangeYear}
              value={props.valueYY}
              pattern="[0-9]+$" 
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
            onChange={props.onChangeCvc}
            value={props.valueCvc}
            pattern="[0-9]+$"
            required
          />
        </div>
      </div>
      <Btn style_btn="form_btn" text="CONFIRM" />
    </form>
  );
};

export default Inputs;
