import React from "react";
import { GlobalProvider } from "./context/GlobalState";

import Header from "./components/Header";

import TransactionListBebidas from "./components/transactions/bebidas/TransactionListBebidas";
import TransactionBebidas from "./components/transactions/bebidas/TransactionBebidas";
import BalanceBebidas from "./components/transactions/bebidas/BalanceBebidas";

import TransactionForm from "./components/transactions/queridoHermano/TransactionFrom";
import TransactionList from "./components/transactions/queridoHermano/TransactionList";
import Balance from "./components/transactions/queridoHermano/Balance";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <h3>Bebidas en comun</h3>
      <TransactionBebidas />

      <TransactionListBebidas />
      <BalanceBebidas />
    </GlobalProvider>
  );
}

export default App;

// https://www.youtube.com/watch?v=zN6xXtHww54 44:49
