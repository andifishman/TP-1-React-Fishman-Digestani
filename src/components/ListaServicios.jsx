import Servicio from "./Servicio";
import "./ListaServicios.css";

function ListaServicios({ servicios }) {
  return (
    <div className="lista">
      <h2>Órdenes registradas</h2>

      {servicios.map((servicio, index) => (
        <Servicio
          key={index}
          cliente={servicio.cliente}
          equipo={servicio.equipo}
          fecha={servicio.fecha}
          hora={servicio.hora}
          problema={servicio.problema}
        />
      ))}
    </div>
  );
}

export default ListaServicios;