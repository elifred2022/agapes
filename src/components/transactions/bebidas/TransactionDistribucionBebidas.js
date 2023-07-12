import React from "react";
import { useState } from "react";
import { useGlobalState } from "../../../context/GlobalState";
import BalanceC from "../queridoHermano/BalanceComidas";

function TransactionDistribucionBebidas(props) {
  const [cantQh, setCantQh] = useState();
  const [resultDist, setResultDist] = useState("");

  const { addTransaction } = useGlobalState();

  const onSubmit = (e) => {
    e.preventDefault(); //para que no envie el formulario a backend

    console.log(cantQh, resultDist);
  };

  const handleDenominatorChange = (e) => {
    setCantQh(Number(e.target.value));
  };

  const handleDivision = () => {
    setResultDist(props.resultadoBebidasB / cantQh);
    //localStorage.setItem("resultadoBebidasB", resultadoBebidasB);
  };

  localStorage.setItem("CantQQHH", cantQh);
  localStorage.setItem("CadaQhPaga", resultDist);

  return (
    <>
      <h2>Distribucion monto de bebidas</h2>

      <div>
        <form className="formIngreso__bebida" onSubmit={onSubmit}>
          <p>Ingresa cant de QQHH asistentes</p>
          <input
            type="number"
            step="0.01"
            value={cantQh}
            onChange={handleDenominatorChange}
            placeholder="ingrese cant qh"
          />
          <button onClick={handleDivision}>Calcular</button>
          <p className="formBebidas">
            Cada Qh debe pagar por las bebidas: $ {resultDist}
          </p>
        </form>
      </div>
    </>
  );
}

export default TransactionDistribucionBebidas;

/* 


function TransactionDistribucionBebidas(props) {
  const [cantQh, setCantQh] = useState();
  const [resultDist, setResultDist] = useState("");

  const { addTransaction } = useGlobalState();

  const handleDenominatorChange = (e) => {
    setCantQh(Number(e.target.value));
  };

  const handleDivision = () => {
    setResultDist(props.resultadoBebidasB / cantQh);
    //localStorage.setItem("resultadoBebidasB", resultadoBebidasB);
  };
 
localStorage.setItem("CantQQHH", cantQh);
localStorage.setItem("CadaQhPaga", resultDist);

return (
  <>
    <h2>Distribucion monto de bebidas</h2>

    <p>Ingresa cant de QQHH asistentes</p>
    <input
      type="number"
      step="0.01"
      value={cantQh}
      onChange={handleDenominatorChange}
      placeholder="ingrese cant qh"
    />
    <button onClick={handleDivision}>Calcular</button>
    <p className="formBebidas">
      Cada Qh debe pagar por las bebidas: $ {resultDist}
    </p>
  </>
);
}

export default TransactionDistribucionBebidas; */
