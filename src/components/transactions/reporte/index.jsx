import React from "react";
import ReporteList from "./Reporte";
import { GlobalProvider } from "../../../context/GlobalState";
import BalanceComiBebi from "./BalanceComiBebi";


export const Reporte = () => {
    
    return (
        <div>
            <h1>Reporte Final</h1>
            <GlobalProvider>
                <ReporteList/>
               
            </GlobalProvider>
            
        </div>
      

    );
  };
