import React, { Component } from "react";
import InfoPage from './InfoPage';
import Dropdown from './dropdown'
import { Box } from '@material-ui/core'



class DropdownPage extends Component {
  constructor() {
    super();
    this.state = {
      value: "Default value"
    }
  }


  //on Click handler
  onClickMethod = (e) => {
    this.setState({ value: e.target.value })
  }


  render() {
    return (
      <Box m={3}  >
        <Dropdown value={this.state.value} onChange={this.onClickMethod} />
        <InfoPage props={this.state.value} />
      </Box>
    );
  }
}

export default DropdownPage;
