import React from "react";
import TransactionBebidas from "./TransactionBebidas";
import TransactionListBebidas from "./TransactionListBebidas";
import Balance from "./BalanceBebidas";

export const BebidasCalc = () => {
    
    return (
        <div>
            <TransactionBebidas />
            <TransactionListBebidas />
            <Balance/>  
        </div>
      

    );
  };
