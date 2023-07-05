import { useState } from "react";
import { GlobalProvider, useGlobalState } from "../../../context/GlobalState";
import BalanceComiBebi from "./BalanceComiBebi";
import TransactionListComidas from "../queridoHermano/TransactionListComida";



function ReporteList() {
  const { transactions, deleteTransaction } = useGlobalState();

 

  return (
    <div>
      <div className="formCabecera">
        <b>Nombre</b>
        <b>Monto a pagar</b>
        
      </div>

   <div>
   
    <BalanceComiBebi/>

 

   </div>
           
    </div>
  );
}

export default ReporteList;