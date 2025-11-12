import React from "react";
import useGame from "../hooks/useGame";

export default function WelcomeScreen() {
  const { startGame } = useGame();

  return (
    <div className="welcome">
      <h1>Whack a Mole</h1>
      <p>Welcome to Whack a Mole!</p>
      <p>Whack a mole to earn points. How many can you get?</p>
      <button onClick={startGame}>Play</button>
      <h2>High Scores</h2>
      <p>None yet... Play the game!</p>
    </div>
  );
}
