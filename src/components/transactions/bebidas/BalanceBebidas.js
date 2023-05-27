import React from "react";
import { useGlobalState } from "./GlobalState";

function Balance() {
  const { transactionsBebidas } = useGlobalState();

  const amountBebida = transactionsBebidas.map(
    (transactionsBebidas) => transactionsBebidas.amountBebida
  );

  const totalBebidas = amountBebida.reduce((acc, item) => (acc += item), 0);

  return (
    <div>
      <h3>Total</h3>
      <h1>${totalBebidas} </h1>
    </div>
  );
}

export default Balance;
