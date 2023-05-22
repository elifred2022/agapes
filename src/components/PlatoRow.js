export const PlatoRow = ({ plato, togglePlato }) => {
  return (
    <tr>
      <td>
        {plato.name}
        <input
          type="checkbox"
          checked={plato.done}
          onChange={() => togglePlato(plato)}
        />
      </td>
    </tr>
  );
};
