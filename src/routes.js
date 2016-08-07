import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './Components/App.js';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Post from './Components/Blog/Post';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="blog/:title" component={Post} />
    <Route path="about" component={About} />
    <Route path="home" component={Home} />
    <Route path="blog" component={Blog} />

  </Route>
)
