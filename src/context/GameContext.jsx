import React, { createContext, useState, useContext } from "react";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [activeHole, setActiveHole] = useState(Math.floor(Math.random() * 9));
  const [gameState, setGameState] = useState("welcome"); // "welcome" | "playing"
  const [holes] = useState(Array.from({ length: 9 }, (_, i) => i));

  const startGame = () => {
    setScore(0);
    setActiveHole(Math.floor(Math.random() * 9));
    setGameState("playing");
  };

  const restartGame = () => {
    setGameState("welcome");
