import { useGlobalState } from "../bebidas/GlobalState";

function TransactionList() {
  const { transactions, deleteTransaction } = useGlobalState();

  return (
    <div>
      {transactions.map((transactions) => (
        <div key={transactions.id}>
          <p>{transactions.bebida} </p>

          <p>{transactions.queridoHermano} </p>
          <p>{transactions.description} </p>
          <span>{transactions.amount} </span>
          <button
            onClick={() => {
              deleteTransaction(transactions.id);
            }}
          >
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
}

export default TransactionList;
