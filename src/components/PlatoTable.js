import React from "react";
import { PlatoRow } from "./PlatoRow";

export const PlatoTable = ({ plato, togglePlato, showCompleted = false }) => {
  const platoTableRows = (doneValue) => {
    return plato
      .filter((plato) => plato.done === doneValue)
      .map((plato) => (
        <PlatoRow plato={plato} key={plato.name} togglePlato={togglePlato} />
      ));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Plato</th>
        </tr>
      </thead>
      <tbody>{platoTableRows(showCompleted)}</tbody>
    </table>
  );
};

//  <tbody>{platoTableRows(showCompleted)}</tbody>
