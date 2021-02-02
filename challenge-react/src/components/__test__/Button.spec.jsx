import React from 'react'
import TestRenderer from 'react-test-renderer';
import Button from '../Button';
describe('Button', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<Button />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
