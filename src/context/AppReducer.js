export default (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactionsBebidas: [...state.transactionsBebidas, action.payload],
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactionsBebidas: state.transactionsBebidas.filter(
          (transactionsBebidas) => transactionsBebidas.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
