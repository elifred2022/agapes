import { useGlobalState } from "../../context/GlobalState";

function TransactionList() {
  const { transactions, deleteTransaction } = useGlobalState();

  return (
    <div>
      {transactions.map((transactions) => (
        <div key={transactions.id}>
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
