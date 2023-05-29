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
      <h1>Calculo de Agapes</h1>
      <h2>bebidas</h2>

      <TransactionBebidas />
      <h2>Subtotal bebidas</h2>
      <TransactionListBebidas />
      <h2>total bebidas</h2>
      <BalanceBebidas />
    </GlobalProvider>
  );
}

export default App;

// https://www.youtube.com/watch?v=zN6xXtHww54 44:49
