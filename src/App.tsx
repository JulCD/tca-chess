import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import { Home, AppTitle } from "./Home"
import { Setup } from "./Setup"
import { Play } from "./Play"
import { GameResult, getLeaderboard } from './GameResults';


const dummyGameResults: GameResult[] = [
  {
    winner: "Tom"
    , players: [
      "Tom"
      , "Batu"
      , "Julia"
      , "Melisa"
      , "John"
    ]
  }
  , {
    winner: "John"
    , players: [
      "Batu"
      , "Julia"
      , "Melisa"
      , "John"
    ]
  }
  , {
    winner: "John"
    , players: [
      "Tom"
      , "Batu"
      , "Julia"
      , "Melisa"
      , "John"
    ]
  }
  , {
    winner: "Harry"
    , players: [
      "Harry"
      , "hermione"
      , "Ron"
    ]
  }
];

const App = () => {

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
        setTitle={setTitle}
      />
    },
    {
      path: "/setup",
      element: <Setup 
        setTitle={setTitle}
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
