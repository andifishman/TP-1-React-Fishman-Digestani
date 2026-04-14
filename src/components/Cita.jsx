import "./Cita.css";

function Cita({ cita, eliminarCita }) {
  const { id, mascota, propietario, fecha, hora, sintomas } = cita;

  return (
    <div className="cita">
      <p>
        Mascota: <span>{mascota}</span>
      </p>
      <p>
        Propietario: <span>{propietario}</span>
      </p>
      <p>
        Fecha: <span>{fecha}</span>
      </p>
      <p>
        Hora: <span>{hora}</span>
      </p>
      <p>
        Síntomas: <span>{sintomas}</span>
      </p>

      <button
        className="button eliminar"
        onClick={() => eliminarCita(id)}
      >
        Eliminar
      </button>
    </div>
  );
}

export default Cita;