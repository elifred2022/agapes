import React from "react";
import { useGlobalState } from "../../../context/GlobalState";
import { useState } from "react";

function Balance(props) {
  const { transactionsBebidas } = useGlobalState();

  const subAmountBebida = transactionsBebidas.map(
    (transactionsBebidas) => transactionsBebidas.subAmountBebida
  );

  const totalBebidas = subAmountBebida.reduce((acc, item) => (acc += item), 0);

  const resultadoBebidas = totalBebidas;

  const resultadoBebidasB = resultadoBebidas;

  // resultado={resultadoBebidasB} <p>{resultadoBebidas} </p>

  return (
    <div>
      <b>Total bebidas: </b>

      <b>{resultadoBebidas} </b>
      <BalanceB resultado={resultadoBebidasB} />
    </div>
  );
}

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

  /*

  const handleNumeratorChange = (e) => {
    setTotalBebidas(Number(e.target.value));
  };
  
  <input
        type="number"
        value={totalBebidas}
        onChange={handleNumeratorChange}
        placeholder="ingrese monto bebidas"
      />
  
  */

  const handleDenominatorChange = (e) => {
    setDenominator(Number(e.target.value));
  };

  const handleDivision = () => {
    setResult(totalBebidas / denominator);
  };

  return (
    <div>
      <h2>Distribucion monto de bebidas</h2>

      <p>Ingresa cant de QQHH asistentes</p>
      <input
        type="number"
        value={denominator}
        onChange={handleDenominatorChange}
        placeholder="ingrese cant qh"
      />
      <button onClick={handleDivision}>Dividir</button>
      <p>Cada Qh debe pagar por las bebidas: $ {result}</p>
    </div>
  );
}
export default Balance;

/*  --------------------------- chat gpt usar funciones co otras funciones;

import React from 'react';

function FuncionA() {
  // Definir la función A y retornar un valor
  const funcionA = () => {
    return 'Hola, soy el resultado de la Función A';
  };

  // Llamar a la función A y almacenar el resultado en una variable
  const resultadoFuncionA = funcionA();

  // Renderizar el resultado de la función A en la interfaz
  return (
    <div>
      <p>{resultadoFuncionA}</p>
      <FuncionB resultado={resultadoFuncionA} />
    </div>
  );
}

function FuncionB(props) {
  // Usar el resultado de la función A en la función B
  const funcionB = () => {
    console.log(props.resultado); // Imprimirá 'Hola, soy el resultado de la Función A'
  };

  // Llamar a la función B
  funcionB();

  // Renderizar el contenido de la función B
  return <p>Función B</p>;
}

export default FuncionA;


------------------------------------------------------------------------------*/
