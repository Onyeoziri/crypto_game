import { Link } from "react-router-dom";
import tac from "../../assets/thumbnails/tictactoe.png";
import test2 from "../../assets/thumbnails/test2.webp";
import "./home.scss";

export default function home() {
  return (
    <>
      <h1>Games</h1>
      <div className="g-selection">
        <Link to="/games/TicTacToe">
          <div className="card">
            <img src={tac} alt="CardImage" />
            <div className="card-content">
              <h3>Tic-Tac-Toe</h3>
              <p>Just a simple Game</p>
            </div>
          </div>
        </Link>

        <Link to="/test">
          <div className="card">
            <img src={test2} alt="CardImage" />
            <div className="card-content">
              <h3>Just a Test</h3>
              <p>JTest Thumbnail</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
