import { useState } from "react";
import CardBack from "../components/CardBack";
import Cards from "../components/Cards copy";
import Container from "../components/Container";
import Inputs from "../components/Inputs copy";
import "./home.css";

const Home = (props) => {
  const [valueName, setValueName] = useState();
  const [valueNumber, setValueNumber] = useState();
  const [valueMM, setValueMM] = useState();
  const [valueYY, setValueYY] = useState();
  const [valueCvc, setValueCvc] = useState();

  //console.log(valueName);
  
  return (
    <Container>
      <Inputs
        name={(inputValue) => setValueName(inputValue)}
        number={(inputValue) => setValueNumber(inputValue)}
        month={(inputValue) => setValueMM(inputValue)}
        year={(inputValue) => setValueYY(inputValue)}
        cvc={(inputValue) => setValueCvc(inputValue)}
      />
      <Cards dataName={valueName} dataNumber={valueNumber} dataMM={valueMM} dataYY={valueYY} />
      <CardBack dataCvc={valueCvc} />
    </Container>
  );
};

export default Home;
