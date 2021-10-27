/*==========================================
Title:  Bee-Cryptocurrency-Tracker
Date:   25-Oct-2021
==========================================*/
import React, { useState, useEffect } from "react";

//? import Lib
import {
  createTheme,
  ThemeProvider,
  makeStyles,
  CircularProgress,
} from "@material-ui/core";
import axios from "axios";
import { Line } from "react-chartjs-2";

//? import Context
import { CryptoState } from "../../contexts/CryptoContext";

//? import Api
import { HistoricalChart } from "../../config/api/api";
//? import data
import { chartDays } from "../../config/data/data";

import SelectButton from "../customize-ui/SelectButton";

const CoinInfo = (props) => {
  const [historicData, setHistoricData] = useState();
  const [days, setDays] = useState(1);
  const { currency } = CryptoState();

  //TODO: handle API

  useEffect(() => {
    const fetchHistoricData = async () => {
      const { data } = await axios.get(
        HistoricalChart(props.coin.id, days, currency)
      );
      setHistoricData(data.prices);
    };
    fetchHistoricData();
  }, [currency, days, props.coin.id]);

  //TODO: setup DarkThemes & styles

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  const useStyles = makeStyles((theme) => ({
    container: {
      width: "75%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 25,
      // padding: 40,
      [theme.breakpoints.down("md")]: {
        width: "100%",
        marginTop: 0,
        // padding: 20,
        paddingTop: 0,
      },
    },
  }));

  const classes = useStyles();

  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.container}>
        {!historicData ? (
          <CircularProgress
            style={{ color: "#FA983A" }}
            size={250}
            thickness={1}
          />
        ) : (
          <>
            <Line
              data={{
                labels: historicData.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),

                datasets: [
                  {
                    data: historicData.map((coin) => coin[1]),
                    label: `Price ( Past ${days} Days ) in ${currency}`,
                    borderColor: "#FA983A",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            />
            <div
              style={{
                display: "flex",
                marginTop: 20,
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              {chartDays.map((day) => (
                <SelectButton
                  ket={day.value}
                  onClick={() => setDays(day.value)}
                  selected={day.value === days}
                >
                  {day.label}
                </SelectButton>
              ))}
            </div>
          </>
        )}
      </div>
    </ThemeProvider>
  );
};
export default CoinInfo;
