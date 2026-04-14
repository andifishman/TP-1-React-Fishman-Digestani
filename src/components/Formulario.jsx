import { useState } from "react";
import "./Formulario.css";

function Formulario({ agregarCita }) {
  const [cita, setCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const [error, setError] = useState(false);
//guarda los nuevos valores como variables y submitea
//tres puntitos es lo mismo que la lista
  const handleChange = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { mascota, propietario, fecha, hora, sintomas } = cita;

    setError(false);

    agregarCita({
      ...cita,
      id: Date.now().toString(),
    });

    setCita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  return (
    <div className="formulario-contenedor">
      <h2>Crear MI Cita</h2>

      {error && (
        <p className="alerta-error">
          Todos los campos son obligatorios
        </p>
      )}

      <form className="formulario" onSubmit={handleSubmit}>
        <div className="campo">
          <label>Nombre Mascota</label>
          <input
            type="text"
            name="mascota"
            value={cita.mascota}
            onChange={handleChange}
          />
        </div>

        <div className="campo">
          <label>Nombre Dueño</label>
          <input
            type="text"
            name="propietario"
            value={cita.propietario}
            onChange={handleChange}
          />
        </div>

        <div className="campo">
          <label>Fecha</label>
          <input
            type="date"
            name="fecha"
            value={cita.fecha}
            onChange={handleChange}
          />
        </div>

        <div className="campo">
          <label>hora</label>
          <input
            type="time"
            name="hora"
            value={cita.hora}
            onChange={handleChange}
          />
        </div>

        <div className="campo">
          <label>Síntomas</label>
          <textarea
            name="sintomas"
            value={cita.sintomas}
            onChange={handleChange}
            rows="4"
          />
        </div>

        <button type="submit" className="button-primary u-full-width">
          Agregar Cita
        </button>
      </form>
    </div>
  );
}

export default Formulario;