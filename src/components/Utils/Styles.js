/* This is a global style component used in the entire website */
/* Modularize */
import { makeStyles } from '@material-ui/core/styles';

const Styles = makeStyles(theme => ({
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
    borderRadius: "10vw"
  },
}));

export default Styles;
