import React from "react";
import { useGlobalState } from "../../../context/GlobalState";
import { useState } from "react";

function Balance() {
  const { transactionsBebidas } = useGlobalState();

  const subAmountBebida = transactionsBebidas.map(
    (transactionsBebidas) => transactionsBebidas.subAmountBebida
  );

  const totalBebidas = subAmountBebida.reduce((acc, item) => (acc += item), 0);

  const resultadoBebidas = totalBebidas;

  const resultadoBebidasB = resultadoBebidas;

  //resultado={resultadoBebidasB} <p>{resultadoBebidas} </p>

  return (
    <div>
      <b>Total bebidas:</b>

      <p>{resultadoBebidas} </p>

      <BalanceB resultado={resultadoBebidasB} />
    </div>
  );
}

function BalanceB(props) {
  // ---

  const [totalBebidas, setTotalBebidas] = useState();
  const [denominator, setDenominator] = useState();
  const [result, setResult] = useState(0);

  const handleNumeratorChange = (e) => {
    setTotalBebidas(Number(e.target.value));
  };

  const handleDenominatorChange = (e) => {
    setDenominator(Number(e.target.value));
  };

  const handleDivision = () => {
    setResult(totalBebidas / denominator);
  };

  const funcionB = () => {
    console.log(props.resultado); // Imprimirá 'Hola, soy el resultado de la Función A'
  };

  funcionB();

  return (
    <div>
      <h1>División</h1>

      <input
        type="number"
        value={totalBebidas}
        onChange={handleNumeratorChange}
        placeholder="ingrese monto bebidas"
      />

      <input
        type="number"
        value={denominator}
        onChange={handleDenominatorChange}
        placeholder="ingrese cant qh"
      />
      <button onClick={handleDivision}>Dividir</button>
      <p>Cada qh debe pagar: {result}</p>
    </div>
  );
}

export default Balance;

/*

  <h2>${totalBebidasB} </h2>

function PorQh(props) {
  //const { addTransaction } = useGlobalState();
  const [cantQh, setCantQh] = useState();
  const [amountCqh, setAmountCqh] = useState();
  const [calcCadaQh, setCalcCadaQh] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    const calcCadaQh = (cantQh, amountCqh) => {
      calcCadaQh = cantQh / amountCqh;
    };
    console.log(cantQh, amountCqh, calcCadaQh);
  };

  return (
    <div>
      <form className="formIngreso__bebida" onSubmit={onSubmit}>
        <input
          type="number"
          step="0.01"
          placeholder="ingrese cant qh"
          onChange={(e) => setCantQh(e.target.value)}
        />

        <input
          type="number"
          step="0.01"
          placeholder="ingrese monto bebidas"
          onChange={(e) => setAmountCqh(e.target.value)}
        />

        <button>Calcular</button>

        <p> </p>
      </form>
    </div>
  );
}  */

/*  funcion dividir:

function CadaQh(props) {
  const [totalBebidas, setTotalBebidas] = useState();

  const [denominator, setDenominator] = useState();
  const [result, setResult] = useState(0);

  const handleNumeratorChange = (e) => {
    setTotalBebidas(Number(e.target.value));
  };

  const handleDenominatorChange = (e) => {
    setDenominator(Number(e.target.value));
  };

  const handleDivision = () => {
    setResult(totalBebidas / denominator);
  };

  return (
    <div>
      <h1>División</h1>
      <input
        type="number"
        value={totalBebidas}
        onChange={handleNumeratorChange}
        placeholder="ingrese monto bebidas"
      />

      <input
        type="number"
        value={denominator}
        onChange={handleDenominatorChange}
        placeholder="ingrese cant qh"
      />
      <button onClick={handleDivision}>Dividir</button>
      <p>Cada qh debe pagar: {result}</p>
    </div>
  );
}



*/

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

*/
