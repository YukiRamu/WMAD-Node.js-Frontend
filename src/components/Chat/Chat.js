import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from "socket.io-client";
import InfoBar from '../InfoBar/InfoBar';

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

let socket;

/* Styles */
const useStyles = makeStyles(theme => ({
  chatContainer: {
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
}));


/* Component */
const Chat = ({ location }) => {

  //private hook
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "localhost:5000";

  const classes = useStyles();

  //get state from url
  useEffect(() => {
    const { username, room } = queryString.parse(location.search);

    //define backend endpoint, get instance
    socket = io(ENDPOINT);

    setUsername(username);
    setRoom(room);

    socket.emit("join", { username, room }, () => {

    });

    //disconnect event
    return () => {
      socket.emit("disconnect");
      socket.off();
    };

  }, [location.search, ENDPOINT]);

  //store messages into an array state 
  useEffect(() => {
    socket.on("message", (message) => {
      setMessages(messages => [...messages, message]);
    });
  }, [messages]);

  //methods for sending messages
  const sendMessage = (e) => {
    e.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  console.log(message, messages);

  return (
    <>
      <Container className={classes.chatContainer}>
        <Typography component="h1" variant="h5" className={classes.message}>
          Welcome to the chat room!
        </Typography>
        <div className={classes.container}>
          {/* Nav bar */}
          <InfoBar room={room}/>
          {/* <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="text"
            name="text"
            autoFocus
            className={classes.messageInput}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={e => e.key === "Enter" ? sendMessage(e) : null}
          /> */}
        </div>
      </Container>


    </>
  );
};

export default Chat;
