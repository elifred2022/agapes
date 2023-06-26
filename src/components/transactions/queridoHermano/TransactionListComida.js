import { useGlobalState } from "../../../context/GlobalState";

function TransactionListComidas() {
  const { transactionsComidas, deleteTransaction } = useGlobalState();

  return (
    <div>
      <div className="formCabecera">
        <b>QH</b>
        <b>Plato</b>
        <b>Monto</b>
      </div>
    </div>
  );
}

export default TransactionListComidas;
