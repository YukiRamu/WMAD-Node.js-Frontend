import React, { useState, } from 'react';
import ScrollToBottom from "react-scroll-to-bottom";

/* importing Material UI components */
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

/* Styles */
const useStyles = makeStyles(theme => ({
  messageContainer: {
    height: '100vh',
    padding: "0",
    margin: "0",
    width: "100%",
    boxSizing: "border-box",
    maxWidth: "inherit",
    fontFamily: "Lora, serif !important"
  },
  msgDisplayField: {
    width: "100%",
    height: "100%",
    display: "flex"
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
    fontFamily: "Lora, serif",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  messageInput: {
    textAlign: "center",
    width: "100%",
    border: '0.1rem solid #ffb997',
    borderRadius: "5vw",
    height: "2rem",
    '&:focus-visible': {
      border: '0.2rem solid #f67e7d',
      outline: "none",
    }
  },
  sendMsgBtn: {
    margin: "0",
    fontFamily: "Lora, serif",
    backgroundColor: theme.palette.warmColor.light, // using custom color palette
    borderRadius: "5vw",
    '&:hover': {
      backgroundColor: theme.palette.warmColor.main,
      color: "white"
    },
  },
}));

/* Component */
const MessageInput = ({ message, messages, setMessage, sendMessage }) => {

  const classes = useStyles();

  return (
    <>
      <Container className={classes.messageContainer}>

        {/* Message Display */}
        <ScrollToBottom>
          {messages.length !== 0 && (
            messages.map((elem, index) => (
              <>
                <div key={index} className={classes.msgDisplayField}>
                  <p key={index}>{elem.user}</p>
                  <p key={index}>{elem.text}</p>
                </div>
              </>
            ))
          )}
        </ScrollToBottom>

        {/* Message Input  */}
        <form className={classes.form} noValidate>
          <input
            variant="outlined"
            margin="normal"
            fullWidth
            id="text"
            name="text"
            placeholder="Type a message..."
            autoFocus
            className={classes.messageInput}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={e => e.key === "Enter" ? sendMessage(e) : null}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.sendMsgBtn}
            onClick={e => sendMessage(e)}
          >
            Send
          </Button>
        </form>
      </Container>
    </>
  );
};

export default MessageInput;
