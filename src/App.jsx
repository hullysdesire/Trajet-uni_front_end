
import React from 'react'
import "./App.css"
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import RegisterDriver from './PageConducteur/registerDriver';



function App() {
  return (
   const router = createBrowserRouter([
    {
        path: ' ./registerDriver',
        element: <RegisterDriver/>
    }
   ])
  );
};

export default App