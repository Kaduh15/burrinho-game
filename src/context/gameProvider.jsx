import { useEffect, useState } from "react";
import gameContext from "./gameContext";

const GameProvider = ({ children }) => {
  const [play, setPlay] = useState(false);
  const [points, setPoints] = useState(0);
  const linhas = 8;
  const quantBombas = 6;

  useEffect(() => {
    if (play) {
      setPoints(0);
    }

  }, [play]);

  useEffect(() => {
    if (points === linhas) {
      setPlay(false);
    }
  }, [points])

  const obj = {
    play,
    setPlay,
    togglePlay: () => {
      setPlay((prev) => !prev);
    },
    points,
    incrementePoints: () => {
      setPoints((prev) => prev + 1);
    },
    linhas,
    quantBombas,
  };
  return <gameContext.Provider value={obj}>{children}</gameContext.Provider>;
};

export default GameProvider;
