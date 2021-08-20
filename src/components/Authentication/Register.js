import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
/* importing custom modules */
import Copyright from '../Utils/Copyright';
import Styles from '../Utils/Styles';

/* importing Material UI components */
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

/* Styles */
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    padding: "0",
    margin: "0",
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
    boxSizing: "border-box",
    maxWidth: "inherit"
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/1600x900/?nature,water)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  authForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: "3%"
  },
  title: {
    textAlign: "center",
    fontFamily: "Lora, serif"
  },
  avatar: {
    margin: "1rem auto",
    backgroundColor: theme.palette.accent.main,
  },
  buttons: {
    marginLeft: "auto",
    textAlign: "right",
    paddingTop: "1rem"
  },
  homeBtn: {
    backgroundColor: '#ffffff4d',
    border: 0,
    borderRadius: "10vw",
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
    color: "#f50057",
    margin: "0.5rem",
    '&:hover': { color: "white" },
    fontFamily: "Lora, serif"
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
    fontFamily: "Lora, serif"
  },
  input: {
    [`& fieldset`]: {
      borderRadius: "10vw",
    },
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    fontFamily: "Lora, serif",
    backgroundColor: theme.palette.accent.main, // using custom color palette
    borderRadius: "10vw",
    '&:hover': {
      backgroundColor: theme.palette.accent.dark,
      color: "white"
    },
  },
}));

/* Component */
const Register = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <CssBaseline />
      <Grid item xs={6} sm={6} md={6} lg={6} xl={6} xxl={6} className={classes.image} />

      <Grid item xs={6} sm={6} md={6} lg={6} xl={6} xxl={6} elevation={6} className={classes.authForm}>
        {/* Back to home page button */}
        <Grid className={classes.buttons}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.homeBtn}
            component={RouterLink} to="/home">
            Home
          </Button>
        </Grid>

        <div>
          <Avatar className={classes.avatar}>
            <LoyaltyIcon />
          </Avatar>
          <Typography component="h1" variant="h5" className={classes.title}>
            Register
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  className={classes.input}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  className={classes.input}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address (User Name)"
                  name="email"
                  autoComplete="email"
                  className={classes.input}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  className={classes.input}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password Confirmation"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  className={classes.input}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  variant="body2"
                  component={RouterLink} to="/login">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Container >

  );
};

export default Register;