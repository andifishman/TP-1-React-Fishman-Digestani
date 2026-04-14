import Cita from "./Cita";
import "./ListaCitas.css";

function ListaCitas({ citas, eliminarCita }) {
  return (
    <div className="lista-citas-contenedor">
      <h2>Administrá tus citas</h2>

      {citas.length === 0 ? (
        <p className="sin-citas">No hay citas cargadas</p>
      ) : (
        citas.map((cita) => (
          <Cita
            key={cita.id}
            cita={cita}
            eliminarCita={eliminarCita}
          />
        ))
      )}
    </div>
  );
}

export default ListaCitas;