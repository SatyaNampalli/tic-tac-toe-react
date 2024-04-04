import React, { useState } from "react";
import Cross from "./Cross";
import "./container.css";

const Container = () => {
  const x = "X";
  const o = "O";
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [nextplayer, setNextPlayer] = useState(x);

  function addSquare(num) {
    if (squares[num] == null) {
      isWinner();
      const squareNew = [...squares];
      if (nextplayer == x) {
        squareNew[num] = x;
        console.log(num + " " + nextplayer);
        setNextPlayer(o);
      } else {
        squareNew[num] = o;
        console.log(num + " " + nextplayer);
        setNextPlayer(x);
      }
      setSquares(squareNew);
    }
  }
  isWinner();
  function restart() {
    setSquares(Array(9).fill(null));
    document.querySelector(".player-info").innerHTML =
      "<h1>Player : " + nextplayer + "</h1>";
  }
  function isWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (var i = 0; i < lines.length; ++i) {
      var [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        if (squares[a] == x) {
          document.querySelector(".player-info").innerHTML =
            "<h1>Winner : X</h1>";
        } else {
          document.querySelector(".player-info").innerHTML =
            "<h1>Winner : 0</h1>";
        }
      }
    }

    var count = 0;
    for (var i = 0; i < squares.length; ++i) {
      if (squares[i] != null) {
        ++count;
      }
    }
    if (count == 9) {
      document.querySelector(".player-info").innerHTML = "<h1>Tie</h1>";
    }

    return false;
  }

  return (
    <>
      <div className="player-tray">
        <div className="player-info">
          <h1>Player : {nextplayer}</h1>
        </div>
        <button onClick={restart} className="button-reset">
          Restart
        </button>
      </div>

      <div className="container">
        <div className="container-one">
          <Cross click={() => addSquare(0)} val={squares[0]} />
          <Cross click={() => addSquare(1)} val={squares[1]} />
          <Cross click={() => addSquare(2)} val={squares[2]} />
        </div>
        <div className="container-one">
          <Cross click={() => addSquare(3)} val={squares[3]} />
          <Cross click={() => addSquare(4)} val={squares[4]} />
          <Cross click={() => addSquare(5)} val={squares[5]} />
        </div>
        <div className="container-one">
          <Cross click={() => addSquare(6)} val={squares[6]} />
          <Cross click={() => addSquare(7)} val={squares[7]} />
          <Cross click={() => addSquare(8)} val={squares[8]} />
        </div>
      </div>
    </>
  );
};

export default Container;
