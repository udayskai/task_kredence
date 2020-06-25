import React, { Component } from "react";
import SimpleReactValidator from 'simple-react-validator'
import { Box, FormControl, InputLabel, Input, Grid, Button, Typography } from '@material-ui/core';


export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      chnagePassword: false
    };
    console.log("user props", props)
    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
  }

  componentDidMount() {
    let userLogin = window.localStorage.getItem("userData");
  }

  //onChnage
  OnChangeMethod = e => {
    this.setState({ [e.target.name]: e.target.value });
  };


  //logout handler remove local storage data and send to login page
  logoutMethod = (e) => {
    this.setState({ chnagePassword: false })
    window.localStorage.removeItem("userData");
    window.localStorage.removeItem("taskData")
    this.props.history.push('/')
    window.location.reload();
  }


  //On submit handler for the form and storage of data
  OnSubmitFromMethod = e => {
    e.preventDefault();

    //input validation with help of react-simple-validator
    if (this.validator.allValid()) {
      let data = {
        Username: this.state.username,
        Password: this.state.password
      };

      //user data set inside local storage
      window.localStorage.setItem("userData", JSON.stringify(data));

      //user after login send to the home page
      this.props.history.push('/')
      window.location.reload();

    }
    else {
      this.validator.showMessages();
    }
  }

  OnChnagePasswordMethod = e => {
    let ChangePassowrd = this.state.chnagePassword
    this.setState({ chnagePassword: !ChangePassowrd })

  }


  render() {

    let userData = window.localStorage.getItem("userData");
    console.log(userData, "localStorage")

    return (

      <Box m={4} spacing={5}>
        < form onSubmit={this.OnSubmitFromMethod} >
          {
            this.state.chnagePassword ?
              // compoent input
              <Box>
                <Box display="flex" flexDirection="row" display="flex" justifyContent="flexStart" xs={12}>
                  <Grid item xs={6}>
                    <FormControl>
                      <InputLabel htmlFor="my-input">User Name</InputLabel>
                      <Input id="my-input" aria-describedby="my-helper-text" type="text" name="username" placeholder="Enter Username" value={this.state.username} onChange={this.OnChangeMethod} />
                      {this.validator.message('username', this.state.username, 'required|min:3|max:50')}
                    </FormControl>

                  </Grid>
                </Box>


                <Box display="flex" flexDirection="row" display="flex" justifyContent="flexStart" xs={12}>
                  <Grid xs={6}>

                    <FormControl>
                      <InputLabel htmlFor="my-input">Password</InputLabel>
                      <Input id="my-input" aria-describedby="my-helper-text" type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.OnChangeMethod} />
                      {this.validator.message("password", this.state.password, "required|min:4|max:50")}
                    </FormControl>

                  </Grid>
                </Box>

              </Box>

              :
              // label
              <Box>
                <Box display="flex" flexDirection="row" display="flex" justifyContent="flexStart" xs={12}>
                  <Grid item xs={6} display="flex" flexDirection="row"  >
                    <FormControl>
                      <InputLabel htmlFor="my-input">User Name</InputLabel>
                      <Input disabled id="my-input" aria-describedby="my-helper-text" type="text" name="username" placeholder="Enter Username" value={this.state.username} onChange={this.OnChangeMethod} />
                    </FormControl>
                  </Grid>
                </Box>


                <Box display="flex" flexDirection="row" display="flex" justifyContent="flexStart" xs={12}>
                  <Grid xs={6}>
                    <FormControl>
                      <InputLabel htmlFor="my-input">Password</InputLabel>
                      <Input disabled id="my-input" aria-describedby="my-helper-text" type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.OnChangeMethod} />
                    </FormControl>
                  </Grid>
                </Box>

              </Box>


          }


          {/*  Logout & ChangePassowrd buttons based on user login or not */}
          <Box spacing={5} m={4}>
            {!userData ?

              <Grid>
                <Button variant="success" type="submit" >
                  Submit
              </Button>
              </Grid>
              :

              <div>

                <Grid>
                  <Button variant="dark" type="submit" onClick={this.OnChnagePasswordMethod}  >
                    ChangePassowrd
                 </Button>
                  <Button className="ml-5" variant="danger" type="submit" onClick={this.logoutMethod}  >
                    Logout
                 </Button>
                </Grid>
              </div>

            }
          </Box>
        </form>
      </Box>

    );
  }
}
