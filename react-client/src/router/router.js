import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Main from "../component/Main";

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Main />,
      children: [
        {
          // path: "team",
          // element: <Team />,
          // loader: teamLoader,
        },
      ],
    },
  ]
)