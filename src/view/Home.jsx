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
  
  const handleChangeNumber = (event) =>{
    setValueNumber(event.target.value.replace(/(\d{4})/g, "$1 "))
  }

  const handleChangeMonth = (event) => {
    setValueMM(event.target.value)
  }

  const handleChangeYear = (event) => {
    setValueYY(event.target.value)
  }

  const handleChangeCvc = (event) => {
    setValueCvc(event.target.value)
  }

  return (
    <Container>
      <Inputs
      onChangeName = {handleChangeName}
      valeuName = {valueName}

      onChangeNumber= {handleChangeNumber}
      valeuNumber={valueNumber}

      onChangeMonth= {handleChangeMonth}
      valeuMM={valueMM}

      onChangeYear ={handleChangeYear}
      valeuYY = {valueYY}

      onChangeCvc = {handleChangeCvc}
      valCvc = {valueCvc}
     
      
      />
      <Cards dataName={valueName} dataNumber={valueNumber} dataMM={valueMM} dataYY={valueYY} />
      <CardBack dataCvc={valueCvc} />
    </Container>
  );
};

export default Home;
