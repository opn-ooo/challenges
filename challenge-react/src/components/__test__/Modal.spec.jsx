import React from 'react';
import TestRenderer from 'react-test-renderer';
import Modal, { CloseButton } from '../Modal';
describe('Modal', () => {
  describe('render correctly', () => {
    it('visible true', () => {
      const testRenderer = TestRenderer.create(
        <Modal visible={true} onClose={jest.fn()} />
      );

      expect(testRenderer.toJSON()).toMatchSnapshot();
    });
    it('visible false', () => {
      const testRenderer = TestRenderer.create(
        <Modal visible={false} onClose={jest.fn()} />
      );

      expect(testRenderer.toJSON()).toMatchSnapshot();
    });
  });
  it('click close', () => {
    const mockOnCloseProps = jest.fn();
    const testRenderer = TestRenderer.create(
      <Modal visible={true} onClose={mockOnCloseProps} />
    );
    const testInstance = testRenderer.root;
    testInstance.findByType(CloseButton).props.onClick();

    expect(mockOnCloseProps).toHaveBeenCalled();
  });
});
