import { useState } from "react";
import Swal from "sweetalert2";

const FormControlado = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    title: "Tarea",
    description: "Descripcion de la tarea",
    state: "pendiente",
    priority: true,
  });

  const { title, description, state, priority } = todo;

  const handleSubmit = (e) => {
    e.preventDefault();

    //validación
    if (!title.trim() || !description.trim()) {
      console.log("campos Incompletos");
      Swal.fire({
        title: "Error",
        text: "Todos los campos son obligatorios",
        icon: "error",
      });
      return;
    }

    addTodo({
      id: Date.now(),
      ...todo,
      state: state === "completado",
    });
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Tarea agregada",
      timer: 1500,
      showConfirmButton: false,
    });
  };

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    // utilizando el callback
    setTodo((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="container mt-2">
      <h2 className="text-center text-2xl m-4 text-sky-600">Formulario</h2>
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
