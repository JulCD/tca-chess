import { useNavigate } from "react-router-dom";
import { GameResult } from "./GameResults";
import { FC, useEffect } from "react";


interface PlayProps {
  addNewGameResult: (result: GameResult) => void;
  setTitle: (t: string) => void;
}

export const Play: FC<PlayProps> = ({ addNewGameResult, setTitle }) => {

  useEffect(
    () => setTitle("Play Chess")
    , []
  );


    const nav = useNavigate();

    return (
      <>
        <h3>
          Play
        </h3>
        <p>
          Play the game and tap the app!
        </p>
        <button 
            className="btn btn-outline btn-primary"
            onClick={() => {
              addNewGameResult({
                winner: "Tom"
                , players: [
                  "Tom"
                  , "Taylor"
                ]
              });
              nav(-2); 
            }}
        >
            Done!
        </button>
      </>
    );
};