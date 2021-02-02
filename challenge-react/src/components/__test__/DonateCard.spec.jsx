import React from 'react';
import TestRenderer, { act } from 'react-test-renderer';
import DonateCard from '../DonateCard';
import DonateForm from '../DonateForm';
import Modal from '../Modal';
describe('DonateCard', () => {
  it('render correctly', () => {
    const mockItem = {
      id: '1',
      image: 'test.jpg',
      name: 'test',
      currency: 'THB',
    };
    const testRenderer = TestRenderer.create(
      <DonateCard
        onSubmit={jest.fn()}
        className={'test-class'}
        item={mockItem}
      />
    );

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  describe('toggle donate form', () => {
    it('open form', () => {
      const mockItem = {
        id: '1',
        image: 'test.jpg',
        name: 'test',
        currency: 'THB',
      };
      const testRenderer = TestRenderer.create(
        <DonateCard
          onSubmit={jest.fn()}
          className={'test-class'}
          item={mockItem}
        />
      );
      const testInstance = testRenderer.root;
      act(() => {
        testInstance.findByProps({ id: 'donate-btn' }).props.onClick();
      });

      expect(testInstance.findByProps({ visible: true })).toBeTruthy();
    });

    it('close form', () => {
      const mockItem = {
        id: '1',
        image: 'test.jpg',
        name: 'test',
        currency: 'THB',
      };
      const testRenderer = TestRenderer.create(
        <DonateCard
          onSubmit={jest.fn()}
          className={'test-class'}
          item={mockItem}
        />
      );
      const testInstance = testRenderer.root;
      act(() => {
        testInstance.findByProps({ id: 'donate-btn' }).props.onClick();
      });

      act(() => {
        testInstance.findByType(Modal).props.onClose();
      });

      expect(testInstance.findByProps({ visible: false })).toBeTruthy();
    });
  });
  it('submit form', () => {
    const mockOnSubmit = jest.fn();
    const mockFormEvent = {
      preventDefault: jest.fn(),
      target: { payment: { value: '10' }, reset: jest.fn() },
    };
    const mockItem = {
      id: '1',
      image: 'test.jpg',
      name: 'test',
      currency: 'THB',
    };
    const testRenderer = TestRenderer.create(
      <DonateCard
        onSubmit={mockOnSubmit}
        className={'test-class'}
        item={mockItem}
      />
    );
    const testInstance = testRenderer.root;
    act(() => {
      testInstance.findByProps({ id: 'donate-btn' }).props.onClick();
    });

    act(() => {
      testInstance.findByType(DonateForm).props.onSubmit(mockFormEvent);
    });
    expect(mockOnSubmit).toHaveBeenCalledWith(
      mockItem.id,
      parseInt(mockFormEvent.target.payment.value),
      mockItem.currency
    );
    expect(testInstance.findByProps({ visible: false })).toBeTruthy();
  });
});
