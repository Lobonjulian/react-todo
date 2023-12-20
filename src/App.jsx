import PropTypes from "prop-types";

const Mybutton = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

Mybutton.protoTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

const App = () => {
  const handleClick = () => {
    console.log("haz realizado un click");
  };
  return (
    <div className="container">
      <Mybutton text="haz Click" handleClick={handleClick} />
    </div>
  );
};

export default App;
