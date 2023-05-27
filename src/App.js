import React from "react";
import { GlobalProvider } from "./context/GlobalState";
import Balance from "./components/Balance";
import Header from "./components/Header";
import TransactionForm from "./components/transactions/TransactionFrom";
import TransactionList from "./components/transactions/TransactionList";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <h1>Calculo de Agapes</h1>
      <TransactionForm />
      <TransactionList />
      <Balance />
    </GlobalProvider>
  );
}

export default App;

// https://www.youtube.com/watch?v=zN6xXtHww54 44:49
