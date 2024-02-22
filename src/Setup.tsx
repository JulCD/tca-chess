import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface SetupProps {
    setTitle: (t: string) => void;
};

export const Setup: FC<SetupProps> = ({ setTitle }) => {
    
    useEffect(
        () => setTitle("Game Setup")
        , []
    );
      //Hooks and state at the top 

    const nav = useNavigate();
    
    return (
        <>
            <h3>
                Setup
            </h3>
            <button 
                className="btn btn-link"
                onClick={() => nav('/play')}
            >
                Start the Game
            </button>
        </>
    );
};