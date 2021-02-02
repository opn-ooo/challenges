import React from 'react';
import TestRenderer, { act } from 'react-test-renderer';
import DonateForm from '../DonateForm';
describe('DonateForm', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(
      <DonateForm onSubmit={jest.fn()} currency={'THB'} />
    );

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('onSubmit form', () => {
    const mockOnSubmit = jest.fn();
    const testRenderer = TestRenderer.create(
      <DonateForm onSubmit={mockOnSubmit} />
    );
    const testInstance = testRenderer.root;
    testInstance.find((el) => el.type === 'form').props.onSubmit();
    expect(mockOnSubmit).toHaveBeenCalled();
  });
});
