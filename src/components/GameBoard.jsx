import React from "react";
import useGame from "../hooks/useGame";
import Hole from "./Hole";

export default function GameBoard() {
  const { score, holes, restartGame } = useGame();

  return (
    <div className="game">
      <h1>Whack a Mole</h1>
      <div className="game-info">
        <span>Score: {score}</span>
        <button onClick={restartGame}>Restart</button>
      </div>
      <div className="holes">
        {holes.map((id) => (
          <Hole key={id} id={id} />
        ))}
      </div>
    </div>
  );
}
