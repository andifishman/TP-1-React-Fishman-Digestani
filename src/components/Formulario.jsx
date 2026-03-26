import { useState } from "react";
import "./Formulario.css";

function Formulario({ agregarServicio }) {

  const [form, setForm] = useState({
    cliente: "",
    equipo: "",
    fecha: "",
    hora: "",
    problema: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    agregarServicio(form);

    setForm({
      cliente: "",
      equipo: "",
      fecha: "",
      hora: "",
      problema: ""
    });
  };

  return (
    <div className="formulario">
      <h2>Crear Orden</h2>

      <form onSubmit={handleSubmit}>
        <label>Nombre del Cliente</label>
        <input name="cliente" value={form.cliente} onChange={handleChange} />

        <label>Equipo</label>
        <input name="equipo" value={form.equipo} onChange={handleChange} />

        <label>Fecha</label>
        <input type="date" name="fecha" value={form.fecha} onChange={handleChange} />

        <label>Hora</label>
        <input type="time" name="hora" value={form.hora} onChange={handleChange} />

        <label>Problema</label>
        <textarea name="problema" value={form.problema} onChange={handleChange}></textarea>

        <button type="submit">Agregar Orden</button>
      </form>
    </div>
  );
}

export default Formulario;