import { useState } from "react";
import { useGlobalState } from "../../../context/GlobalState";

function TransactionListComidas() {
  const { transactions, deleteTransaction } = useGlobalState();

  return (
    <div>
      <div className="formCabecera">
        <b>Querido Hermano</b>
        <b>Plato</b>
        <b>Costo</b>
      </div>
      {transactions.map((transactions) => (
        <div className="formBebidas" key={transactions.id}>
          <b>{transactions.queridoHermano} </b>

          <span>{transactions.description} </span>

          <span>{transactions.amount} </span>

          <button
            onClick={() => {
              deleteTransaction(transactions.id);
            }}
          >
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
}

export default TransactionListComidas;
