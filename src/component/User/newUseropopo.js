import React, { Component } from "react";
import SimpleReactValidator from 'simple-react-validator'
import { Box, FormControl, InputLabel, Input, Grid, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            PasswordChange: false,
            userlogged: false

        };
        console.log("user props", props)
        this.validator = new SimpleReactValidator({ autoForceUpdate: this });
    }

    componentDidMount() {
        let userLogin = window.localStorage.getItem("userData");
        let userData = JSON.parse(userLogin)

        if (!userData) {
            console.log(userData, "dididididi", this.state.userlogged)
            this.setState({ userlogged: false })
        }
        else {
            this.setState({ userlogged: true, username: userData.Username, password: userData.Password })


        }

    }

    //onChnage
    OnChangeMethod = e => {
        this.setState({ [e.target.name]: e.target.value });
    };


    //logout handler remove local storage data and send to login page
    logoutMethod = (e) => {
        window.localStorage.removeItem("userData");
        window.localStorage.removeItem("taskData")
        this.props.history.push('/')
        // this.setState({ userlogged: false })
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
            this.setState({ userlogged: true })
            this.props.history.push('/')
            window.location.reload();
        }
        else {
            this.validator.showMessages();
        }
    }

    OnPasswordChangeMethod = e => {
        e.preventDefault();
        let ChangePassowrd = this.state.PasswordChange
        this.setState({ PasswordChange: !ChangePassowrd })

    }


    render() {

        let userData = window.localStorage.getItem("userData");
        console.log(userData, "localStorage", this.state.userlogged)

        return (

            <Box m={4} spacing={5}>
                < form onSubmit={this.OnSubmitFromMethod} >

                    {this.state.userlogged ?
                        <Box>
                            <Box m={4} display="flex" flexDirection="row" justifyContent="flexStart" xs={12}>
                                <Grid item xs={6}>
                                    <label htmlFor="my-input">User Name</label>
                                    <input disabled={this.state.PasswordChange ? false : true} type="text" name="username" placeholder="Enter Username" value={this.state.username} onChange={this.OnChangeMethod} />
                                    {/* {this.validator.message('username', this.state.username, 'required|min:3|max:50')} */}
                                </Grid>
                            </Box>


                            <Box m={4} display="flex" flexDirection="row" justifyContent="flexStart" xs={12}>
                                <Grid xs={6}>
                                    <label htmlFor="my-input">Password</label>
                                    <input disabled={this.state.PasswordChange ? false : true} type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.OnChangeMethod} />
                                    {/* {this.validator.message("password", this.state.password, "required|min:4|max:50")} */}
                                </Grid>
                            </Box>

                            <Button variant="dark" type="submit" onClick={this.OnPasswordChangeMethod}  >
                                {this.state.PasswordChange ? "Cancel " : 'Change Passowrd'}
                            </Button>

                            <Button className="" style={{ backgroundColor: "red" }} variant="danger" type="submit" onClick={this.logoutMethod}  >
                                Logout
                                        </Button>
                        </Box>


                        :
                        <Box>
                            <Box m={4} display="flex" flexDirection="row" justifyContent="flexStart" xs={12}>
                                <Grid item xs={6}>
                                    <label htmlFor="my-input">User Name</label>
                                    <input type="text" name="username" placeholder="Enter Username" value={this.state.username} onChange={this.OnChangeMethod} />
                                    {/* {this.validator.message('username', this.state.username, 'required|min:3|max:50')} */}
                                </Grid>
                            </Box>


                            <Box m={4} display="flex" flexDirection="row" justifyContent="flexStart" xs={12}>
                                <Grid xs={6}>
                                    <label htmlFor="my-input">Password</label>
                                    <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.OnChangeMethod} />
                                    {/* {this.validator.message("password", this.state.password, "required|min:4|max:50")} */}
                                </Grid>
                            </Box>

                            <Button variant="success" type="submit" > Submit </Button>

                        </Box>
                    }
                </form>
            </Box >

        );
    }
}
