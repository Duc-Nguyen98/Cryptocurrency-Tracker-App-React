/*==========================================
Title:  Bee-Cryptocurrency-Tracker
Date:   24-Oct-2021
==========================================*/
import React from "react";
import styled from "./App.module.css";

// ?import lib
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// ? import components
import Header from "./components/header/Header";

// ? import pages
import HomePage from "./pages/home-page/HomePage";
import CoinPage from "./pages/coin-page/CoinPage";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/coins/:id">
          <CoinPage />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
