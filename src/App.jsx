const App = () => {
  const title = "React Todo";
  const classColor = {
    primary: "text-primary",
    info: "text-info",
  };

  return (
    <div className="container">
      <h1 className={classColor.primary}>{title}</h1>
      <p className={classColor.info}>Lorem ipsum </p>
    </div>
  );
};

export default App;
