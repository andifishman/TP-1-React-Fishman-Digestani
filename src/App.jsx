import { useState } from "react";
import Formulario from "./components/Formulario";
import ListaCitas from "./components/ListaCitas";
import Titulo from "./components/Titulo";
import "./App.css";

function App() {
  const [citas, setCitas] = useState([]);

  const agregarCita = (citaNueva) => {
    setCitas([...citas, citaNueva]);
  };

  const eliminarCita = (id) => {
    const confirmar = window.confirm(
      "¿Seguro que querés eliminar esta cita?"
    );

    if (confirmar) {
      setCitas(citas.filter((cita) => cita.id !== id));
    }
  };

  return (
    <>
      <Titulo texto="Administrador de pacientes" />

      <div className="contenedor-principal">
        <div className="columna">
          <Formulario agregarCita={agregarCita} />
        </div>

        <div className="columna">
          <ListaCitas citas={citas} eliminarCita={eliminarCita} />
        </div>
      </div>
    </>
  );
}

export default App;