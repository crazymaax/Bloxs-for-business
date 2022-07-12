import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import "./style/reset.scss"

import { BrowserRouter } from "react-router-dom";

import Providers from './providers';

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Providers>
    <BrowserRouter>
      <React.StrictMode>
        <ToastContainer
          position="top-right"
          autoClose={1600}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
        />
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Providers>
)
