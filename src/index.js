import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter } from "react-router-dom";
import WatchCard from './components/WatchCard';
import Body from './components/Body';
import MainContainer from './components/MainContainer';
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/watch",
        element: <WatchCard />,
      },
      {
        path: "/",
        element: <MainContainer />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App/>
  </React.StrictMode>
);


