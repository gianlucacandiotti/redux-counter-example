import React from 'react';
import counters from 'modules/counters';

const CounterListContainer = counters.components.CounterListContainer;
const AddCounter = counters.components.AddCounter;

const Home = () => (
  <section className="section">
    <div className="container">
      <CounterListContainer />
      <div className="action-bar has-text-centered">
        <AddCounter className="button is-primary">
          Add New Counter
        </AddCounter>
      </div>
    </div>
  </section>
);

export default Home;
