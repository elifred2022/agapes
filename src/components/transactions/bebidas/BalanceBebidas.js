import React from "react";
import { useGlobalState } from "../../../context/GlobalState";
import { useState } from "react";

function Balance() {
  const { transactionsBebidas } = useGlobalState();

  /* const cantBebida = transactionsBebidas.map(
    (transactionsBebidas) => transactionsBebidas.cantBebida
  ); */

  const subAmountBebida = transactionsBebidas.map(
    (transactionsBebidas) => transactionsBebidas.subAmountBebida
  );

  const totalBebidas = subAmountBebida.reduce((acc, item) => (acc += item), 0);

  return (
    <div>
      <h3>Total Bebidas</h3>
      <h2>${totalBebidas} </h2>
      <PorQh />
    </div>
  );
}

export default Balance;

function PorQh(props) {
  //const { addTransaction } = useGlobalState();
  const [cantQh, setCantQh] = useState();
  const [amountCqh, setAmountCqh] = useState();
  const [calcCadaQh, setCalcCadaQh] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    const calc = (cantQh, amountCqh) => {
      calcCadaQh = cantQh / amountCqh;
    };
    console.log(cantQh, amountCqh, calcCadaQh, calc);
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
}
