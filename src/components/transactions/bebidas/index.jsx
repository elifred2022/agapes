import React from "react";
import TransactionBebidas from "./TransactionBebidas";
import TransactionListBebidas from "./TransactionListBebidas";
import BalanceBebidas from './BalanceBebidas'
import TransactionDistribucionBebidas from "./TransactionDistribucionBebidas";
import { GlobalProvider } from "../../../context/GlobalState";
import { useState, useEffect } from "react";
import { useGlobalState } from "../../../context/GlobalState";


export const BebidasCalc = () => {
    
  //createNewBebida={createNewBebida} 

  const { transactions, deleteTransaction } = useGlobalState();
  

    return (
        <div>
            <h3>Bebidas en comun</h3>

                <TransactionBebidas />
                <TransactionListBebidas/>
                <BalanceBebidas/>
               
   
               
        </div>
      

    );
  };

  // https://www.youtube.com/watch?v=sjrK6RA65eQ&t=1649s min 35, todo devuelta voy a hacer la funcion createbebidas en el index a ver si puedo resolver el tema de props y los estados

  // solucionado el tema de que no se quedaba almacenbado en el estado por que en los componentes index estaban envue,tos con el globalprovider, solo lo deje en el index.js el principal el globalprovider