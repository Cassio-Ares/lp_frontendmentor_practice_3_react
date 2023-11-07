import { useForm } from "react-hook-form";
import Btn from "./Btn";
import "./inputs.css";

const Inputs = ({ name, number, month, year, Cvc }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /**
   * props envia os dados para que o elemento pai
   * faça o tratamento.
   */

  // const nameRegExp = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
  // const numberRegExp = /^[0-9]*$/;
  // const MMRegExp = /^0[1-9]|1[0-2]*$/;

  const onSubmit = (data) => {
    name(data.inputName);
    number(data.inputNumber);
    month(data.inputMM);
    year(data.inputYY);
    Cvc(data.inputCvc);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <label className="form_label" htmlFor="name">
        CARDHOLDER NAME
      </label>
      <input
        className="form_input"
        type="text"
        placeholder="Jane Appleseed"
        {...register("inputName", {
          required: "This field is required",
          pattern: {
            value: /^[A-Za-z]+$/i,
            message: "Please check the data",
          },
        })}
      />
      <span>{errors.inputName?.message}</span>

      <label className="form_label" htmlFor="cardNumber">
        CARD NUMBER
      </label>
      <input
        className="form_input"
        type="tel"
        placeholder="1234 5678 9123 0000"
        maxLength="16"
        {...register("inputNumber", {
          required: "This field is required",
          minLength: {
            value: 16,
            message: "Please check the data",
          },
          pattern: {
            value: /^[0-9]*$/,
            message: "Just enter numbers",
          },
        })}
      />
      <span>{errors.inputNumber.message}</span>

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
              name="MM"
              minLength="2"
              maxLength="2"
              //onChange={props.onChangeMonth}
              //  value={props.valueMM}
              pattern="0[1-9]|1[0-2]+$"
              required
              {...register("inputMM")}
            />
            <input
              className="form_section-input"
              type="tel"
              placeholder="YY"
              name="YY"
              minLength="1"
              maxLength="2"
              // onChange={props.onChangeYear}
              // value={props.valueYY}
              pattern="[0-9]+$"
              required
              {...register("inputYY")}
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
            //onChange={props.onChangeCvc}
            // value={props.valueCvc}
            pattern="[0-9]+$"
            required
            {...register("inputCVC")}
          />
        </div>
      </div>
      <Btn style_btn="form_btn" text="CONFIRM" />
    </form>
  );
};

export default Inputs;
