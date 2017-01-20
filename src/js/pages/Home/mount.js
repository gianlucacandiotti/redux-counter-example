import React from 'react';
import mountReduxComponent from 'utils/mountReduxComponent';
import Home from './index';
import reducer from './reducer';

mountReduxComponent('home', <Home />, reducer);
