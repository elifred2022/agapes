import { useState } from "react";
import { useGlobalState } from "../../../context/GlobalState";

function TransactionListBebidas() {
  const { transactions, deleteTransaction } = useGlobalState();

  return (
    <div>
      <div className="formCabecera">
        <b>Bebida</b>
        <b>Costo unit</b>
        <b>Cantidad</b>
        <b>Subtotal bebida</b>
      </div>
      {transactions.map((transactions) => (
        <div className="formBebidas" key={transactions.id}>
          <b>{transactions.bebida} </b>

          <span>{transactions.amountBebida} </span>

          <span>{transactions.cantBebida} </span>

          <span>{transactions.subAmountBebida} </span>

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

export default TransactionListBebidas;
