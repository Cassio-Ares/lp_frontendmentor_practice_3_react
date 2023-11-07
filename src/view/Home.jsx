import { useState } from "react";
import CardBack from "../components/CardBack";
import Cards from "../components/Cards";
import Container from "../components/Container";
import Inputs from "../components/Inputs";
import "./home.css";

const Home = ({ data }) => {
  const [valueName, setValueName] = useState();
  const [valueNumber, setValueNumber] = useState();
  const [valueMM, setValueMM] = useState();
  const [valueYY, setValueYY] = useState();
  const [valueCvc, setValueCvc] = useState();

  //console.log(valueName);.replace(/(\d{4})/g, "$1 "))

  const name = (data) => {
    setValueName(data);
  };

  const number = (data) => {
    setValueNumber(data);
  };

  const month = (data) => {
    setValueMM(data);
  };

  const year = (data) => {
    setValueYY(data);
  };

  const Cvc = (data) => {
    setValueCvc(data);
  };

  //console.log(valueName)

  return (
    <Container>
      <Inputs name={name} number={number} month={month} year={year} Cvc={Cvc} />
      <Cards data={valueName} dataNumber={valueNumber} dataMM={valueMM} dataYY={valueYY} />
      <CardBack dataCvc={valueCvc} />
    </Container>
  );
};

export default Home;
