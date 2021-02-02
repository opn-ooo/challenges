import React from 'react'
import TestRenderer from 'react-test-renderer';
import AppHeader from '../AppHeader';
describe('AppHeader', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<AppHeader />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
