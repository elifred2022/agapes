import React from "react";
import { useGlobalState } from "../../../context/GlobalState";
import { useState } from "react";
import TransactionDistribucionBebidas from "./TransactionDistribucionBebidas";

function Balance(props) {
  const { transactions } = useGlobalState();

  const subAmountBebida = transactions.map(
    (transactions) => transactions.subAmountBebida
  );

  const totalBebidas = subAmountBebida.reduce((acc, item) => (acc += item), 0);

  const resultadoBebidas = totalBebidas;

  const resultadoBebidasB = resultadoBebidas;

  // resultado={resultadoBebidasB} <p>{resultadoBebidas} </p>

  return (
    <div>
      <b>Total bebidas: </b>

      <b>{resultadoBebidas} </b>
      <TransactionDistribucionBebidas resultadoBebidasB={resultadoBebidasB} />
    </div>
  );
}

export default Balance;

/*  
ASI FUNCIONO CON EL PROPS LA FORMULA PARA DISTRIBUCION DE BEBIDAS ENTRE ASISTENTES, PERO QUIERO MEJORARLA

<BalanceB resultado={resultadoBebidasB} />



function BalanceB(props) {
  // ---

  const res = props.resultado;

  const funcionB = () => {
    // console.log(props.resultado); // Imprimirá 'Hola, soy el resultado de la Función A'
  };

  // Llamar a la función B
  funcionB();

  //-------
  //const totalBebidas = res;
  const [totalBebidas = res, setTotalBebidas] = useState();
  const [denominator, setDenominator] = useState();
  const [result, setResult] = useState(0);

 
  
  

      const handleDenominatorChange = (e) => {
        setDenominator(Number(e.target.value));
      };
    
      const handleDivision = () => {
        setResult(totalBebidas / denominator);
      };
    
      return (
        <>
          <h2>Distribucion monto de bebidas</h2>
    
          <p>Ingresa cant de QQHH asistentes</p>
          <input
            type="number"
            value={denominator}
            onChange={handleDenominatorChange}
            placeholder="ingrese cant qh"
          />
          <button onClick={handleDivision}>Dividir</button>
          <p>Cada Qh debe pagar por las bebidas: $ setResult {result}</p>
        </>
      );
    } */
