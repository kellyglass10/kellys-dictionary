import "./App.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
      </div>
      <footer>
        Coded by{" "}
        <a
          href="https://kelly-glass-portfolio.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <strong>Kelly Glass</strong>
        </a>
        . Open-sourced on{" "}
        <a
          href="https://github.com/kellyglass10"
          target="_blank"
          rel="noreferrer"
        >
          <strong>Github</strong>
        </a>{" "}
        and hosted on{" "}
        <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">
          <strong>Netlify</strong>
        </a>
      </footer>
    </div>
  );
}
