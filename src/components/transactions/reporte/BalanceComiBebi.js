import { useState } from "react";
import { useGlobalState } from "../../../context/GlobalState";
import TransactionDistribucionBebidas from "../../transactions/bebidas/TransactionDistribucionBebidas";
import BalanceC from "../queridoHermano/BalanceComidas";

function TransactionListReporte(props) {
  const { transactions, deleteTransaction } = useGlobalState();

  const { amount } = useGlobalState;
  const { resultadoComidasB } = BalanceC;

  const resultFinal = props.resultDist;

  return (
    <div>
      <div className="formCabecera">
        <b>Querido Hermano</b>
        <b>Plato + Bebida</b>
        <b>Monto a pagar</b>
      </div>
      <div>
        {transactions.map((transactions) => (
          <div className="formBebidas" key={transactions.id}>
            <b>{transactions.queridoHermano} </b>
          </div>
        ))}
      </div>
      <span> {resultFinal} </span>
    </div>
  );
}

export default TransactionListReporte;
