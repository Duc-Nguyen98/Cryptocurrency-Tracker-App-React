/*==========================================
Title:  Bee-Cryptocurrency-Tracker
Date:   24-Oct-2021
==========================================*/
import React from "react";

// ?import lib
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

// ? import components
import Header from "./components/header/Header";

// ? import pages
import HomePage from "./pages/home-page/HomePage";
import CoinPage from "./pages/coin-page/CoinPage";



const App = () => {
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#14161a",
      color: "#fff",
      minHeight:'100vh'
    }
  }));

  const classes = useStyles();

  return (
    <Router>
      <div className={classes.App}>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/coins/:id">
            <CoinPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;
