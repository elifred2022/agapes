import { useGlobalState } from "../../../context/GlobalState";

function TransactionList() {
  const { transactionsQh, deleteTransaction } = useGlobalState();

  return (
    <div>
      {transactionsQh.map((transactionsQh) => (
        <div key={transactionsQh.id}>
          <p>{transactionsQh.queridoHermano} </p>
          <p>{transactionsQh.description} </p>
          <span>{transactionsQh.amount} </span>
          <button
            onClick={() => {
              deleteTransaction(transactionsQh.id);
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
