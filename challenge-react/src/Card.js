import React, { useState } from "react";
import styled from "styled-components";
import { addCommaNumber } from "./helpers";

const BoxCard = styled.div`
  border: 1px solid #ccc;
  position: relative;
  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    @media only screen and (max-width: 767px) {
      height: 300px;
    }
  }
  .card__donate {
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .card__showBoxDonate {
      text-align: center;
      height: 25px;
      font-weight: 500;
      background: transparent;
      color: #5284ee;
      border: 2px solid #517af1;
      border-radius: 6px;
      width: 65px;
      cursor: pointer;
    }
  }

  .card__boxShowDonate {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #fff;
    opacity: 0.95;
    animation: fadeIn 0.5s;
    .card__showDonate {
      top: 40%;
      left: 50%;
      transform: translateX(-50%);
      position: relative;
      width: fit-content;
      display: flex;
      flex-direction: column;
    }
    .card__closedDonate {
      display: block;
      width: 16px;
      height: 16px;
      opacity: 0.3;
      top: 10px;
      right: 15px;
      cursor: pointer;
      position: absolute;
      &:hover {
        opacity: 1;
      }
      &:before,
      &:after {
        position: absolute;
        left: 7px;
        content: " ";
        height: 16px;
        width: 2px;
        background-color: #333;
      }
      &:before {
        transform: rotate(45deg);
      }
      &:after {
        transform: rotate(-45deg);
      }
    }
  }

  .card__buttonPay {
    text-align: center;
    height: 25px;
    font-weight: 500;
    background: transparent;
    color: #5284ee;
    border: 2px solid #517af1;
    border-radius: 6px;
    width: 65px;
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
  }
  .card__textSelectDonate,
  .card__boxSelectPay {
    margin-bottom: 10px;
    text-align: center;
  }
  .card__allDonate {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: fit-content;
  }

  .card__containerRadio {
    display: inline-block;
    position: relative;
    margin-left: 0px;
    padding-left: 32px;
    width: fit-content;
    margin-right: 10px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 16px;
    user-select: none;

    &:hover input ~ .checkmark {
      background-color: #ccc;
    }
    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      &:checked ~ .checkmark {
        background-color: #2196f3;
        &:after {
          display: block;
        }
      }
    }
    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 25px;
      width: 25px;
      background-color: #eee;
      border-radius: 50%;
      &:after {
        content: "";
        position: absolute;
        display: none;
        top: 9px;
        left: 9px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: white;
      }
    }
  }
`;

const Card = (props) => {
  const {
    item = {},
    selectedAmount,
    setSelectedAmount,
    showDonate = 0,
    setShowDonate,
    dataPayment = [],
    handlePay,
  } = props;

  const allDonate = dataPayment.reduce((sum, number) => {
    return sum + number.amount;
  }, 0);

  const openShowDonate = (val) => {
    setShowDonate(val);
    setSelectedAmount(10);
  };

  const closeShowDonate = () => {
    setShowDonate(0);
    setSelectedAmount(10);
  };

  const payments = [10, 20, 50, 100, 500].map((amount, j) => (
    <label key={j} className="card__containerRadio">
      <input
        type="radio"
        name="payment"
        checked={amount === selectedAmount}
        onChange={() => {
          setSelectedAmount(amount);
        }}
      />
      <span className="checkmark"></span> {amount}
    </label>
  ));

  return (
    <BoxCard className="card">
      <img src={`/images/${item.image}`} alt={item.name} />
      {(showDonate == 0 || showDonate != item.id) && (
        <div className="card__donate">
          <p>{item.name}</p>
          <div
            className="card__showBoxDonate"
            onClick={() => openShowDonate(item.id)}
          >
            Donate
          </div>
        </div>
      )}
      {showDonate == item.id && (
        <div className="card__boxShowDonate">
          <div className="card__showDonate">
            <span className="card__textSelectDonate">
              Select the amount to donate (THB)
            </span>
            <div className="card__boxSelectPay">{payments}</div>
            <div
              className="card__buttonPay"
              onClick={() => handlePay(item.id, selectedAmount, item.currency)}
            >
              Pay
            </div>
          </div>
          <div className="card__allDonate">
            You donate the charity : {addCommaNumber(allDonate)} THB
          </div>
          <span className="card__closedDonate" onClick={closeShowDonate} />
        </div>
      )}
    </BoxCard>
  );
};

export default Card;
