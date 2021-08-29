import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { authorize, ChatSelector, login } from "../../redux/chatSlice";
import axios from "axios";
import { encode } from "base-64";
/* importing custom modules */
import Copyright from '../Utils/Copyright';
import Styles from '../Utils/Styles';

/* importing Material UI components */
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

/* Styles */
const useStyles = makeStyles(theme => ({
  loginContainer: {
    height: '100vh',
    padding: "0",
    margin: "0",
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
    boxSizing: "border-box",
    maxWidth: "inherit",
    fontFamily: "Lora, serif"
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  message: {
    width: "fit-content",
    height: "50%",
    padding: "1rem",
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontFamily: "Lora, serif",
    fontSize: "5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5%",
    backgroundColor: "#d3d3d373",
    color: "#fff",
    boxShadow: "rgb(0 0 0 / 15%) 0px 15px 25px, rgb(0 0 0 / 5%) 0px 5px 10px"
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
    backgroundColor: theme.palette.accent.main, // using custom color palette
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
    fontFamily: "Lora, serif",
    borderRadius: "10vw",
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
const Login = () => {

  //private hook
  const [loginUser, setLoginUser] = useState({ username: "", password: "" });
  const [room, setRoom] = useState("");

  //Use dispatch method from redux
  const dispatch = useDispatch();
  let history = useHistory();

  /* Methods */
  const login = async (e) => {
    e.preventDefault();

    // ****** Axios VERSION: connect to backend ******
    try {
      const response = await axios.put("http://localhost:5000/api/login", loginUser, {
        headers: {
          'Authorization': 'Basic ' + encode(loginUser.username + ":" + loginUser.password),
          "Content-type": "application/json"
        },
        credentials: "same-origin"
      });
      if (response.statusText !== "OK") {
        throw response.statusText;
      } else {
        // Only for authorized user

        //dispatch --- not working! TypeError: e.preventDefault is not a function. need to create a thunk
        // dispatch(authorize({
        //   user: {
        //     username: response.data.username,
        //     password: response.data.password
        //   },
        //   room: room
        // }));
        history.push({
          pathname: '/chat',
          search: `?username=${response.data.username}&room=${room}`,
          state: { detail: response.data }
        });
      }
    } catch (error) {
      console.error(`Login failed with the error: ${error}`);
      return error;
    }
  };

  //const globalClasses = Styles(); // global style component ---- NOT WORKING!!!!
  // console.log(globalClasses);
  const classes = useStyles(); //only for this component
  //console.log(classes);

  return (
    <Container className={classes.loginContainer}>
      <CssBaseline />
      <Grid item xs={6} sm={6} md={6} lg={6} xl={6} xxl={6} elevation={6} className={classes.image}>
        <Typography component="h1" variant="h5" className={classes.message}>
          Welcome Back!
        </Typography>
      </Grid>

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
            Log in
          </Typography>
          <Typography component="h1" variant="h5" className={classes.title}>
            to your account
          </Typography>
          <form
            className={classes.form}
            onSubmit={login}>
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
              className={classes.input}
              value={loginUser.username}
              onChange={(e) => setLoginUser({ ...loginUser, username: e.target.value })}
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
              className={classes.input}
              value={loginUser.password}
              onChange={(e) => setLoginUser({ ...loginUser, password: e.target.value })}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="room"
              label="room"
              type="text"
              id="room"
              className={classes.input}
              value={room}
              onChange={(e) => setRoom(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            //component={RouterLink} to="/chat"
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link
                  variant="body2"
                  component={RouterLink} to="/forgotCredential">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  variant="body2"
                  component={RouterLink} to="/register">
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