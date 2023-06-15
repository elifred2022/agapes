import React from "react";
import { GlobalProvider } from "./context/GlobalState";
import Header from "./components/Header";
import { BebidasCalc } from "./components/transactions/bebidas/index";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <h3>Bebidas en comun</h3>
      <BebidasCalc />
    </GlobalProvider>
  );
}

export default App;

// https://www.youtube.com/watch?v=zN6xXtHww54 44:49
