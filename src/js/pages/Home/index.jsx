import React from 'react';
import counters from 'modules/counters';
import './styles.css';

const CounterListContainer = counters.components.CounterListContainer;

const Home = () => (
  <section className="section">
    <div className="container">
      <CounterListContainer />
    </div>
  </section>
);

export default Home;
