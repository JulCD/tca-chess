import { useNavigate, useSearchParams } from "react-router-dom";
import { ChessPlayer, GameResult } from "./GameResults";
import { FC, useEffect, useState } from "react";


interface PlayProps {
  addNewGameResult: (result: GameResult) => void;
  setTitle: (t: string) => void;
  chosenPlayers: ChessPlayer[];
}

export const Play: FC<PlayProps> = ({ addNewGameResult, setTitle, chosenPlayers }) => {

  const [startState, setStart] = useState(new Date().toISOString());

  const [whitePiecePlayer, setWhitePiecePlayer] = useState("");


  useEffect(
    () => setTitle("Play Chess")
    , []
  );


  const nav = useNavigate();

  const gameOver = (winner: string) => {
    addNewGameResult({
      winner: winner
      , players: chosenPlayers.map(x => ({name: x.name, color: x.name === whitePiecePlayer ? "white" : "black"}))
      , start: startState
      , end: new Date().toISOString()
    });
    nav(-2);
  }

  return (
    <div
      className="flex flex-col gap-3"
    >
      {
        chosenPlayers.map(x => (



          <div
            key={x.name}
            className="card bg-base-100 shadow-xl"
          >
            <div
              className="card-body p-3"
            >
              <h2
                className="card-title"
              >
                {x.name}
              </h2>

              <label
                className="cursor-pointer flex"
              >
                <input
                  type="checkbox"
                  className="checkbox checkbox-success checkbox-lg"
                  checked={x.name === whitePiecePlayer}
                  onChange={() => setWhitePiecePlayer(x.name)}
                />
                <span
                  className="label-text ml-3 text-lg"
                >
                  White Pieces
                </span>
              </label>

              <button
                key={x.name}
                className="btn btn-outline btn-primary"
                onClick={() => gameOver(x.name)}
              >
                {x.name} Won
              </button>
            </div>
          </div>
        ))
      }
    </div>
  );
};