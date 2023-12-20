import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const handleClickDecrement = () => {
    setCount(count - 1);
  };

  const handleClickIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>
        <div>
          <h1>Contador {count}</h1>
          <div>
            <button
              onClick={handleClickDecrement}
              disabled={count === 0 && true}
            >
              Decremento
            </button>
            <button onClick={handleClickIncrement}>Incremento</button>
            <button onClick={() => setCount(0)}>Reiniciar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
