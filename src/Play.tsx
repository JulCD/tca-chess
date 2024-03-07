import { useNavigate, useSearchParams } from "react-router-dom";
import { GameResult } from "./GameResults";
import { FC, useEffect, useState } from "react";


interface PlayProps {
  addNewGameResult: (result: GameResult) => void;
  setTitle: (t: string) => void;
}

export const Play: FC<PlayProps> = ({ addNewGameResult, setTitle }) => {

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
        <button 
            className="btn btn-lg btn-primary"
            onClick={() => {
              addNewGameResult({
                winner: "Tom"
                , players: [
                  { name: "Tom", color: "white" }
                  , {name: "Taylor", color: "black"} 
                ]
                , start: startState
                , end: new Date().toISOString()
              });
              nav(-2); 
            }}
        >
            Done!
        </button>
        <p
          className="text-xs"
        >
          Play the game and tap the app!
        </p>
      </div>
    );
};