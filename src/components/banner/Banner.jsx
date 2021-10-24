/*==========================================
Title:  Bee-Cryptocurrency-Tracker
Date:   24-Oct-2021
==========================================*/
import React from "react";

//? import Lib
import { Container, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  banner: {
    backgroundImage: "url('./assets/banner.jpg')",
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  tagline:{
    display: "flex",
    height:"40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign:"center"
  }
}));

const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            Bee Coins
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Get All The Info Regarding Your Favorite Crypto Currency
          </Typography>
        </div>
      </Container>
    </div>
  );
};
export default Banner;
