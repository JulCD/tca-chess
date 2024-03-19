import { useNavigate, useSearchParams } from "react-router-dom";
import { ChessPlayer, GameResult } from "./GameResults";
import { FC, useEffect, useState } from "react";


interface PlayProps {
  addNewGameResult: (result: GameResult) => void;
  setTitle: (t: string) => void;
  chosenPlayers: ChessPlayer[];
}

export const Play: FC<PlayProps> = ({ addNewGameResult, setTitle, chosenPlayers }) => {

  const [startState, setStart] = useState(new Date().toISOString())

  useEffect(
    () => setTitle("Play Chess")
    , []
  );


    const nav = useNavigate();

    return (
      <div
        className="flex flex-col gap-3"
      >
        {
          chosenPlayers.map(x => (
            <button 
            key = {x.name}
            className="btn btn-lg btn-primary"
            onClick={() => {
              addNewGameResult({
                winner: x.name
                , players: chosenPlayers
                , start: startState
                , end: new Date().toISOString()
              });
              nav(-2); 
            }}
        >
            {x.name} Won
        </button>
          ))
        }
        <p
          className="text-xs"
        >
          Play the game and tap the app!
        </p>
      </div>
    );
};