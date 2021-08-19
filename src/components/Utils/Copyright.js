import React from 'react'
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const Copyright = () => {
  const classes = useStyles();
  return (
    <Typography className={classes.footer} variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/YukiRamu">
        Yuki Matsubara
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

const useStyles = makeStyles((theme) => ({
  footer: {
    position: "absolute",
    bottom: "5%",
    left: "50%",
    transform: "translateX(-50%)",
  }
}));

export default Copyright
