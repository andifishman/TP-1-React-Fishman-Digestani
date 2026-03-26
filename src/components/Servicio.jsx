import "./Servicio.css";

function Servicio({ cliente, equipo, fecha, hora, problema }) {
  return (
    <div className="servicio">
      <p><strong>Cliente:</strong> {cliente}</p>
      <p><strong>Equipo:</strong> {equipo}</p>
      <p><strong>Fecha:</strong> {fecha}</p>
      <p><strong>Hora:</strong> {hora}</p>
      <p><strong>Problema:</strong> {problema}</p>
    </div>
  );
}

export default Servicio;