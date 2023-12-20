const ItemComida = (props) => {
  return <li>{props.comida}</li>;
};

const App = () => {
  const comidasRapidas = ["🍔", "🍕", "🍟"];

  return (
    <div className="container">
      <ul>
        {comidasRapidas.map((comida, index) => {
          return <ItemComida key={index} comida={comida} />;
        })}
      </ul>
    </div>
  );
};

export default App;
