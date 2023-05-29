import React from "react";
import { useGlobalState } from "../../../context/GlobalState";

function Balance() {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transactions) => transactions.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <div>
      <h3>Total</h3>
      <h1>${total} </h1>
    </div>
  );
}

export default Balance;
