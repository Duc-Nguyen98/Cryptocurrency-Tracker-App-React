/*==========================================
Title:  Bee-Cryptocurrency-Tracker
Date:   24-Oct-2021
==========================================*/
import React, { useState, useEffect } from "react";

//? import context
import { CryptoState } from "../../contexts/CryptoContext";

//? import Api
import { SingleCoin } from "../../config/api/api";

//?import Lib
import axios from "axios";
import { useParams } from "react-router-dom";
import { makeStyles, Typography, LinearProgress } from "@material-ui/core";
import ReactHtmlParser from "react-html-parser";

//? import components
import CoinInfo from "../../components/coin-info/CoinInfo";
import { numberWithCommas } from "../../components/carousel/Carousel";

//TODO: setup styles

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  sidebar: {
    width: "30%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 25,
    borderRight: "2px solid grey",
  },
  heading: {
    fontWeight: "bold",
    marginBottom: 20,
    fontFamily: "Montserrat",
  },
  description: {
    width: "100%",
    fontFamily: "Montserrat",
    padding: 25,
    paddingBottom: 15,
    paddingTop: 0,
    textAlign: "center",
  },
  marketData: {
    alignSelf: "start",
    padding: 25,
    paddingTop: 10,
    width: "100%",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "space-around",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
    [theme.breakpoints.down("xs")]: {
      alignItems: "start",
    },
  },
}));

const CoinPage = () => {
  //TODO: setup state & others
  const classes = useStyles();
  const { id } = useParams();
  const { currency, symbol } = CryptoState();
  const [coin, setCoin] = useState(null);

  //TODO: handle API
  useEffect(() => {
    const fetchCoins = async () => {
      const { data } = await axios.get(SingleCoin(id));
      setCoin(data);
    };
    fetchCoins();
  }, [id]);

  if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;
  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height={200}
          style={{ marginBottom: 20 }}
        />
        <Typography className={classes.heading} variant="h3">
          {coin?.name}
        </Typography>
        <Typography className={classes.description} variant="subtitle1">
          {ReactHtmlParser(coin?.description.en.split(". ")[0])}.
        </Typography>
        <div className={classes.marketData}>
          <span style={{ display: "flex" }}>
            <Typography className={classes.heading} variant="h5">
              Rank:
            </Typography>
            &nbsp; &nbsp;
            <Typography variant="h5" style={{ fontFamily: "Montserrat" }}>
              {coin?.market_cap_rank}
            </Typography>
          </span>
          <span style={{ display: "flex" }}>
            <Typography className={classes.heading} variant="h5">
              Current Price:
            </Typography>
            &nbsp; &nbsp;
            <Typography variant="h5" style={{ fontFamily: "Montserrat" }}>
              {numberWithCommas(
                coin?.market_data.current_price[currency.toLowerCase()]
              )}{" "}
              {symbol}
            </Typography>
          </span>
          <span style={{ display: "flex" }}>
            <Typography variant="h5" className={classes.heading}>
              Market Cap:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {numberWithCommas(
                coin?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )}
              M {symbol}
            </Typography>
          </span>
        </div>
      </div>
      {/* chart */}
      <CoinInfo coin={coin} />
    </div>
  );
};
export default CoinPage;
