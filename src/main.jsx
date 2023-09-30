import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Login from './Login/Login.jsx';
import Register from './Register/Register.jsx';
import HeroRegister from './components/Header/HeroRegister/HeroRegister.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path:"/",
        element:<Home/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path:"/register",
        element: <Register/>
      },
      {
        path: "/heroregistration",
        element: <HeroRegister></HeroRegister>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
