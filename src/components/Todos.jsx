import Todo from "../Todo";

const Todos = ({ todos, deleteTodo, updateTodo }) => {
  return (
    <main>
      <h2 className="text-center my-5">Todos</h2>
      <ul className="flex justify-center item-center flex-col gap-4">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        ))}
      </ul>
    </main>
  );
};

export default Todos;
