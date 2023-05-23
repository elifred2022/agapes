APP.JS

import "./App.css";
import { useState, useEffect } from "react";
import { Platos } from "./components/Platos";
import { ValorPlato } from "./components/ValorPlato";
import { PlatoTable } from "./components/PlatoTable";
import { VisibilityControl } from "./components/VisibilityControl";

function App() {
const [platoItems, setPlatoItems] = useState([]);
const [platoValue, setPlatoValue] = useState([]);
const [showCompleted, setShowCompleted] = useState(false);

/_------------------------PLATO----------------------------------------------_/

function creatNewPlato(platoName) {
console.log(platoName);
if (!platoItems.find((plato) => plato.name === platoName)) {
setPlatoItems([...platoItems, { name: platoName, done: false }]);
}

    // setTasksItems([...tasksItems, { name: tasksItems, done: false }]); // asi se crea un nuevo objeto para no modificar objetos existentes regla de react; setTaskItems([...taskName, {name: taskName}])

}

const togglePlato = (plato) => {
setPlatoItems(
platoItems.map((t) =>
t.name === plato.name ? { ...t, done: !t.done } : t
)
);
};

useEffect(() => {
let data = localStorage.getItem("plato");
if (data) {
setPlatoItems(JSON.parse(data));
}
}, []);

useEffect(() => {
localStorage.setItem("plato", JSON.stringify(platoItems));
}, [platoItems]);

/_------------------------VAlOR----------------------------------------------_/
function creatNewValor(platoValue) {
console.log(platoValue);
if (!platoValue.find((valor) => valor.name === platoValue)) {
setPlatoValue([...platoValue, { name: platoValue, done: false }]);
}

    // setTasksItems([...tasksItems, { name: tasksItems, done: false }]); // asi se crea un nuevo objeto para no modificar objetos existentes regla de react; setTaskItems([...taskName, {name: taskName}])

}

const toggleValor = (valor) => {
setPlatoValue(
platoValue.map((t) =>
t.name === valor.name ? { ...t, done: !t.done } : t
)
);
};

useEffect(() => {
let data = localStorage.getItem("valor");
if (data) {
setPlatoValue(JSON.parse(data));
}
}, []);

useEffect(() => {
localStorage.setItem("valor", JSON.stringify(platoValue));
}, [platoValue]);
/_------------------------LIMPIAR----------------------------------------------_/

const cleanPlato = () => {
setPlatoItems(platoItems.filter((plato) => !plato.done));
setShowCompleted(false);
};

return (
<main className="bg-dark vh-100 text-white">
<div className="container p-4 col-md-4 offset-md-4">
<Platos creatNewPlato={creatNewPlato} />
<ValorPlato creatNewValor={creatNewValor} />

        <PlatoTable plato={platoItems} togglePlato={togglePlato} />

        <VisibilityControl
          isChecked={showCompleted}
          setShowCompleted={(checked) => setShowCompleted(checked)}
          cleanTasks={cleanPlato}
        />

        {showCompleted === true && (
          <PlatoTable
            plato={platoItems}
            togglePlato={togglePlato}
            showCompleted={showCompleted}
          />
        )}
      </div>
    </main>

);
}

export default App;
