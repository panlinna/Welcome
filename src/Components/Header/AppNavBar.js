import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';


class AppNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }
  handleToggle(){ this.setState({open: !this.state.open})}
  handleClose (){ this.setState({open: false})}
  render() {
    return (
      <div>
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose.bind(this)}>
             <Link to="/" onlyActiveOnIndex={true}>首页</Link>
           </MenuItem>
           <MenuItem onTouchTap={this.handleClose.bind(this)}>
             <Link to="blog">博客</Link>
           </MenuItem>
           <MenuItem onTouchTap={this.handleClose.bind(this)}>
             <Link to="about">关于</Link>
           </MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default AppNavBar;
