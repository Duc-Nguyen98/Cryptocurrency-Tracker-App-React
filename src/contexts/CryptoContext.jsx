/*==========================================
Title:  Bee-Cryptocurrency-Tracker
Date:   24-Oct-2021
==========================================*/
import React, { createContext, useContext, useState, useEffect } from "react";

const Crypto = createContext();

const CryptoContext = (props) => {
  const [currency, setCurrency] = useState("VND");
  const [symbol, setSymbol] = useState("₫");

  useEffect(() => {
    switch (currency) {
      case "USD":
        return setSymbol("$");
      case "VND":
        return setSymbol("₫");
      default:
        setSymbol("₹");
        return;
    }
  }, [currency]);

  return (
    <Crypto.Provider value={{ currency, symbol, setCurrency }}>
      {props.children}
    </Crypto.Provider>
  );
};
export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};
