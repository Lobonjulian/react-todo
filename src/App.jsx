import { useState } from "react";

const App = () => {
  const [contador, setContador] = useState(0);

  const handleClickIncrement = () => {
    setContador(contador + 1);
  };

  return (
    <div className="container">
      <button onClick={handleClickIncrement}> contador: {contador}</button>
    </div>
  );
};

export default App;
