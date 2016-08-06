import React, { Component } from 'react';
import map from 'lodash/fp/map';
import GithubAccount from '../GithubAccount/GithubAccount.js';
import axios from 'axios';

import BlogCard from './BlogCard.js';
//注意重名问题(BlogCard和blogs)
let blogs = [
  {index: '1', title:'这是第一天', date:'2016.7.19'},
  {index: '2', title:'这是第二天', date:'2016.7.21'},
  {index: '3', title:'这是第三天', date:'2016.7.22'}
]
//定义一个卡片数组
class List extends Component {


  componentDidMount(){
    //use Math random to avoid brower cache
    let address = `https://raw.githubusercontent.com/happypeter/big-demo/master/posts/index.json`
    axios.get(address).then((res) => {
      console.log(res);
    });
  }
  render(){
    var blogCards = [];
    //定义一个空数组
    //理解map 和 箭头函数（ES6新语法：参考http://es6.ruanyifeng.com/）简化代码
    map((b) =>  {
                  blogCards.push(
                    <BlogCard title={b.title} date={b.date} index={b.index} key={Math.random()}/>
                  );
                },
        blogs
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
