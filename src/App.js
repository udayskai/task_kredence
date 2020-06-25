import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import DropdownPage from "./component/homepage/navbar";
import Task from "./component/tast/Task";
import User from "./component/User/newUser";
import Appbar from "./component/homepage/appbar";

function App() {

  //  user restrictions not allowed to go any other routes
  let userData = window.localStorage.getItem("userData");
  if (userData === null) {
    return (
      <div className="mt-5" style={{ border: "2px solid gray", margin: " 6rem auto", width: "fit-content" }}>
        <Route path="/" component={User} />
      </div>
    )
  }

  //user allow to navigate  when is Login !! but can't go back to login page
  else {
    return (
      <div className="App">
        <Appbar />
        <Switch>
          <Route exact path="/" component={DropdownPage} />
          <Route exact path="/home" component={DropdownPage} />
          <Route exact path="/task" component={Task} />
          <Route exact path="/user" component={User} />
        </Switch>
      </div>
    );
  }

}



export default App;
