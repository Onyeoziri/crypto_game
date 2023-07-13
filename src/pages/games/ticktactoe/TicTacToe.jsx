import { useState, useEffect, useRef } from "react";
import { useAtomValue } from "jotai";
import { isLoginAtom } from "../../../context/AtomGlobalVariables";
import NFTMint_Tic from "./NFTmint_Tic";
import "./ticTacToe.scss";

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const isFirstRender = useRef(true);
  const [attempts, setAttempts] = useState(0);
  const [wins, setWins] = useState(0);
  const [draws, setDraws] = useState(0);
  const [losses, setLosses] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const isLogin = useAtomValue(isLoginAtom);

  useEffect(() => {
    if (currentPlayer === "O" && !gameOver) {
      makeComputerMove();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPlayer, gameOver]);

  const makeComputerMove = () => {
    const availableMoves = board.reduce((acc, cell, index) => {
      if (!cell) {
        acc.push(index);
      }
      return acc;
    }, []);

    const randomIndex = Math.floor(Math.random() * availableMoves.length);
    const computerMove = availableMoves[randomIndex];

    handleMove(computerMove);
  };

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleMove = (index) => {
    if (board[index] || gameOver) {
      return;
    }

    const updatedBoard = [...board];
    updatedBoard[index] = currentPlayer;
    setBoard(updatedBoard);

    if (isFirstRender.current) {
      isFirstRender.current = false;
      setAttempts(attempts + 1);
    } else {
      // Check for a winner
      if (checkWinner(updatedBoard)) {
        setWinner(currentPlayer);
        setGameOver(true);
        return;
      }

      //Check for a Draw
      if (updatedBoard.every((cell) => cell !== "")) {
        setDraws(draws + 1);
        setWinner("No One!");
        setGameOver(true);
      }
    }
    // Switch the current player
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const checkWinner = (currentBoard) => {
    for (let combination of winningCombinations) {
      const [x, y, z] = combination;
      if (
        currentBoard[x] &&
        currentBoard[y] === currentBoard[z] &&
        currentBoard[y] &&
        currentBoard[z] === currentBoard[x]
      ) {
        if (currentBoard[x] && currentBoard[y] && currentBoard[z] === "X") {
          setWins(wins + 1);
          return true;
        } else if (currentBoard[x] && currentBoard[y] && currentBoard[z] === "O") {
          setLosses(losses + 1);
          return true;
        }
      }
    }

    return false;
  };

  function resetGame() {
    setBoard(Array(9).fill(""));
    setGameOver(false);
    setWinner(null);
    isFirstRender.current = true;
  }

  return (
    <div className="ticTacToe">
      <h1>TicTacToe</h1>
      <div className="game-area">
        <div className="game-board">
          {board.map((cell, index) => (
            <div className={`cell ${cell}`} key={index} onClick={() => handleMove(index)}>
              {cell}
            </div>
          ))}
        </div>

        <div className="status">
          <p>{gameOver ? `Winner: ${winner}` : "You are Player: X"}</p>
        </div>

        <button className="g-reset" onClick={resetGame}>
          reset
        </button>
      </div>

      <div className="game-info">
        <h1>STATS</h1>
        <ul>
          <li>
            <h3>Attempts: {attempts}</h3>
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
      {isLogin && (
        <NFTMint_Tic
          attempts={attempts}
          wins={wins}
          losses={losses}
          draws={draws}
          gameOver={gameOver}
        />
      )}
    </div>
  );
}
