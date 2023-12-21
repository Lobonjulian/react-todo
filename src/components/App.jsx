import { useEffect, useState } from "react";
import FormControlado from "./FormControlado";
import Todos from "./Todos";

const initialStateTodo = JSON.parse(localStorage.getItem("todos")) || [];

const App = () => {
  const [todos, setTodos] = useState(initialStateTodo);

  // Solo utilizamos un useEffect para actualizar LocalStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
