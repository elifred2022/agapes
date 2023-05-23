import React from "react";
import { PlatoRow } from "./PlatoRow";

export const ValorPlato = ({
  valor,

  toggleValor,
  showCompleted = false,
}) => {
  const valorTableRows = (doneValue) => {
    return valor
      .filter((valor) => valor.done === doneValue)
      .map((valor) => <PlatoRow valor={valor} toggleValor={toggleValor} />);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Plato</th>
        </tr>
      </thead>
      <tbody>{valorTableRows(showCompleted)}</tbody>
    </table>
  );
};

//  <tbody>{platoTableRows(showCompleted)}</tbody>
