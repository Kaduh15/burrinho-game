import React, { useContext, useEffect, useState } from "react";
import gameContext from "../../context/gameContext";
import Bloco from "../Bloco";

import styled from "./styles.module.css";

export default function Linha({ blocos = 4, locBomba = -1 }) {
  const { play } = useContext(gameContext);
  const [hasClick, setHasClick] = useState(false);

  useEffect(() => {
    if (play) {
      setHasClick(false);
    }
  }, [play]);

  const bloc = Array(blocos)
    .fill(null)
    .map((_, i) => {
      return (
        <Bloco
          key={`${i}`}
          locBomba={locBomba === i}
          setHasClick={setHasClick}
          hasClick={hasClick}
        />
      );
    });

  return <div className={styled.linha}>{bloc}</div>;
}
