import { useState } from "react";

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
      <h1>ADMINISTRADOR DE PACIENTES</h1>

      <div className="container">
        <div className="row">

          <div className="one-half column">
            <h2>Crear mi Cita</h2>

            <form>
              <label>Nombre Mascota</label>
              <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" />

              <label>Nombre Dueño</label>
              <input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota" />

              <label>Fecha</label>
              <input type="date" name="fecha" className="u-full-width" />

              <label>hora</label>
              <input type="time" name="hora" className="u-full-width" />

              <label>Sintomas</label>
              <textarea name="sintomas" className="u-full-width"></textarea>

              <button type="submit" className="u-full-width button-primary">
                Agregar Cita
              </button>
            </form>
          </div>

          <div className="one-half column">
            <h2>Administra tus citas</h2>

            {citas.map((cita, index) => (
              <div className="cita" key={index}>
                <p>Mascota: <span>{cita.mascota}</span></p>
                <p>Dueño: <span>{cita.propietario}</span></p>
                <p>Fecha: <span>{cita.fecha}</span></p>
                <p>Hora: <span>{cita.hora}</span></p>
                <p>Sintomas: <span>{cita.sintomas}</span></p>
                
                <button className="button elimnar u-full-width">
                  Eliminar ×
                </button>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}

export default App;