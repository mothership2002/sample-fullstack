import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Main from "../component/Main";
import LoginForm from "../component/LoginForm";
import { Board } from "../component/Board";

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Main />,
    },
    {
      path: 'login',
      element: <LoginForm />
    },
    {
      path: 'post-board',
      element: <Board />
    },
    
  ]
)