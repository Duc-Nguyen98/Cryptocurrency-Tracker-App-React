/*==========================================
Title:  Bee-Cryptocurrency-Tracker
Date:   24-Oct-2021
==========================================*/
import React from "react";
// ?import lib

import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";

import { useHistory } from "react-router-dom";

//? import Context
import { CryptoState } from "../../contexts/CryptoContext";

const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
  image: {
    width: "20%",
    objectFit: "cover",
    [theme.breakpoints.down("md")]: {
      width: "25%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "35%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "55%",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
  const { currency, setCurrency } = CryptoState();

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            {/* <Typography
              onClick={() => history.push("/")}
              className={classes.title}
            >
              Bee Coins
            </Typography> */}
            <Typography style={{ flexGrow: 1 }}>
              <img
                className={classes.image}
                onClick={() => history.push("/")}
                src="https://beemovies.netlify.app/static/media/logo-text.a13fe42f.png"
                alt="BeeCoins-Logo"
              />
            </Typography>

            {/* <img
              onClick={() => history.push("/")}
              src="https://beemovies.netlify.app/static/media/logo-text.a13fe42f.png"
              alt="BeeCoins-Logo"
            /> */}
            <Select
              variant="outlined"
              style={{ width: 100, height: 40, marginLeft: 15 }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
              <MenuItem value={"VND"}>VND</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
export default Header;
