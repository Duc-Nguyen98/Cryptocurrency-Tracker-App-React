/*==========================================
Title:  Bee-Cryptocurrency-Tracker
Date:   25-Oct-2021
==========================================*/
import React, { useState, useEffect } from "react";

//? import Lib
import { makeStyles } from "@material-ui/core";
import axios from "axios";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";

//? import context
import { CryptoState } from "../../contexts/CryptoContext";

//? import Api
import { TrendingCoins } from "../../config/api/api";

const useStyles = makeStyles((themes) => ({
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
  carouselItem:{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      cursor:"pointer",
      textTransform: "uppercase",
      color:"#fff"
  }
}));

export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const Carousel = () => {
  const [trending, setTrending] = useState([]);
  const classes = useStyles();
  const { currency, symbol } = CryptoState();

  //TODO: Setup API

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));
    setTrending(data);
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);

  //TODO: Setup AliceCarousel

  const items = trending.map((item) => {
    let profit = item.price_change_percentage_24h >= 0;
    return (
      <Link className={classes.carouselItem} to={`/coins/${item.id}`}>
        <img
          src={item?.image}
          alt={item.name}
          height="80"
          style={{ marginBottom: 10 }}
        />
        <span>
          {item?.symbol}
          &nbsp;
          <span style={{
              color:profit > 0? "rgb(14,203,129)" : "red"
          }}>
            {profit && "+"} {item?.price_change_percentage_24h ? item?.price_change_percentage_24h?.toFixed(2) : 0}%
          </span>
        </span>

        <span style={{ fontSize: 22, fontWeight: 500 }}>
          {symbol} {numberWithCommas(item?.current_price.toFixed(2))}
        </span>
      </Link>
    );
  });

  console.log(trending);

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  return (
    <div className={classes.carousel}>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        autoplay
        items={items}
      />
    </div>
  );
};
export default Carousel;
