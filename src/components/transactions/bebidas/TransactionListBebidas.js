import { useGlobalState } from "./GlobalState";

function TransactionListBebidas() {
  const { transactionsBebidas, deleteTransaction } = useGlobalState();

  return (
    <div>
      {transactionsBebidas.map((transactionsBebidas) => (
        <div key={transactionsBebidas.id}>
          <p>{transactionsBebidas.bebida} </p>

          <span>{transactionsBebidas.amountBebida} </span>
          <button
            onClick={() => {
              deleteTransaction(transactionsBebidas.id);
            }}
          >
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
}

export default TransactionListBebidas;
