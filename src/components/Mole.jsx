import React from "react";
import useGame from "../hooks/useGame";

export default function Mole() {
  const { whackMole } = useGame();
  return <div className="mole" onClick={whackMole}></div>;
}
