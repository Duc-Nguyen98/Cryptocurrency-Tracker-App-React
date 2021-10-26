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
      border: "1px solid #FA983A",
      borderRadius: 5,
      padding: 10,
      fontFamily: "Montserrat",
      cursor: "pointer",
      backgroundColor: props.selected ? "#FA983A" : "",
      color: props.selected ? "black" : "",
      fontWeight: props.selected ? 700 : 500,
      transition: ".4s",
      "&:hover": {
        backgroundColor: "#FA983A",
        color: "black",
      },
      width: "15%",
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
