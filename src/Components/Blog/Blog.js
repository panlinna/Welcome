import React, { Component } from 'react';
import map from 'lodash/fp/map';
import GithubAccount from '../GithubAccount/GithubAccount.js';
import axios from 'axios';

import BlogCard from './BlogCard.js';
//注意重名问题(BlogCard和blogs)

//定义一个卡片数组
class List extends Component {
    constructor(){
      super();
      this.state={
        posts:''
      }
    }

  componentDidMount(){
    //use Math random to avoid brower cache
    let address = `https://raw.githubusercontent.com/panlinna/Welcome/master/index.json`
    axios.get(address).then((res) => {
      console.log(res);
      this.setState({
        posts: res.data
      })
    });
  }
  render(){
    var blogCards = [];
    //定义一个空数组
    //理解map 和 箭头函数（ES6新语法：参考http://es6.ruanyifeng.com/）简化代码
    map((b) =>  {
                  blogCards.push(
                    <BlogCard title={b.title} date={b.created_at} index={b.id} key={Math.random()}/>
                  );
                },
        this.state.posts
    );
    return(
      <div>
        {GithubAccount}
        {blogCards}
      </div>
    )
  }
}

export default List;
