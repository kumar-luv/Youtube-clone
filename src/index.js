import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter } from "react-router-dom";
import WatchCard from './components/WatchCard';
import Body from './components/Body';
import MainContainer from './components/MainContainer';
import Search from './components/Search';
import Error from './components/Error';
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
      {
        path: "/search",
        element:<Search/>
      }
    ],
    errorElement: <Error/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App/>
  </React.StrictMode>
);


