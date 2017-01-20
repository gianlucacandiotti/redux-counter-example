import React from 'react';
import { render } from 'react-dom';
import Counter from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Counter />, div);
});
