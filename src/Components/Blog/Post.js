import React, { Component } from 'react';

class Post extends Component {
  constructor(){
    super();
    this.state={
    }
  }

  render(){

    return(
      <div>
        {this.props.parmas.title}
      </div>
    )
  }
}

export default Post;
