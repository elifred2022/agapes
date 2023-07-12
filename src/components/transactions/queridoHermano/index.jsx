import React from "react";
import TransactionComidas from "./TransactionComida";
import TransactionListComidas from "./TransactionListComida";
import BalanceC from "./BalanceComidas";
import TransactionBebidas from "../bebidas/TransactionBebidas";




export const Comensal = () => {
    
    return (
        <div>
           
            <TransactionComidas />
            <TransactionListComidas /> 
            <BalanceC/>
          
        </div>

    );
  };

  // solucionado el tema de que no se quedaba almacenbado en el estado por que en los componentes index estaban envue,tos con el globalprovider, solo lo deje en el index.js el principal el globalprovider