import { useRef } from "react";

const FormNoControlado = () => {
  const formulario = useRef(null);

  //formulario no controlado
  const handleSubmit = (e) => {
    console.log(formulario.current);
    e.preventDefault();

    const datos = new FormData(formulario.current);
    console.log(...datos.entries());

    const objectoDatos = Object.fromEntries([...datos.entries()]);

    if (!objectoDatos.tarea.trim()) {
      return console.log("vació");
    }

    console.log("paso la validación");
    formulario.current.reset();
  };

  return (
    <div className="container mt-2">
      <h2 className="text-center text-2xl">Formulario</h2>
      <form
        className="flex justify-center items-center flex-col mt-8 gap-6"
        onSubmit={handleSubmit}
        ref={formulario}
      >
        <input
          className="rounded-md w-1/2 p-2 shadow-sm border border-slate-300"
          placeholder="Ingrese una tarea"
          name="tarea"
          type="text"
        />
        <textarea
          className="resize-none border border-slate-300 shadow-sm p-2 rounded-md  w-1/2 h-24"
          name="descripcion"
          placeholder="Ingrese una descripción"
        />
        <select
          className="border border-slate-300 shadow-sm p-1 rounded-md  w-1/4"
          name="Estado"
          defaultValue="pendiente"
        >
          <option value="pendiente">Pendiente</option>
          <option value="completado">Completado</option>
        </select>
        <button className="bg-lime-500 text-white px-4 py-2 rounded-md">
          Agregar
        </button>
      </form>
    </div>
  );
};

export default FormNoControlado;
