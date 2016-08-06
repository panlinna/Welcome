import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import AppNavBar from './AppNavBar';

class Header extends Component {
  _onLeftIconButtonTouchTap() {
    this.refs.LeftNav.handleToggle();
  }

  render(){
    return (
      <div>
        <AppNavBar ref='LeftNav' />
        <AppBar onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap.bind(this)}/>
      </div>
    );
  }
}

export default Header;
