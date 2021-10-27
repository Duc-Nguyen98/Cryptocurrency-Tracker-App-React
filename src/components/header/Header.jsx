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

//? import logo
import Logo from "../../assets/beecoins.png";

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
    [theme.breakpoints.down("md")]: {
      width: "15%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "35%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "75%",
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
            <Typography style={{ flexGrow: 1 }}>
              <img
                className={classes.image}
                onClick={() => history.push("/")}
                src={Logo}
                alt="BeeCoins-Logo"
              />
            </Typography>
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
