import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import Counter from './Counter';

describe('Counter component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Counter
        value={0}
        onIncrementClick={() => false}
        onDecrementClick={() => false}
      />
    );

    expect(wrapper).toBeTruthy();
  });

  it('handles onIncrementClick', () => {
    const onIncrementClick = sinon.spy();

    const wrapper = shallow(
      <Counter
        value={0}
        onIncrementClick={onIncrementClick}
        onDecrementClick={() => false}
      />
    );

    wrapper.find('.counter-increment').simulate('click');
    expect(onIncrementClick.calledOnce).toEqual(true);
  });

  it('handles onDecrementClick', () => {
    const onDecrementClick = sinon.spy();

    const wrapper = shallow(
      <Counter
        value={0}
        onIncrementClick={() => false}
        onDecrementClick={onDecrementClick}
      />
    );

    wrapper.find('.counter-decrement').simulate('click');
    expect(onDecrementClick.calledOnce).toEqual(true);
  });
});
