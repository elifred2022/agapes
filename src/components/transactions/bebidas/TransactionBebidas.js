import React from "react";
import { useState } from "react";
import { useGlobalState } from "../../../context/GlobalState";

function TransactionBebidas() {
  const { addTransaction } = useGlobalState();
  const [bebida, setBebida] = useState();
  const [cantBebida, setCantBebida] = useState();
  const [amountBebida, setAmountBebida] = useState();
  const [subAmountBebida, setSubAmountBebida] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id: window.crypto.randomUUID(), // esto genera ID automaticamente
      bebida,
      cantBebida,
      amountBebida: +amountBebida,
      subAmountBebida: +amountBebida * cantBebida,
    });
    console.log(bebida, cantBebida, amountBebida, subAmountBebida);
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
          placeholder="ingrese cantidad bebidas"
          onChange={(e) => setCantBebida(e.target.value)}
        />
        <input
          type="number"
          step="0.01"
          placeholder="ingrese valor de bebida"
          onChange={(e) => setAmountBebida(e.target.value)}
        />
        <p onChange={(e) => setSubAmountBebida(e.target.value)}></p>
        <button>Ingresar</button>
      </form>
    </div>
  );
}

export default TransactionBebidas;
