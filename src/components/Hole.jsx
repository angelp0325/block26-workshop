import React from "react";
import useGame from "../hooks/useGame";
import Mole from "./Mole";

export default function Hole({ id }) {
  const { activeHole } = useGame();

  return <div className="hole">{activeHole === id && <Mole />}</div>;
}
