import React from "react";
import TransactionBebidas from "./TransactionBebidas";
import TransactionListBebidas from "./TransactionListBebidas";
import Balance from "./BalanceBebidas";
import TransactionDistribucionBebidas from "./TransactionDistribucionBebidas";
import { GlobalProvider } from "../../../context/GlobalState";
import { useState } from "react";


export const BebidasCalc = () => {
   

    return (
        <div>
            <h3>Bebidas en comun</h3>
            <GlobalProvider>
                  
                <TransactionListBebidas />
                <Balance/>
               
              
            </GlobalProvider>
               
        </div>
      

    );
  };
