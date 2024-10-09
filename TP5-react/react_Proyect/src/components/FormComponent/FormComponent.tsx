import { useForm } from "../../hooks/useForm";

export const FormComponent = () => {
  const { values, handleChanges, resetForm } = useForm({
    email: "",
    nombre: "",
    edad: NaN,
  });

  const { email, nombre, edad } = values;

  const handleSubmitForm = () => {
    console.log(values);
  };

  const handleResetForm = () => {
    resetForm();
  };

  return (
    <div>
      <div>
        <h2>Formulario</h2>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2vh",
        }}
      >
        <input
          value={email}
          name="email"
          onChange={handleChanges}
          type="email"
          placeholder="email@example.com"
        />
        <input
          value={nombre}
          name="nombre"
          onChange={handleChanges}
          type="text"
          placeholder="nombre"
        />
        <input
          value={edad}
          name="edad"
          onChange={handleChanges}
          type="number"
          min="0"
          placeholder="edad"
        />
      </div>
      <div>
        <button onClick={handleSubmitForm}>Enviar</button>
        <button onClick={handleResetForm}>Resetear</button>
      </div>
    </div>
  );
};
