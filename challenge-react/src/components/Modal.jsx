import React from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../actions';

/**
 *
 * @param {boolean} show triggers modal open
 * @param {() => void} onClickScrim handler for click outside modal
 * @param {boolean} hasColor scrim is translucent black when true (default true)
 * @returns JSX.Element
 */
const ModalScrim = ({ show, onClickScrim, hasColor, children }) => {
  if (!show) {
    return null;
  }

  return createPortal(
    <div
      className="modalScrim"
      onClick={onClickScrim}
      data-hascolor={hasColor ?? true}
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>,
    document.getElementById('app')
  );
};

/**
 *
 * @param {boolean} show triggers modal open
 * @param {() => void} onCancel handler for click on Cancel button
 * @param {() => void} onConfirm handler for click on Confirm button
 * @param {number} amount amount to be donated
 * @param {string} currency currency of money to be donated
 * @param {string} charityName name of charity to receive donation
 * @returns JSX.Element
 */
export const ConfirmDonationModal = ({
  show,
  onCancel,
  onConfirm,
  amount,
  currency,
  charityName,
}) => {
  return (
    <ModalScrim show={show}>
      <div className="modal confirmPaymentModal">
        <div className="modalGridCell header">
          <span>
            {/* TODO: l10n */}
            {'Please confirm your donation'}
          </span>
        </div>
        <div className="modalGridCell message">
          <span>
            {/* TODO: l10n */}
            {`Donate ${amount} ${currency} to ${charityName}?`}
          </span>
        </div>
        <div className="modalGridCell guidance">
          <span>
            {/* TODO: l10n */}
            {'This transaction will be completed only if you click "Confirm"'}
          </span>
        </div>
        <div className="modalGridCell actionButtonCell">
          <button
            className="borderedButton secondaryButton cancelButton"
            onClick={onCancel}
          >
            {/* TODO: l10n */}
            {'Cancel'}
          </button>
          <button className="borderedButton primaryButton" onClick={onConfirm}>
            {/* TODO: l10n */}
            {'Confirm'}
          </button>
        </div>
      </div>
    </ModalScrim>
  );
};

/**
 *
 * @param {boolean} show triggers modal open
 * @returns JSX.Element
 */
export const ErrorAlertModal = () => {
  const error = useSelector((s) => s.error);
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(actions.setError(null));
  };

  if (!error) {
    return null;
  }

  return (
    <ModalScrim show={error}>
      <div className="modal errorAlertModal">
        <div className="modalGridCell header">
          <span>{error.title}</span>
        </div>
        <div className="modalGridCell message">
          <span>{error.message}</span>
        </div>
        {/* TODO hide in production */}
        <div className="modalGridCell details">
          <pre>{error.original.toString()}</pre>
        </div>
        <div className="modalGridCell actionButtonCell">
          <button className="borderedButton primaryButton" onClick={onClose}>
            {/* TODO: l10n */}
            {'Close'}
          </button>
        </div>
      </div>
    </ModalScrim>
  );
};