import sinon from 'sinon';
import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button component', () => {
  it('renders its children correctly', () => {
    const wrapper = shallow(
      <Button>
        <span className="test-child">Some text</span>
      </Button>
    );

    expect(wrapper.find('.test-child')).toHaveLength(1);
  });

  it('passes the correct className', () => {
    const wrapper = shallow(
      <Button className="button is-primary" />
    );

    expect(wrapper.find('.button.is-primary')).toHaveLength(1);
  });

  it('handles onClick', () => {
    const onClick = sinon.spy();

    const wrapper = shallow(
      <Button onClick={onClick} />
    );

    wrapper.find('button').simulate('click');
    expect(onClick.calledOnce).toEqual(true);
  });
});
