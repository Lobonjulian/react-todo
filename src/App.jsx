const MyButton = () => {
  return <button>Agregar</button>;
};

const MensajeUsuarios = () => {
  return <h2>Bienvenidos a los nuevos usuarios</h2>;
};

const App = () => {
  const title = "React Todo";
  const user = true;

  return (
    <div className="container">
      <h1 className="text-primary">{title}</h1>
      <MyButton />
      {user ? <MensajeUsuarios /> : "no hay usuarios"}
    </div>
  );
};

export default App;
