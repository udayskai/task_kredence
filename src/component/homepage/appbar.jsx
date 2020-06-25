
import React from 'react';
import { Link } from "react-router-dom";


import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button, Box } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  button: {
    color: "gray",
    backgroundColor: "#e6e6e6",
    borderRadius: "0x"
  },
  appBar: {
    backgroundColor: "#e6e6e6",
    maxHeight: "70px"
  },
  logo: {
    color: "black"
  },
  link: {
    textDecoration: "none",
    color: "gray",
  }

}));



// component
export default function Navbar() {
  const classes = useStyles();

  return (
    <div >
      <AppBar position="static" className={classes.appBar}>
        <Toolbar display="flex" flexDirection="row" justifyContent="flex-start">
          <Typography className={classes.logo} variant="h6" direction="row" justify="start">
            LOGO
          </Typography>


          <Box component="span" m={3}>

            <Button className={classes.button} color="inherit"
              direction="row"
              justify="end"
            >
              <Link className={classes.link} to="/home">   Home  </Link>

            </Button>



            <Button
              className={classes.button}
              direction="row"
              justify="end"
            >
              <Link className={classes.link} to="/task">   Task  </Link>
            </Button>


            <Button
              className={classes.button}
              direction="row"
              justify="end"
            >
              <Link className={classes.link} to="/user">   User  </Link>
            </Button>
          </Box>


        </Toolbar>
      </AppBar>
    </div>
  );
}
