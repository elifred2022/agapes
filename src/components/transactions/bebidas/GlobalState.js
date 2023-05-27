import { createContext, useContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactionsBebidas: [],
};

export const Context = createContext();

export const useGlobalState = () => {
  const context = useContext(Context);
  return context;
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // funcion para añadir, ver codigos en el AppReducer
  const addTransaction = (transactionsBebidas) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transactionsBebidas,
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
        transactionsBebidas: state.transactionsBebidas,

        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </Context.Provider>
  );
};
