import logo from "../logo.svg";
import logo192 from "../assets/logo192.png";

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

const descriptions = reactDescriptions[genRandomInt(2)];

function Header() {
  return (
    <header>
      {/* <img src="logo192.png" className="App-logo" alt="React logo" /> */}
      <img src={logo192} className="App-logo" alt="React logo" />

      <div>
        <h1>React.js</h1>
        <p>i.e., using the React library for rendering the UI</p>
        <p>
          {descriptions} React concepts you will need for almost any app you are
          going to build
        </p>
      </div>
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  );
}

export default Header;
