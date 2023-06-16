import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import { GlobalProvider } from "./context/GlobalState";
import { BebidasCalc } from "./components/transactions/bebidas/index";
import { Comensal } from "./components/transactions/queridoHermano";
import { Layout } from "./routes/Layout";
import { Reporte } from "./components/transactions/reporte";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />

    <GlobalProvider>
      <Routes>
        <Route index element={<Reporte />} />
        <Route path="/BebidasCalc" element={<BebidasCalc />} />
        <Route path="/Comensal" element={<Comensal />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </GlobalProvider>
  </BrowserRouter>
);

reportWebVitals();

/*

ASI ESTA BIEN EL ROUTER PARA QUE APAREZCA LOS ENLACES EN EL BODY 

import Header from "./components/Header";
import { GlobalProvider } from "./context/GlobalState";
import { BebidasCalc } from "./components/transactions/bebidas/index";
import { Comensal } from "./components/transactions/queridoHermano";
import { Layout } from "./routes/Layout";
import { Reporte } from "./components/transactions/reporte";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />

    <GlobalProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Reporte />} />
          <Route path="/BebidasCalc" element={<BebidasCalc />} />
          <Route path="/Comensal" element={<Comensal />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </GlobalProvider>
  </BrowserRouter>
);


reportWebVitals();
      */
