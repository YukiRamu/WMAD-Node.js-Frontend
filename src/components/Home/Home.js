/* Landing Page */
import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Copyright from '../Utils/Copyright';
import { Container } from '@material-ui/core';

/* Styles */
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundImage: "url(../image/bg1.jpg)",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  buttons: {
    textAlign: "right",
    paddingTop: "1rem"
  },
  logInBtn: {
    backgroundColor: '#ffffff4d',
    border: 0,
    borderRadius: 3,
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
    color: "#f50057",
    margin: "0.5rem",
    '&:hover': { color: "white" },
  },
  registerBtn: {
    backgroundColor: '#ffffff4d',
    border: 0,
    borderRadius: 3,
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
    color: "#f50057",
    margin: "0.5rem",
    '&:hover': { color: "white" },
  },
  header: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    margin: "0",
    padding: "0",
  },

}));

/* Component */
const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.root}>

        <Grid className={classes.buttons}>
          <Button variant="contained" color="secondary" className={classes.logInBtn}>
            Log in
          </Button>
          <Button variant="contained" color="secondary" className={classes.registerBtn}>
            Register
          </Button>
        </Grid>

        <h1 className={classes.header}>Welcome to the Chatty App :)</h1>
        <Copyright />
      </Container>
    </>
  );
};

export default Home;
