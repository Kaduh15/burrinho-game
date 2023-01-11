import { useContext, useEffect, useState } from "react";
import Linha from "./components/linha";
import gameContext from "./context/gameContext";

const numberRandom = (max = 2) => {
  return Math.floor(Math.random() * max);
};

function App() {
  const { play, setPlay, points, linhas, quantBombas } =
    useContext(gameContext);
  const [locBombas, setLocBombas] = useState([]);

  useEffect(() => {
    if (play) {
      setLocBombas([]);
      for (let i = 0; i < linhas; i++) {
        setLocBombas((prev) => [...prev, numberRandom(quantBombas)]);
      }
      return;
    }
  }, [play]);

  return (
    <div>
      <h1>
        Pontos {points} {play ? "🟢" : "🔴"}
      </h1>
      {Array(linhas)
        .fill(null)
        .map((_, i) => {
          return <Linha blocos={quantBombas} locBomba={locBombas[i]} />;
        })}
      <button disabled={play} onClick={() => setPlay(true)}>
        Jogar
      </button>
    </div>
  );
}
export default App;
