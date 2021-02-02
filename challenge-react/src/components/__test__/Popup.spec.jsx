import React from 'react';
import TestRenderer from 'react-test-renderer';
import Popup from '../Popup';
describe('Button', () => {
  describe('render correctly', () => {
    it('visible true', () => {
      const testRenderer = TestRenderer.create(
        <Popup visible={true} message={'test'} onClose={jest.fn()} />
      );

      expect(testRenderer.toJSON()).toMatchSnapshot();
    });
    it('visible false', () => {
      const testRenderer = TestRenderer.create(
        <Popup visible={false} message={'test'} onClose={jest.fn()} />
      );

      expect(testRenderer.toJSON()).toMatchSnapshot();
    });
  });
  it('close popup', () => {
    const mockOnClose = jest.fn();
    const testRenderer = TestRenderer.create(
      <Popup visible={true} message={'test'} onClose={mockOnClose} />
    );
    const testInstance = testRenderer.root;
    testInstance.findByProps({ id: 'close-popup-btn' }).props.onClick();
    expect(mockOnClose).toHaveBeenCalled();
  });
});
