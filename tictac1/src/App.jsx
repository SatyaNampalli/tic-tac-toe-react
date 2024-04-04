import { useState } from "react";
import "./App.css";
import Container from "./Container";

function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  return (
    <div className="App">
      <h1>Let us play Tic Tac Toe</h1>
      <Container />
    </div>
  );
}

export default App;
