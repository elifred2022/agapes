import { createContext, useContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const intialState = {
  transactions: [],
};

export const Context = createContext();

export const useGlobalState = () => {
  const context = useContext(Context);
  return context;
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, intialState);

  const addTransaction = (transactions) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transactions,
    });
  };

  return (
    <Context.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
      }}
    >
      {children}
    </Context.Provider>
  );
};
