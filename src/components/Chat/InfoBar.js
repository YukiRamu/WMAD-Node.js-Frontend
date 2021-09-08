import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

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
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

/* Styles */
const useStyles = makeStyles(theme => ({
  infoBarcontainer: {
    padding: "0",
    margin: "0",
    minWidth: "100vw",
    fontFamily: "Lora, serif !important",
    backgroundColor: theme.palette.warmColor.light,
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  leftInnerContainer: {
    display: "flex",
    margin: "1rem"
  },
  onlinIcon: {
    borderRadius: "50%",
    height: "fit-content",
    display: "block",
    margin: "auto"
  },
  title: {
    margin: " 0 1rem",
    fontFamily: "Lora, serif !important",
  },
  rightInnerContainer: {

  }
}));

/* Component */
const InfoBar = ({ room }) => {

  const classes = useStyles();

  return (
    <>
      <Container className={classes.infoBarcontainer}>
        <div className={classes.leftInnerContainer}>
          <img className={classes.onlinIcon} src={onlineIcon} alt="online image" />
          <Typography component="h2" className={classes.title}>{room}</Typography>
        </div>

        <div className={classes.rightInnerContainer}>
          <Link component={RouterLink} to="/home"><img src={closeIcon} alt="close image" /></Link>
        </div>
      </Container>
    </>
  );
};

export default InfoBar;;
