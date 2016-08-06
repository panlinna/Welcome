import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';


class Circular extends Component {
  render() {
    return (
      <div>
        <CircularProgress />
        <h1>loading...............</h1>
      </div>
    );
  }
}
export default Circular;
