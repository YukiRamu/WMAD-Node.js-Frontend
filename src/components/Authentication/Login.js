import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Copyright from '../Utils/Copyright';
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
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: "3%"
  },
  title: {
    textAlign: "center",
    // backgroundColor: "#ffffff96",
    // width: "50%",
    // height: "50%",
    // position: "relative",
    // top: "50%",
    // left: "50%",
    // transform: "translate(-50%, -50%)",
    fontFamily: "Lora, serif"
  },
  avatar: {
    margin: "1rem auto",
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

/* Component */
const Login = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <CssBaseline />
      <Grid item xs={6} sm={6} md={6} lg={6} xl={6} xxl={6} elevation={6} className={classes.image}>
        <Typography component="h1" variant="h5" className={classes.title}>
          Welcome Back!
        </Typography>
      </Grid>

      <Grid item xs={6} sm={6} md={6} lg={6} xl={6} xxl={6} elevation={6} className={classes.loginForm}>
        <div>
          <Avatar className={classes.avatar}>
            <LoyaltyIcon />
          </Avatar>
          <Typography component="h1" variant="h5" className={classes.title}>
            Log in
          </Typography>
          <Typography component="h1" variant="h5" className={classes.title}>
            to your account
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"New User? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>

    </Container>
  );
};

export default Login;