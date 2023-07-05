import React from "react";
import { useState } from "react";
//import { useGlobalState } from "../../../context/GlobalState";

function TransactionDistribucionBebidas(props) {
  const [cantQh, setCantQh] = useState();
  const [resultDist, setResultDist] = useState();
  //const { addTransaction } = useGlobalState();

  const handleDenominatorChange = (e) => {
    setCantQh(Number(e.target.value));
  };

  const handleDivision = () => {
    setResultDist(props.resultadoBebidasB / cantQh);
  };

  return (
    <>
      <h2>Distribucion monto de bebidas</h2>

      <b>PROPS {props.resultadoBebidasB} </b>

      <p>Ingresa cant de QQHH asistentes</p>
      <input
        type="number"
        value={cantQh}
        onChange={handleDenominatorChange}
        placeholder="ingrese cant qh"
      />
      <button onClick={handleDivision}>Dividir</button>
      <p>Cada Qh debe pagar por las bebidas: $ {resultDist}</p>
    </>
  );
}

export default TransactionDistribucionBebidas;
