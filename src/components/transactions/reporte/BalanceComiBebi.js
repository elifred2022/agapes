import React from "react";
import { useGlobalState } from "../../../context/GlobalState";
import { useState } from "react";

function BalanceComiBebi() {
  const [resBebida, setResbebida] = useState();
  const [resComida, setResComida] = useState();
  //const [totalCqh, setTotalCqh] = useState();
  //const { addTransaction } = useGlobalState();
  const { transactions, deleteTransaction } = useGlobalState();

  const totalCqh = 10 + 10;

  return (
    <div>
      <p>Nombres y monto</p>
    </div>
  );
}

export default BalanceComiBebi;

// no se comunica con los componentes de bebidas y comida para hacer el calculo
