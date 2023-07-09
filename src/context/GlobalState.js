import { createContext, useContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import TransactionBebidas from "../components/transactions/bebidas/TransactionBebidas";

const initialState = {
  transactions: [],
};

export const Context = createContext();

export const useGlobalState = () => {
  const context = useContext(Context);
  return context;
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function createNewTransaction(transactions) {
    //  console.log(bebida);
    //setBebidaItems([...bebidaItems, { name: transactionName }]); //este codigo me bloquea el sistema
    alert(transactions);
  }

  // funcion para añadir, ver codigos en el AppReducer
  const addTransaction = (transactions) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transactions, //transactions
    });
  };

  // funcion para eliminar. ver codigos en el AppReducer
  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  return (
    <Context.Provider
      value={{
        transactions: state.transactions,

        addTransaction,
        deleteTransaction,
        createNewTransaction,
      }}
    >
      {children}
    </Context.Provider>
  );
};

//    <TransactionBebidas createNewBebida={createNewBebida} />
// https://www.youtube.com/watch?v=YvbUO0YTD3o props children
