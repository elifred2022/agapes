import { useState } from "react";
import { useGlobalState } from "../../../context/GlobalState";

function TransactionListBebidas() {
  const { transactionsBebidas, deleteTransaction } = useGlobalState();
  const [cantQh, setCantQh] = useState();

  return (
    <div>
      <div className="formCabecera">
        <b>Bebida</b>
        <b>Costo unit</b>
        <b>Cantidad</b>
        <b>Subtotal bebida</b>
      </div>
      {transactionsBebidas.map((transactionsBebidas) => (
        <div className="formBebidas" key={transactionsBebidas.id}>
          <b>{transactionsBebidas.bebida} </b>

          <span>{transactionsBebidas.amountBebida} </span>

          <span>{transactionsBebidas.cantBebida} </span>

          <span>{transactionsBebidas.subAmountBebida} </span>

          <button
            onClick={() => {
              deleteTransaction(transactionsBebidas.id);
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
