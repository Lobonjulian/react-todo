import { useState } from "react";

const FormControlado = () => {
  const [todo, setTodo] = useState({
    todoNombre: "",
    description: "",
    todoEstado: "pendiente",
    todocheck: false,
  });

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { todoNombre, description } = todo;

    //validación
    if (!todoNombre.trim() || !description.trim()) {
      console.log("campos vacios");
      setError(true);
      return;
    } else {
      setError(false);
    }
    // Enviar todo a un array!
  };
  const MostrarError = () => (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      {" "}
      todos los campos son Obligatorios{" "}
    </div>
  );

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    // utilizando el callback
    setTodo((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  console.log(todo);
  return (
    <div className="container mt-2">
      <h1 className="text-center text-2xl m-4 text-sky-600">
        Formulario Controlado
      </h1>
      {error && <MostrarError />}
      <form
        className="flex flex-col mt-2 gap-8 justify-center items-center"
        onSubmit={handleSubmit}
      >
        <input
          className="border border-slate-300 rounded p-2 w-1/2"
          name="todoNombre"
          placeholder="Ingrese una tarea"
          value={todo.todoNombre}
          onChange={handleChange}
        />
        <textarea
          className="border border-slate-300 resize-none rounded p-2 w-1/2 h-24 "
          name="description"
          placeholder="Ingrese una descripción"
          value={todo.description}
          onChange={handleChange}
        />
        <div>
          <input
            className="border border-slate-300"
            type="checkbox"
            id="todoEstado"
            checked={todo.todoCheck}
            onChange={handleChange}
            name="todoCheck"
          />
          <label htmlFor="todoEstado" className="ml-2">
            Prioridad
          </label>
        </div>
        <select
          className="border border-slate-300 rounded-sm p-2 w-1/4"
          name="todoEstado"
          value={todo.todoEstado}
          onChange={handleChange}
        >
          <option value="pendiente">Pendiente</option>
          <option value="completado">Completado</option>
        </select>
        <button
          type="submit"
          className="bg-lime-500 text-white px-4 py-2 rounded-md"
        >
          Agregar
        </button>
      </form>
    </div>
  );
};

export default FormControlado;
