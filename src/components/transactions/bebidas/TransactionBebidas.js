import React from "react";
import { useState } from "react";
import { useGlobalState } from "./GlobalState";

function TransactionBebidas() {
  const { addTransaction } = useGlobalState();
  const [bebida, setBebida] = useState();
  const [amountBebida, setAmountBebida] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id: window.crypto.randomUUID(), // esto genera ID automaticamente
      bebida,
      amountBebida: +amountBebida,
    });
    console.log(bebida, amountBebida);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Ingrese bebida"
          onChange={(e) => setBebida(e.target.value)}
        />
        <input
          type="number"
          step="0.01"
          placeholder="ingrese valor de bebida"
          onChange={(e) => setAmountBebida(e.target.value)}
        />
        <button>Ingresar</button>
      </form>
    </div>
  );
}

export default TransactionBebidas;
