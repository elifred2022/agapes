import React from "react";
import TransactionComidas from "./TransactionComida";
import TransactionListComidas from "./TransactionListComida";
import BalanceC from "./BalanceComidas";




export const Comensal = () => {
    
    return (
        <div>
            <TransactionComidas />
            <TransactionListComidas /> 
            <BalanceC/>

            
        </div>
      

    );
  };
