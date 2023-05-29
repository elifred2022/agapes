import React from "react";
import { useGlobalState } from "../../../context/GlobalState";

function Balance() {
  const { transactionsBebidas } = useGlobalState();

  /* const cantBebida = transactionsBebidas.map(
    (transactionsBebidas) => transactionsBebidas.cantBebida
  ); */

  const subAmountBebida = transactionsBebidas.map(
    (transactionsBebidas) => transactionsBebidas.subAmountBebida
  );

  //const totalBebidas = amountBebida * cantBebida;

  const totalBebidas = subAmountBebida.reduce((acc, item) => (acc += item), 0);

  const totalcadaQh = totalBebidas / 13;

  return (
    <div>
      <h3>Total Bebidas</h3>
      <h1>${totalBebidas} </h1>

      <h3>Total cada qh</h3>
      <h1>${totalcadaQh} </h1>
    </div>
  );
}

export default Balance;
