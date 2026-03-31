import Cita from "./Cita";

function ListaCitas({ citas }) {
  return (
    <>
      <h2>Administra tus citas</h2>

      {citas.map((cita, index) => (
        <Cita key={index} cita={cita} />
      ))}
    </>
  );
}

export default ListaCitas;