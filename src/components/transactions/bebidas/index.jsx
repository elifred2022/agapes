import React from "react";
import TransactionBebidas from "./TransactionBebidas";
import TransactionListBebidas from "./TransactionListBebidas";
import Balance from "./BalanceBebidas";
import TransactionDistribucionBebidas from "./TransactionDistribucionBebidas";

export const BebidasCalc = () => {
    
    return (
        <div>
            <h3>Bebidas en comun</h3>
            <TransactionBebidas />
            <TransactionListBebidas />
            <Balance/>
            <TransactionDistribucionBebidas />   
        </div>
      

    );
  };
