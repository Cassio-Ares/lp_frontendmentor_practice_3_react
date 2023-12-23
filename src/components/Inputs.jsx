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

  const onSubmit = (data) => {
    name(data.inputName);
    number(data.inputNumber.replace(/(\d{4})/g, "$1 "));
    month(data.inputMM);
    year(data.inputYY);
    Cvc(data.inputCvc);
    console.log(data.inputCvc);
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
            value: /^[a-zA-Z][a-zA-Z\s]*$/,
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
      <span>{errors.inputNumber?.message}</span>

      <div className="form_section">
        <div className="form_section-date_label" >
          <label className="form_label" htmlFor="MM/YY">
            EXP. DATE(MM/YY)
          </label>
          <div className="form_section-date">
            <div className="mmyy">
              <input
                className="form_section-input"
                type="tel"
                placeholder="MM"
                name="MM"
                {...register("inputMM", {
                  required: "This field is required.",
                  minLength: {
                    value: "2",
                    message: "Please check the data",
                  },
                  maxLength: {
                    value: "2",
                    message: "Please check the data",
                  },
                  pattern: {
                    value: /0[1-9]|1[0-2]+$/,
                    message: "Please check the data",
                  },
                })}
              />
              <span>{errors.inputMM?.message}</span>{" "}
            </div>

            <div className="mmyy">
              <input
                className="form_section-input"
                type="tel"
                placeholder="YY"
                name="YY"
                {...register("inputYY", {
                  required: "This field is required.",
                  minLength: {
                    value: "2",
                    message: "Please check the data",
                  },
                  maxLength: {
                    value: "2",
                    message: "Please check the data",
                  },
                  pattern: {
                    value: /[0-9]+$/,
                    message: "Please check the data",
                  },
                })}
              />
              <span>{errors.inputYY?.message}</span>
            </div>
          </div>
        </div>

        <div className="form_section-cvc">
          <label className="form_label" htmlFor="CVC">
            CVC
          </label>
          <input
            className="form_section-cvc_input"
            type="tel"
            placeholder="123"
            name="CVC"
            {...register("inputCvc", {
              required: "Please check the data",
              minLength: {
                value: 3,
                message: "Please check the data",
              },
              maxLength: {
                value: 3,
                message: "Please check the data",
              },
              pattern: {
                value: /[0-9]+$/,
                message: "Please check the data",
              },
            })}
          />
          <span>{errors.inputCvc?.message}</span>
        </div>
      </div>
      <Btn style_btn="form_btn" text="CONFIRM" />
    </form>
  );
};

export default Inputs;
