import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import { Home } from "./Home"



const Setup = () => {
  return (
    <h3>
      Setup
    </h3>
  );
};

const Play = () => {
  return (
    <>
      <h3>
        Play
      </h3>
      <p>
        Play the game and tap the app!
      </p>
    </>
  );
};


const App = () => {

  const router = createHashRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/",
      element: <Setup />
    },
    {
      path: "/",
      element: <Play />
    }
  ]);


  return (
    <div className="App p-3">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
