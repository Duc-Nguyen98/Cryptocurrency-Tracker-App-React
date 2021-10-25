import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import 'react-alice-carousel/lib/alice-carousel.css';

//? import contexts
import CryptoContext from "./contexts/CryptoContext";

ReactDOM.render(
  <React.StrictMode>
    <CryptoContext>
      <App />
    </CryptoContext>
  </React.StrictMode>,
  document.getElementById("root")
);
