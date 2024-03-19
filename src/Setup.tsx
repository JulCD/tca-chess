import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TransformStreamDefaultController } from "stream/web";
import { ChessPlayer } from "./GameResults";

interface SetupProps {
    setTitle: (title: string) => void;
    previousPlayers: string[];
    setChosenPlayers: (players: ChessPlayer[]) => void;
};

export const Setup: FC<SetupProps> = ({ setTitle, previousPlayers, setChosenPlayers }) => {

    console.log(previousPlayers)

    const [availablePlayers, setAvailablePlayers] = useState(previousPlayers.map(x => ({
        name: x
        , checked: false
    })));

    useEffect(
        () => setTitle("Game Setup")
        , []
    );
    //Hooks and state at the top 

    const nav = useNavigate();

    return (
        <div
            className='flex flex-col gap-3'
        >
            <button
                className="btn btn-lg btn-primary"
                onClick={
                    () => {
                        setChosenPlayers(
                        availablePlayers.filter(x => x.checked).map(x => ({
                            name: x.name
                            , color: "white"
                        }))
                        );
                        nav('/play')
                    }   
                }   
                disabled={availablePlayers.filter(x => x.checked).length < 2}
            >
                Start the Game
            </button>

            <div
                className='card bg-base-100 shadow-xl'
            >
                <div
                    className='card-body p-3'
                >
                    {
                        availablePlayers.map(x => (
                            <div 
                                className="form-control"
                                key={x.name}
                            >
                                <label 
                                    className="cursor-pointer flex"
                                >
                                    <input 
                                        type="checkbox" 
                                        className="checkbox checkbox-success"
                                        checked={x.checked}
                                        onChange={() => setAvailablePlayers([
                                            ...availablePlayers.map(y => ({
                                                name: y.name
                                                , checked: y.name === x.name
                                                    ? !y.checked
                                                    : y.checked
                                            }))
                                        ])} 
                                    />
                                    <span 
                                        className="label-text ml-3"
                                    >
                                        {x.name}
                                    </span>
                                </label>
                            </div>



                        ))
                    }
                </div>

            </div>
        </div>
    );
};