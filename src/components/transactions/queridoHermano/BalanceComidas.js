import React from "react";
import { useGlobalState } from "../../../context/GlobalState";
import { useState } from "react";

function BalanceC() {
  const { transactions } = useGlobalState();

  const amount = transactions.map((transactions) => transactions.amount);

  const totalComidas = amount.reduce((acc, item) => (acc += item), 0);

  const resultadoComidas = totalComidas;

  const resultadoComidasB = resultadoComidas;

  // resultado={resultadoBebidasB} <p>{resultadoBebidas} </p>

  return (
    <div>
      <b>Total comidas: </b>

      <b>{resultadoComidas} </b>
    </div>
  );
}

export default BalanceC;
