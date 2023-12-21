import { useState } from "react";
import FormControlado from "./FormControlado";
import Todos from "./Todos";

const initialStateTodo = [
  {
    id: 1,
    title: "Tarea",
    description: "Descripción de la tarea inicial",
    state: "completado",
    priority: false,
  },
  {
    id: 2,
    title: "Tarea 2",
    description: "Descripción de la segunda tarea",
    state: "pendiente",
    priority: true,
  },
];

const App = () => {
  const [todos, setTodos] = useState(initialStateTodo);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const updateTodo = (id) => {
    const newTodos = todo.map((todo) => {
      if (todo.id === id) {
        todo.state = !todo.state;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const orderTodos = (arrayTodos) => {
    return arrayTodos.sort((a, b) => {
      if (a.priority === b.priority) {
        return 0;
      }
      if (a.priority) {
        return -1;
      }
      if (!a.priority) {
        return 1;
      }
    });
  };

  return (
    <>
      <h1 className="text-3xl text-center my-5">Todo List </h1>
      <FormControlado addTodo={addTodo} />
      <Todos
        todos={orderTodos(todos)}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    </>
  );
};

export default App;
