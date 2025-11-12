import React from "react";
import { GameProvider, useGameContext } from "./context/GameContext";
import WelcomeScreen from "./components/WelcomeScreen";
import GameBoard from "./components/GameBoard";
import "./index.css";

function GameView() {
  const { gameState } = useGameContext();
  return gameState === "welcome" ? <WelcomeScreen /> : <GameBoard />;
}

export default function App() {
  return (
    <GameProvider>
      <GameView />
    </GameProvider>
  );
}
