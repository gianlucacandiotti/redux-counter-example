import React from 'react';
import mountReduxComponent from 'utils/mountReduxComponent';
import Home from './Home';
import reducer from './reducer';

mountReduxComponent('home', <Home />, reducer);
