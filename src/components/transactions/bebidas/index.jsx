import React from "react";
import TransactionBebidas from "./TransactionBebidas";
import TransactionListBebidas from "./TransactionListBebidas";
import BalanceBebidas from './BalanceBebidas'
import { GlobalProvider } from "../../../context/GlobalState";
import { useState } from "react";


export const BebidasCalc = () => {
   
 //const [bebidaItems, setBebidaItems] = useState();
 /* 
  function createNewBebida(transactionName) {
    //  console.log(bebida);
    setBebidaItems([...bebidaItems, { name: transactionName }]); //este codigo me bloquea el sistema
    alert(transactionName);
  } */


  //createNewBebida={createNewBebida} 
  

    return (
        <div>
            <h3>Bebidas en comun</h3>
            <GlobalProvider>
                  
                <TransactionBebidas />
                <TransactionListBebidas/>
               <BalanceBebidas/>
               
               
            </GlobalProvider>
               
        </div>
      

    );
  };

  // https://www.youtube.com/watch?v=sjrK6RA65eQ&t=1649s min 35, todo devuelta voy a hacer la funcion createbebidas en el index a ver si puedo resolver el tema de props y los estados
