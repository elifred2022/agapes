import React from "react";
import { useState } from "react";
import { useGlobalState } from "../../../context/GlobalState";

function TransactionBebidas(props) {
  // console.log(props);

  const { addTransaction } = useGlobalState();
  const [bebida, setBebida] = useState("");
  const [amountBebida, setAmountBebida] = useState("");
  const [cantBebida, setCantBebida] = useState("");

  const [subAmountBebida, setSubAmountBebida] = useState();

  const onSubmit = (e) => {
    e.preventDefault(); //para que no envie el formulario a backend
    props.createNewBebida([bebida, amountBebida, cantBebida]); // estas props viene de transactionslist esto para almacenar el valor antes del local storage
    localStorage.setItem("bebida", bebida); // para guardar en el local storage
    setBebida(""); // para limpiar el campo del input
    localStorage.setItem("costoBebida", amountBebida);
    setAmountBebida("");
    localStorage.setItem("cantBebida", cantBebida);
    setCantBebida("");

    addTransaction({
      id: window.crypto.randomUUID(), // esto genera ID automaticamente

      bebida,
      cantBebida,
      amountBebida: +amountBebida,
      subAmountBebida: +amountBebida * cantBebida,
    });
    console.log(bebida, cantBebida, amountBebida);
  };

  return (
    <div>
      <form className="formIngreso__bebida" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Ingrese bebida"
          onChange={(e) => setBebida(e.target.value)}
          value={bebida} // para ir limpiando el input mientras se va cargando datos
        />

        <input
          type="number"
          step="0.01"
          placeholder="ingrese valor de bebida"
          onChange={(e) => setAmountBebida(e.target.value)}
          value={amountBebida}
        />

        <input
          type="number"
          step="0.01"
          placeholder="ingrese cantidad bebidas"
          onChange={(e) => setCantBebida(e.target.value)}
          value={cantBebida}
        />

        <button>Cargar</button>
      </form>
    </div>
  );
}

export default TransactionBebidas;

/*  <input
        type="number"
        placeholder="Ingrese cant qh"
        onChange={(e) => setCantQh(e.target.value)}
      /> */
