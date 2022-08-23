import logo from './logo.svg';
import './App.css';
import MiPrimerComponente from './component/MiPrimerComponente';
import NavBar from './component/NavBar/Navbar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <p>
          Under Club <code>src/App.js</code> Gonzalez Zoe
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
