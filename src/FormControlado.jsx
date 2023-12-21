import { useState } from "react";

const FormControlado = () => {
  const [todo, setTodo] = useState({
    todoNombre: "",
    description: "",
    todoEstado: "pendiente",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todo);
  };

  const handleChange = (e) => {
    // utilizando el callback
    setTodo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="container mt-2">
      <h1 className="text-center text-2xl m-4 text-sky-600">
        Formulario Controlado
      </h1>
      <form
        className="flex flex-col gap-8 justify-center items-center"
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
