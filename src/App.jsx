const App = () => {
  const comidasRapidas = ["🍔", "🍕", "🍟"];

  return (
    <div className="container">
      <ul>
        {comidasRapidas.map((comida, index) => (
          <li key={index}>{comida}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
