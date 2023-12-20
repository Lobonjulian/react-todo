const MyButton = () => {
  return <button>Agregar</button>;
};

const App = () => {
  const title = "React Todo";

  return (
    <div className="container">
      <h1 className="text-primary">{title}</h1>
      <MyButton />
    </div>
  );
};

export default App;
