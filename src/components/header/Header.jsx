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
import MenuIcon from "@material-ui/icons";

import { useHistory } from "react-router-dom";
import { CryptoState } from "../../contexts/CryptoContext";

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
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
  console.log(`this` + currency);

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => history.push("/")}
              className={classes.title}
            >
              Bee Coins
            </Typography>
            <Select
              variant="outlined"
              style={{ width: 100, height: 40, marginLeft: 15 }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
              <MenuItem value={"VI"}>VI</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
export default Header;
