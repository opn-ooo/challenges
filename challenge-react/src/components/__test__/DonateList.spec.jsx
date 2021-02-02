import React from 'react';
import TestRenderer from 'react-test-renderer';
import DonateCard from '../DonateCard';
import DonateList from '../DonateList';
describe('DonateList', () => {
  it('render correctly', () => {
    const mockItem = { id: '1', image: 'test.jpg', name: 'test' };
    const testRenderer = TestRenderer.create(
      <DonateList charities={[mockItem]} handlePay={jest.fn()} />
    );

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('on pay', () => {
    const mockItem = {
      id: '1',
      image: 'test.jpg',
      name: 'test',
      currency: 'THB',
    };
    const mockValue = 50;
    const mockHandlePay = jest.fn();
    const testRenderer = TestRenderer.create(
      <DonateList charities={[mockItem]} handlePay={mockHandlePay} />
    );
    const testInstance = testRenderer.root;
    testInstance
      .findAllByType(DonateCard)[0]
      .props.onSubmit(mockItem.id, mockValue, mockItem.currency);

    expect(mockHandlePay).toHaveBeenCalledWith(
      mockItem.id,
      mockValue,
      mockItem.currency
    );
  });
});
