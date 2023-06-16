import React from "react";
import TransactionBebidas from "./TransactionBebidas";
import TransactionListBebidas from "./TransactionListBebidas";
import Balance from "./BalanceBebidas";

export const BebidasCalc = () => {
    
    return (
        <div>
            <h3>Bebidas en comun</h3>
            <TransactionBebidas />
            <TransactionListBebidas />
            <Balance/>  
        </div>
      

    );
  };
