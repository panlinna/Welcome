import React, { Component } from 'react';

class UserInfo extends Component {
  render() {
    let styles={
      root:{
        textAlign:'center'
      },
      name:{
        color:'#00BCD4',
        fontWeight:'600',
        fontSize:'32px',
        lineHeight:'60px'
      },
      img:{
        borderRadius:'50%',
        width:'100%',
        maxWidth:'150px',
        boxShadow: 'rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px'
      }
    }
    const userInfo = this.props.userInfo;
    return (
      <div className='user-info' style={styles.root}>
        <img src={userInfo.avatar_url} />
        <ul>
          <li>
            <b>{userInfo.followers}</b>
            <span>followers</span>
          </li>
          <li>
            <b>{userInfo.following}</b>
            <span>following</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default UserInfo;
