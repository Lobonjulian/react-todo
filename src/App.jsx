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
    <div className="container mt-5">
      <div className="justify-center flex ">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl ">Contador {count}</h1>
          <div className="flex justify-center gap-4">
            <button
              className="bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleClickDecrement}
              disabled={count === 0 && true}
            >
              Decremento
            </button>
            <button
              className="bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleClickIncrement}
            >
              Incremento
            </button>
            <button
              className="bg-sky-300 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setCount(0)}
            >
              Reiniciar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
