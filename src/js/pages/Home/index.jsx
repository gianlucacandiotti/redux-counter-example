import React from 'react';
import counters from 'modules/counters';

const CounterListContainer = counters.components.CounterListContainer;

const Home = () => (
  <div>
    <CounterListContainer />
  </div>
);

export default Home;
