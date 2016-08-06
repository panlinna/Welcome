import React, { Component } from 'react';
import {Card} from 'material-ui/Card';
import isEmpty from 'lodash/isEmpty';
import UserInfo from './UserInfo';
import github from './github';
import CircularProgress from './CircularProgress';


class GithubAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      wait:true
    };
  }
  componentDidMount() {
    github.getGithubInfo('panlinna')
      .then((data) => {
        this.setState({
          user: data.user,
          wait:false
        });
      });
  }
  render(){
    let GitHubInfo;

    if(!isEmpty(this.state.user)) {
      GitHubInfo = (
        <div>
        </div>
      );
    }
    return(
      <div className='account'>
        <Card className="content">
        {
          this.state.wait ?  <CircularProgress /> :
          <div>
          <UserInfo userInfo={this.state.user} />
          </div>
        }
          { GitHubInfo }
        </Card>
      </div>
    )
  }
}

export default GithubAccount;
