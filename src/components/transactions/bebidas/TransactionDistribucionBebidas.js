import React from "react";
import { useState } from "react";
import { useGlobalState } from "../../../context/GlobalState";

function TransactionDistribucionBebidas() {
  const [denominator, setDenominator] = useState();
  const { addTransaction } = useGlobalState();
  const { resultDist, seResultDist } = useState();

  //const [subAmountBebida, setSubAmountBebida] = useState();
  // const [cantQh, setCantQh] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id: window.crypto.randomUUID(), // esto genera ID automaticamente

      denominator,
      resultDist: denominator,
    });
    console.log(denominator, resultDist);
  };

  return (
    <div>
      <form className="formIngreso__bebida" onSubmit={onSubmit}>
        <h2>Distribucion monto de bebidas</h2>

        <p>Ingresa cant de QQHH asistentes</p>

        <input
          type="number"
          value={denominator}
          step="0.01"
          placeholder="ingrese cant qh"
          onChange={(e) => setDenominator(e.target.value)}
        />
        <button>Calcular</button>
        <p>Cada Qh debe pagar por las bebidas: $ 00000 </p>
      </form>
    </div>
  );
}

export default TransactionDistribucionBebidas;
