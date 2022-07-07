import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import "./style/reset.scss"

import { BrowserRouter } from "react-router-dom";

import Providers from './providers';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Providers>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Providers>
)
