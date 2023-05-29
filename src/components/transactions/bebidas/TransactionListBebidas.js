import { useGlobalState } from "../../../context/GlobalState";

function TransactionListBebidas() {
  const { transactionsBebidas, deleteTransaction } = useGlobalState();

  return (
    <div>
      {transactionsBebidas.map((transactionsBebidas) => (
        <div key={transactionsBebidas.id}>
          <p>{transactionsBebidas.bebida} </p>

          <span>{transactionsBebidas.cantBebida} </span>

          <span>{transactionsBebidas.amountBebida} </span>

          <span>{transactionsBebidas.subAmountBebida} </span>

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
