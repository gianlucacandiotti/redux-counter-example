import sinon from 'sinon';
import React from 'react';
import { shallow } from 'enzyme';
import Counter from 'components/Counter/Counter';
import CounterList from './CounterList';

describe('CounterList component', () => {
  it('renders correctly', () => {
    const counters = [];

    const wrapper = shallow(
      <CounterList
        counters={counters}
        onRemove={() => false}
        onIncrement={() => false}
        onDecrement={() => false}
      />
    );

    expect(wrapper).toBeTruthy();
  });

  it('renders <Counter /> components according to props', () => {
    const counters = [
      {
        id: 1,
        value: 0,
      },
      {
        id: 2,
        value: 0,
      },
    ];

    const wrapper = shallow(
      <CounterList
        counters={counters}
        onRemove={() => false}
        onIncrement={() => false}
        onDecrement={() => false}
      />
    );

    expect(wrapper.find(Counter)).toHaveLength(2);
  });
});
