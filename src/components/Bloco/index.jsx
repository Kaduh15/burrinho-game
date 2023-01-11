import React, { useContext, useEffect, useState } from "react";
import gameContext from "../../context/gameContext";
import styled from "./styles.module.css";

export default function Bloco({
  locBomba = false,
  hasClick = false,
  setHasClick = () => {},
}) {
  const { setPlay, play, incrementePoints } = useContext(gameContext);
  const [acerto, setAcertou] = useState(false);

  useEffect(() => {
    if (play) {
      setAcertou(false);
    }
  }, [play]);

  const acertou = () => {
    if (!play || hasClick) return;
    setHasClick(true);
    incrementePoints();
    setAcertou(true);
  };
  const errou = () => {
    if (!play || hasClick) return;
    setPlay(false);
  };

  return (
    <div
      onClick={locBomba ? errou : acertou}
      className={acerto ? styled.acerto : styled.bloco}
    >
      {locBomba & !play ? "💣💥" : acerto ? "🐎" : ""}
    </div>
  );
}
