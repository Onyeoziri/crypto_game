/* eslint-disable react/prop-types */
export default function NFTMint_Tic({ attempts, wins, draws, losses, gameOver }) {
  if (gameOver && wins >= 2 && (attempts === 3 || attempts === 2)) {
    return (
      <div>
        <h1>Congratulations!</h1>
        <p>Best 2/3</p>
        <button onClick={() => {}}>Mint</button>
      </div>
    );
  }

  if (gameOver && ((attempts === 3 && losses === 2) || losses === 5)) {
    return (
      <div>
        <h1>Stop!</h1>
        <p>I pity you, so here you go</p>
        <button>Mint</button>
      </div>
    );
  }

  if (gameOver && attempts >= 3 && draws === 3) {
    return (
      <div>
        <h1>AAhhhh!</h1>
        <p>Yay for effort?</p>
        <button>Mint</button>
      </div>
    );
  }

  if (gameOver && attempts === 10) {
    return (
      <div>
        <h1>Please Stop!</h1>
        <p>PLAY SOMETHING ELSE</p>
        <button>Mint</button>
      </div>
    );
  }

  return null;
}
