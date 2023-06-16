import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <main>
      <section>
        <Outlet />
      </section>
      
      <nav className="layout">
     
            <Link to="/BebidasCalc">Calcular bebidas</Link>
            {" - "}
            <Link to="/Comensal">Calcular comidas</Link>
            {" - "}
            <Link to="/">Reporte</Link>
            {" - "}
      </nav>
     </main>
  );
}


/*
<main>
      <nav>
        <Link to="/">Lista de productos</Link>
        {" - "}
        <Link to="/Contactos">Contactos</Link>
        {"  "}
      </nav>
      <section>
        <Outlet />
      </section>
    </main>

    */