import React from "react";
import { GlobalProvider } from "./context/GlobalState";

import TransactionForm from "./components/TransactionFrom";
import Balance from "./components/Balance";
import Header from "./components/Header";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <TransactionForm />
      <Balance />
      <h1>Hello worldsss</h1>;
    </GlobalProvider>
  );
}

export default App;

// https://www.youtube.com/watch?v=zN6xXtHww54 31:26
