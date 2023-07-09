import { useState } from "react";
import { useGlobalState } from "../../../context/GlobalState";
import TransactionBebidas from "./TransactionBebidas";
import BalanceBebidas from "./BalanceBebidas";

function TransactionListBebidas() {
  const { transactions, deleteTransaction } = useGlobalState();

  return (
    <div>
      <table>
        <thead className="formCabecera">
          <tr>
            <th>Bebida</th>
            <th> ---- </th>
            <th>Costo unit</th>
            <th> ---- </th>
            <th>Cantidad</th>
            <th> ---- </th>
            <th>Subtotal bebida</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transactions) => (
            <tr className="formBebidas" key={transactions.id}>
              <td>
                <b>{transactions.bebida}</b>
              </td>
              <td> ------ </td>
              <td>
                <b>{transactions.amountBebida}</b>{" "}
              </td>
              <td> ------ </td>
              <td>
                <b>{transactions.cantBebida}</b>
              </td>
              <td> ------ </td>
              <td>
                <b>{transactions.subAmountBebida}</b>{" "}
              </td>
              <td> ------ </td>
              <td>
                <button
                  onClick={() => {
                    deleteTransaction(transactions.id);
                  }}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionListBebidas;
