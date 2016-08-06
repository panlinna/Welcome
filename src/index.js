import React from 'react';
import ReactDOM,{ render }from 'react-dom';

import {Router,hashHistory} from 'react-router';

import routes from './routes.js';


render(<Router routes={routes} history={hashHistory} />
  ,document.getElementById('root'));
