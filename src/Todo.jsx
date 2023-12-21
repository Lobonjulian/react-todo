const Todo = ({ todo }) => {
  const { title, description, state, priority } = todo;
  return (
    <li className="flex justify-between items-start">
      <div>
        <h5 className={`${state && "line-through"}`}>{title}</h5>
        <p>{description}</p>
        <div className="flex gap-2">
          <button className="bg-blue-500 text-white px-2 py-1 rounded-md">
            Actualizar
          </button>{" "}
          <button className="bg-red-500 text-white px-2 py-1 rounded-md">
            Eliminar
          </button>
        </div>
      </div>
      <span className="bg-sky-500 rounded-full p-1">
        {priority && "Prioridad"}
      </span>
    </li>
  );
};

export default Todo;
