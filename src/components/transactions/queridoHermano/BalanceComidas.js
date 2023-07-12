import React from "react";
import { useGlobalState } from "../../../context/GlobalState";
import { useState } from "react";
import TransactionDistribucionBebidas from "../bebidas/TransactionDistribucionBebidas";

function BalanceC(props) {
  const { transactions } = useGlobalState();
  const { resultDist } = TransactionDistribucionBebidas;

  const amount = transactions.map((transactions) => transactions.amount);

  const totalComidas = amount.reduce((acc, item) => (acc += item), 0);

  const resultadoComidas = totalComidas;

  const resultadoComidasB = resultadoComidas;

  // resultado={resultadoBebidasB} <p>{resultadoBebidas} </p>

  return (
    <>
      <div>
        <b>Total comidas: </b>
        <b>{resultadoComidas} </b>
      </div>
      <div>
        <b>Aca deberia ir el calculo final: </b>
        <b>{resultadoComidasB} </b>
      </div>
    </>
  );
}

export default BalanceC;
