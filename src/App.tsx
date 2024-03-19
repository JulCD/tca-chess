import React, { useState } from 'react';
import './App.css';

import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import { Home, AppTitle } from "./Home"
import { Setup } from "./Setup"
import { Play } from "./Play"
import { GameResult, getLeaderboard, getGeneralFacts, getPreviousPlayers } from './GameResults';


const dummyGameResults: GameResult[] = [
  {
      winner: "Tom"
      , players: [
          { name: "Tom", color: "black"}
          , { name: "Julia", color: "white"}
      ]
      , start: "2024-02-28T18:10:32.123Z"
      , end: "2024-02-28T18:15:34.123Z"
  }
  , {
      winner: "John"
      , players: [
        { name: "John", color: "black"}
        , { name: "Julia", color: "white"}
      ]
      , start: "2024-02-28T18:20:32.123Z"
      , end: "2024-02-28T18:47:34.123Z"
  }
];

const App = () => {
  //uncomment line to run without dummy game results
  //const [gameResults, setGameResults] = useState<GameResult[]>([]);

  const [gameResults, setGameResults] = useState<GameResult[]>(dummyGameResults);

  const [title, setTitle] = useState(AppTitle);

  const addNewGameResult = (result: GameResult) => setGameResults(
    [
      ...gameResults
      , result
    ]
  );

  const router = createHashRouter([
    {
      path: "/",
      element: <Home
        leaderboardData={getLeaderboard(gameResults)}
        generalFacts={getGeneralFacts(gameResults)}
        setTitle={setTitle}
      />
    },
    {
      path: "/setup",
      element: <Setup 
        setTitle={setTitle}
        previousPlayers = {getPreviousPlayers(gameResults)}
      />
    },
    {
      path: "/play",
      element: <Play
        addNewGameResult={addNewGameResult}
        setTitle={setTitle}
      />
    }
  ]);


  return (
    <div className="App">
      <div className='navbar bg-base-300'>
        {
          title === AppTitle &&
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
        </svg>        
        }
        <span className='text-lg font-bold ml-3'>
          { title }
        </span>
      </div>
      <div className='p-3'>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
