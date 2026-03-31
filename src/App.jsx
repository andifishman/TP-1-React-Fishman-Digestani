import { useState } from "react";
import Formulario from "./components/Formulario";
import ListaCitas from "./components/ListaCitas";
import Titulo from "./components/Titulo";

function App() {

  const [citas] = useState([
    {
      mascota: "Nina",
      propietario: "Martin",
      fecha: "2021-08-05",
      hora: "08:20",
      sintomas: "Le duele la pierna"
    },
    {
      mascota: "Sifon",
      propietario: "Flecha",
      fecha: "2023-08-05",
      hora: "09:24",
      sintomas: "Duerme mucho"
    },
    {
      mascota: "Floki",
      propietario: "Ari",
      fecha: "2023-08-05",
      hora: "16:15",
      sintomas: "No está comiendo"
    }
  ]);

  return (
    <>
      <Titulo texto="ADMINISTRADOR DE PACIENTES" />

      <div className="container">
        <div className="row">

          <div className="one-half column">
            <Formulario />
          </div>

          <div className="one-half column">
            <ListaCitas citas={citas} />
          </div>

        </div>
      </div>
    </>
  );
}

export default App;