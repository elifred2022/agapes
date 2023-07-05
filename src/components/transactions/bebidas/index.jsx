import React from "react";
import TransactionBebidas from "./TransactionBebidas";
import TransactionListBebidas from "./TransactionListBebidas";
import Balance from "./BalanceBebidas";
import TransactionDistribucionBebidas from "./TransactionDistribucionBebidas";
import { GlobalProvider } from "../../../context/GlobalState";
import { useState } from "react";


export const BebidasCalc = () => {
   // const [resultadoBebidas, setResultadoBebidas] = useState();

    return (
        <div>
            <h3>Bebidas en comun</h3>
            <GlobalProvider>
                <TransactionBebidas />
                <TransactionListBebidas />
                <Balance/>
               
              
            </GlobalProvider>
               
        </div>
      

    );
  };
