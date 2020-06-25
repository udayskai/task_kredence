import React from "react";
import { Typography, Grid, Box, makeStyles } from '@material-ui/core';



let useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "250px",
    backgroundColor: "white",
    border: "2px solid black",
    outline: "none"
  },
  box: {
    marginTop: theme.spacing(2),
  },
  title: {
    fontSize: "2rem",
    marginBottom: "1rem"
  },
  text: {
    fontSize: "1.5rem",
    color: "gray"
  }
}));

const InfoPage = (props) => {
  const classes = useStyles();
  return (
    <Box m={3} className={classes.box}>
      <Typography className={classes.title} >Infomation page</Typography>
      <Typography className={classes.text}>{props.props}</Typography>
    </Box>
  );
}

export default InfoPage;