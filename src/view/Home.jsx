import { useState } from "react";
import CardBack from "../components/CardBack";
import Cards from "../components/Cards";
import Container from "../components/Container";
import Inputs from "../components/Inputs";
import "./home.css";

const Home = (props) => {
  const [valueName, setValueName] = useState();
  const [valueNumber, setValueNumber] = useState();
  const [valueMM, setValueMM] = useState();
  const [valueYY, setValueYY] = useState();
  const [valueCvc, setValueCvc] = useState();

  //console.log(valueName);
   
  const handleChangeName = (event)=>{
     setValueName(event.target.value) 
  }


  return (
    <Container>
      <Inputs
      onChangeName = {handleChangeName}

      valeuName = {valueName}
      
      />
      <Cards dataName={valueName} dataNumber={valueNumber} dataMM={valueMM} dataYY={valueYY} />
      <CardBack dataCvc={valueCvc} />
    </Container>
  );
};

export default Home;
