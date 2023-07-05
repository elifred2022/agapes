import React from "react";
import { useState } from "react";
import { useGlobalState } from "../../../context/GlobalState";

function TransactionComidas() {
  const { addTransaction } = useGlobalState();
  const [queridoHermano, setQueridoHermano] = useState();
  const [description, setDescription] = useState();
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id: window.crypto.randomUUID(), // esto genera ID automaticamente
      queridoHermano,
      description,
      amount: +amount,
    });
    console.log(queridoHermano, description, amount);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Ingrese Qh"
          onChange={(e) => setQueridoHermano(e.target.value)}
        />
        <input
          type="text"
          placeholder="Ingrese plato"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          step="0.01"
          placeholder="ingrese valor del plato"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button>Ingresar</button>
      </form>
    </div>
  );
}

export default TransactionComidas;
