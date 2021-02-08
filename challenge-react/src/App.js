import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import fetch from "isomorphic-fetch";
import { summaryDonations, addCommaNumber } from "./helpers";
import Card from "./Card";

let triggerClearMsg;

const DonateProject = styled.div`
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
  padding-right: 15px;
  padding-left: 15px;

  .donate__title {
    color: #5c6781;
    text-align: center;
  }
  .donate__rowDesc {
    margin-left: 8px;
    margin-right: 8px;
    margin-bottom: 16px;
  }
  .donate__rowCard {
    display: flex;
    flex-wrap: wrap;
    .donate__columnCard {
      flex: 1 0 50%;
      max-width: 50%;
      position: relative;
      width: 100%;
      @media only screen and (max-width: 767px) {
        flex: 0 0 100%;
        max-width: 100%;
      }
      min-height: 313px;
      .card {
        margin-left: 8px;
        margin-right: 8px;
        margin-bottom: 16px;
        min-height: 315px;
        @media only screen and (max-width: 767px) {
          min-height: 370px;
        }
      }
    }
  }

  .donate__boxAlert {
    min-height: 60px;
  }
  .donate__alert {
    margin-top: 16px;
    margin-bottom: 16px;
    padding: 20px;
    background-color: #2196f3;
    color: white;
    animation: fadeIn 0.5s;
  }
  .donate__AlertClose {
    margin-left: 15px;
    color: white;
    font-weight: bold;
    float: right;
    font-size: 22px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      color: black;
    }
  }
`;
const App = () => {
  const [charities, setCharities] = useState([]);
  const [selectedAmount, setSelectedAmount] = useState(10);
  const [showDonate, setShowDonate] = useState(0);
  const [dataPayments, setDataPayments] = useState([]);

  const donate = useSelector((state) => state.donate);
  const message = useSelector((state) => state.message);

  const dispatch = useDispatch();

  const clearAlert = () => {
    dispatch({
      type: "UPDATE_MESSAGE",
      message: "",
    });
    clearTimeout(triggerClearMsg);
  };

  useEffect(() => {
    fetch("http://localhost:3001/charities")
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setCharities(data);
      });

    fetch("http://localhost:3001/payments")
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setDataPayments(data);
        dispatch({
          type: "UPDATE_TOTAL_DONATE",
          amount: summaryDonations(data.map((item) => item.amount)),
        });
      });
  }, []);

  const handlePay = (id, amount, currency) => {
    clearAlert();

    fetch("http://localhost:3001/payments", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: `{ "charitiesId": ${id}, "amount": ${amount}, "currency": "${currency}" }`,
    })
      .then(function (resp) {
        return resp.json();
      })
      .then(function () {
        dispatch({
          type: "UPDATE_TOTAL_DONATE",
          amount,
        });
        dispatch({
          type: "UPDATE_MESSAGE",
          message: `Thanks for donate ${amount}!`,
        });
        triggerClearMsg = setTimeout(function () {
          clearAlert();
        }, 4000);
      })
      .then(function () {
        return fetch("http://localhost:3001/payments")
          .then((resp) => {
            return resp.json();
          })
          .then((data) => {
            setDataPayments(data);
          });
      });
  };

  const cards = charities.map((item, i) => {
    const dataPayment = dataPayments.filter(
      (data) => data.charitiesId == item.id
    );
    return (
      <div className="donate__columnCard" key={i}>
        <Card
          item={item}
          selectedAmount={selectedAmount}
          setSelectedAmount={setSelectedAmount}
          dispatch={dispatch}
          showDonate={showDonate}
          setShowDonate={setShowDonate}
          dataPayment={dataPayment}
          setDataPayments={setDataPayments}
          handlePay={handlePay}
        />
      </div>
    );
  });

  return (
    <DonateProject>
      <div className="donate__rowDesc">
        <h1 className="donate__title">Omise Tamboon React</h1>
        <p>All donations: {addCommaNumber(donate)}</p>
        <div className="donate__boxAlert">
          {message && (
            <div className="donate__alert">
              <span className="donate__AlertClose" onClick={clearAlert}>
                &times;
              </span>
              <p>{message}</p>
            </div>
          )}
        </div>
      </div>
      <div className="donate__rowCard">{cards}</div>
    </DonateProject>
  );
};

export default App;
