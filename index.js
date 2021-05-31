import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Square from "./square";
import "./App.css";
const Main = () => {
  const initialstate = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const [square, updatesquare] = useState(initialstate);
  const [isxchance, updatexchance] = useState(false);
  const Handleclick = (index) => {
    console.log("index value is" + index);
    let string = Array.from(square);
    string[index] = isxchance ? "X" : "o";
    updatesquare(string);
    updatexchance(!isxchance);
  };
  useEffect(() => {
    const winner = Checkwinner();
    if (winner) {
      alert(`Player ${winner}  has Won the Game `);
      updatesquare(initialstate);
    }
  }, [square]);

  const Checkwinner = () => {
    const posibilities = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < posibilities.length; i++) {
      const [a, b, c] = posibilities[i];
      if (square[a] && square[a] === square[b] && square[a] === square[c]) {
        return square[a];
      }
    }
  };
  return (
    <div>
      <div className="title">
        <h1>REACT TIC-TAC-TOE-APP</h1>
      </div>
      <br />
      <div className="head">
        <div className="flex-container">
          <div>
            <Square state={square[0]} click={() => Handleclick(0)} />
          </div>
          <div>
            <Square state={square[1]} click={() => Handleclick(1)} />
          </div>
          <div>
            <Square state={square[2]} click={() => Handleclick(2)} />
          </div>
        </div>
        <div className="flex-container">
          <div>
            <Square state={square[3]} click={() => Handleclick(3)} />
          </div>
          <div>
            <Square state={square[4]} click={() => Handleclick(4)} />
          </div>
          <div>
            <Square state={square[5]} click={() => Handleclick(5)} />
          </div>
        </div>
        <div className="flex-container">
          <div>
            <Square state={square[6]} click={() => Handleclick(6)} />
          </div>
          <div>
            <Square state={square[7]} click={() => Handleclick(7)} />
          </div>
          <div>
            <Square state={square[8]} click={() => Handleclick(8)} />
          </div>
        </div>
        <button className="button" onClick={() => updatesquare(initialstate)}>
          RESET
        </button>
      </div>
    </div>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
