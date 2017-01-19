/**
 * We will load the application's scss first.
 */

import 'src/sass/index.scss';

/**
 * Manage store creation and subscriptions
 */

import React from 'react';
import reactDOM from 'react-dom';
import { createStore } from 'redux';
import rootReducer from './rootReducer';
import counters from './modules/counters';
import Counter from './modules/counters/components/Counter';

const store = createStore(rootReducer);

const render = () => {
  reactDOM.render(
    <Counter
      value={store.getState().counters}
      onIncrement={() => {
        store.dispatch(counters.actions.increment());
      }}
      onDecrement={() => {
        store.dispatch(counters.actions.decrement());
      }}
    />,
    document.getElementById('counter')
  );
};

store.subscribe(render);
render();
