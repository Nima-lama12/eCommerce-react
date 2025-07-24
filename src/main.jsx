import React, { StrictMode } from "react";
import './index.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import router from "./App.jsx"
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>
);
