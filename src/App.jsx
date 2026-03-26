import { useState } from "react";
import Formulario from "./components/Formulario";
import ListaServicios from "./components/ListaServicios";
import "./App.css";

function App() {

  const [servicios, setServicios] = useState([
    {
      cliente: "Geronimo Benavidez",
      equipo: "Notebook",
      fecha: "2026-03-26",
      hora: "11:00",
      problema: "No enciende"
    }
  ]);

  const agregarServicio = (nuevoServicio) => {
    setServicios([...servicios, nuevoServicio]);
  };

  return (
    <div className="contenedor">
      <h1>Gestor de Servicio Técnico</h1>

      <div className="grid">
        <Formulario agregarServicio={agregarServicio} />
        <ListaServicios servicios={servicios} />
      </div>
    </div>
  );
}

export default App;