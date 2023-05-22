import { useState } from "react";

export const Platos = (props) => {
  const [newPlato, setNewPlato] = useState("");
  const [newPlatoTipo, setNewPlatoTipo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); /* este codigo para q no refresque la pagina*/
    props.creatNewPlato(newPlato, newPlatoTipo);
    //  props.creatNewValorPlato(newValorPlato);
    // localStorage.setItem("task", newTasks);
    setNewPlato("");
    setNewPlatoTipo("");
  };

  return (
    <form onSubmit={handleSubmit} className="my-2 row">
      <div className="col-9">
        <input
          type="text"
          placeholder="ingrese nueva tarea"
          onChange={(e) => setNewPlato(e.target.value)}
          value={newPlato}
          className="form-control"
        ></input>
        <input
          type="text"
          placeholder="ingrese tipo"
          onChange={(e) => setNewPlatoTipo(e.target.value)}
          value={newPlatoTipo}
          className="form-control"
        ></input>
      </div>
      <div className="col-3">
        <button className="btn btn-primary btn-sm">Ingresar</button>
      </div>
    </form>
  );
};
