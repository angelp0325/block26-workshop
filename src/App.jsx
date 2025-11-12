import React from "react";
import { GameProvider } from "./context/GameContext";
import useGame from "./hooks/useGame";
import WelcomeScreen from "./components/WelcomeScreen";
import GameBoard from "./components/GameBoard";
import "./index.css";

function GameView() {
  const { gameState } = useGame();
  return gameState === "welcome" ? <WelcomeScreen /> : <GameBoard />;
}

export default function App() {
  return (
    <GameProvider>
      <GameView />
    </GameProvider>
  );
}
