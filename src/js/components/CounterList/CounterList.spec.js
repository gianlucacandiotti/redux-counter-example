import React from 'react';
import { render } from 'react-dom';
import CounterList from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<CounterList />, div);
});
