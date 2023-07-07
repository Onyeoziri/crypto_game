import { useState, useEffect, useRef } from "react";
import "./ticTacToe.scss";

export default function TicTacToe() {
  const [cells, setCells] = useState(Array(9).fill("")); //total number of cells
  const [isPlayerTurn, setIsPlayerTurn] = useState(true); //if true then x turn

  const [attempts, setAttempts] = useState(0);
  const [wins, setWins] = useState(0);
  const [draws, setDraws] = useState(0);
  const [losses, setLosses] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const WIN_CONDITION = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  useEffect(() => {
    WIN_CONDITION.forEach((element) => {
      const [x, y, z] = element;

      const value1 = cells[x];
      const value2 = cells[y];
      const value3 = cells[z];

      if (value1 && value2 === value3 && value2 && value3 === value1) {
        console.log("You've Won");
        if (value1 && value2 && value3 === "x") {
          setWins((prevState) => prevState + 0.5);
        } else if (value1 === "o") {
          setLosses((prevState) => prevState + 0.5);
        }
        setGameOver(true);
        if (gameOver) {
          setIsPlayerTurn(true);
        }
        console.log("reseting game");
      }
    });

    // Check for a draw
    if (cells.every((cell) => cell !== "") && !gameOver) {
      console.log("It's a Draw");
      setDraws((prevState) => prevState + 1);
      setGameOver(true);
    }
  }, [cells, gameOver]);

  function ResetGame() {
    setCells(Array(9).fill(""));
    setGameOver(!gameOver);
  }

  console.log(cells);
  return (
    <div className="ticTacToe">
      <h1>TicTacToe</h1>
      <div className="game-area">
        <div className="game-board">
          {cells.map((cell, index) => (
            <Cell
              key={index}
              id={index}
              cell={cell}
              array={cells}
              setCell={setCells}
              isPlayerTurn={isPlayerTurn}
              setIsPlayerTurn={setIsPlayerTurn}
              attempts={attempts}
              setAttempts={setAttempts}
              gameOver={gameOver}
              ResetGame={ResetGame}
            />
          ))}{" "}
        </div>
        <button className="g-reset" onClick={ResetGame}>
          reset
        </button>
      </div>

      <div className="game-info">
        <ul>
          <li>
            <h3>Attempst: {attempts}</h3>
          </li>
          <li>
            <h3>Wins: {wins}</h3>
          </li>
          <li>
            <h3>Losses: {losses}</h3>
          </li>
          <li>
            <h3>Draws: {draws}</h3>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Cell(props) {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!isFirstRender.current && !props.isPlayerTurn) {
      // Computer's turn with a 8-second delay
      const timer = setTimeout(() => {
        props.setCell((prevState) => {
          const newCells = [...prevState];
          const emptyCells = newCells.reduce((acc, cell, index) => {
            if (cell === "") {
              acc.push(index);
            }
            return acc;
          }, []);
          const randomIndex = Math.floor(Math.random() * emptyCells.length);
          const randomCell = emptyCells[randomIndex];
          newCells[randomCell] = "o";
          console.log("New Cells", newCells);
          return newCells;
        });

        props.setIsPlayerTurn(true);
      }, 300); // 8-second delay

      return () => {
        clearTimeout(timer);
      };
    }

    isFirstRender.current = false;
  }, [props.isPlayerTurn]);
  const handleClick = (e) => {
    if (props.cell !== "x" && props.cell !== "o") {
      if (props.isPlayerTurn === true) {
        props.setCell((prevState) => {
          const newCells = [...prevState];
          newCells[props.id] = "x";
          console.log("New Cells", newCells);
          return newCells;
        });
      }

      //increment attempt veriables counter
      if (props.array.every((cell) => cell === "")) {
        props.setAttempts((prevState) => prevState + 1);
      }

      props.setIsPlayerTurn(!props.isPlayerTurn);
    }

    console.log(e.target);
  };

  return (
    <div
      className={`cell ${props.cell}`}
      id={props.id}
      onClick={props.gameOver ? props.ResetGame : handleClick}
    >
      {props.cell}
    </div>
  );
}
