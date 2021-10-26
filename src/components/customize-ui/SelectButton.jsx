/*==========================================
Title:  Bee-Cryptocurrency-Tracker
Date:   26-Oct-2021
==========================================*/
import React from "react";
//? import Lib
import { makeStyles } from "@material-ui/core";

const SelectButton = (props) => {
  const useStyles = makeStyles(() => ({
    selectButton: {
      border: "1px solid gold",
      borderRadius: 5,
      padding: 10,
      paddingLeft: 20,
      paddingRight: 20,
      fontFamily: "Montserrat",
      cursor: "pointer",
      backgroundColor: props.selected ? "gold" : "",
      color: props.selected ? "black" : "",
      fontWeight: props.selected ? 700 : 500,
      "&:hover": {
        backgroundColor: "gold",
        color: "black",
      },
      width: "22%",
      //   margin: 5,
    },
  }));
  const classes = useStyles();
  return (
    <span onClick={props.onClick} className={classes.selectButton}>
      {props.children}
    </span>
  );
};
export default SelectButton;
