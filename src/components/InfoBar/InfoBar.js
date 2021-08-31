import React from 'react';
import { Link } from 'react-router-dom';

//image source
import closeIcon from "../../icons/closeIcon.png";
import onlineIcon from "../../icons/onlineIcon.png";

/* importing Material UI components */
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

/* Styles */
const useStyles = makeStyles(theme => ({
  infoBarcontainer: {
    padding: "0",
    margin: "0",
    fontFamily: "Lora, serif",
    backgroundColor: "pink"
  },
  leftInnerContainer: {

  },
  rightInnerContainer: {

  }
}));

/* Component */
const InfoBar = ({ room }) => {

  const classes = useStyles();

  return (
    <>
      <div className={classes.infoBarcontainer}>
        <div className={classes.leftInnerContainer}>
          <img className={classes.onlinIcon} src={onlineIcon} alt="online image" />
          <h3>{room}</h3>
        </div>

        <div className={classes.rightInnerContainer}>
          <Link href="/"><img src={closeIcon} alt="close image" /></Link>
        </div>
      </div>
    </>
  );
};

export default InfoBar;;
