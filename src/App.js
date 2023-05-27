import React from "react";
import { GlobalProvider } from "./components/transactions/bebidas/GlobalState";
import Balance from "./components/transactions/queridoHermano/Balance";
import Header from "./components/Header";
import TransactionForm from "./components/transactions/queridoHermano/TransactionFrom";
import TransactionList from "./components/transactions/queridoHermano/TransactionList";
import TransactionListBebidas from "./components/transactions/bebidas/TransactionListBebidas";
import TransactionBebidas from "./components/transactions/bebidas/TransactionBebidas";
import BalanceBebidas from "./components/transactions/bebidas/BalanceBebidas";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <h1>Calculo de Agapes</h1>
      <h2>bebidas</h2>
      <TransactionBebidas />
      <TransactionListBebidas />
      <BalanceBebidas />
      <h2>PLato</h2>
    </GlobalProvider>
  );
}

export default App;

// https://www.youtube.com/watch?v=zN6xXtHww54 44:49
