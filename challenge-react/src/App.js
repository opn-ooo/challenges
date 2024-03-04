import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { summaryDonations } from './helpers';

const Wrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: 960px;
  padding-right: 10px;
  padding-left: 10px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
  height: 200px;
`;


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;

const Card = styled.div`
  width: 47%;
  box-sizing: border-box;
  box-shadow: 4px 4px 8px 0 rgba(204, 204, 204, 0.75);
  -webkit-box-shadow: 4px 4px 8px 0 rgba(204, 204, 204, 0.75);
  -moz-box-shadow: 4px 4px 8px 0 rgba(204, 204, 204, 0.75);
  user-select: none;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
`;

const Content = styled.div`
  height: 400px;
  width: 100%;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  height: 50px;
`;

const Payment = styled.div`
  height: 400px;
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
  position: absolute;
  top: 0;
  z-index: 100;
  opacity: 0.95;
`;

const Button = styled.button`
  background-color: #fff;
  border: 1px solid #4A69F1;
  color: #4A69F1;
  height: 30px;
  border-radius: 3px;
`;

const Close = styled.div`
  height: 20px;
  width: 20px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 5px;
  font-size: 18px;

  &:hover {
    color: #999;
  }
`;

const Thank = styled.p`
  color: red;
  margin: 1em 0;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;

export default connect((state) => state)(
  class App extends Component {
    state = {
      charities: [],
      selectedAmount: 10,
      selectDonation: 2,
    };

    componentDidMount() {
      const self = this;
      fetch('http://localhost:3001/charities')
        .then(function(resp) {
          return resp.json();
        })
        .then(function(data) {
          self.setState({ charities: data });
        });

      fetch('http://localhost:3001/payments')
        .then(function(resp) {
          return resp.json();
        })
        .then(function(data) {
          self.props.dispatch({
            type: 'UPDATE_TOTAL_DONATE',
            amount: summaryDonations(data.map((item) => item.amount)),
          });
        });
    }

    render() {
      const self = this;
      const cards = this.state.charities.map(function(item, i) {
        const payments = [10, 20, 50, 100, 500].map((amount, j) => (
          <label key={j}>
            <input
              defaultChecked={amount === self.state.selectedAmount}
              type='radio'
              name='payment'
              onClick={function() {
                self.setState({ selectedAmount: amount });
              }}
            />
            {amount}
          </label>
        ));

        return (
          <Card key={i}>
            <Content>
              <Image src={`/images/${item.image}`} alt={item.name} />
              <Footer>
                <p>{item.name}</p>
                <Button onClick={function() {
                  self.setState({
                    selectDonation: item.id,
                    selectedAmount: 10,
                  });
                }}>Donate</Button>
              </Footer>
            </Content>
            {self.state.selectDonation === item.id && (
              <Payment>
                <Close onClick={function() {
                  self.setState({ selectDonation: 0 });
                }}>x</Close>
                <p>Select the amount to donate (USD)</p>
                <div>{payments}</div>
                <Button
                  onClick={async () => {
                    await handlePay(item.id, self.state.selectedAmount, item.currency);
                    self.setState({ selectDonation: 0 });
                  }}
                >
                  Pay
                </Button>
              </Payment>
            )}
          </Card>
        );
      });

      /**
       * Handle pay button
       *
       * @param {*} The charities Id
       * @param {*} amount The amount was selected
       * @param {*} currency The currency
       *
       * @example
       * fetch('http://localhost:3001/payments', {
       method: 'POST',
       body: `{ "charitiesId": ${id}, "amount": ${amount}, "currency": "${currency}" }`,
       })
       */
      async function handlePay(id, amount, currency) {
        const body = JSON.stringify({
          charitiesId: id,
          amount,
          currency,
        });
        const response = await fetch('http://localhost:3001/payments', {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body,
        });

        if (response.status === 201) {
          self.props.dispatch({
            type: 'UPDATE_TOTAL_DONATE',
            amount,
          });
          self.props.dispatch({
            type: 'UPDATE_MESSAGE',
            message: `Thank you for your donation of ${amount} ${currency}!`,
          });
        }
      }

      const donate = this.props.donate;
      const message = this.props.message;

      return (
        <Wrapper>
          <Header>
            <h1>Omise Tamboon React</h1>
            <p>All donations: {donate}</p>
            <Thank>{message}</Thank>
          </Header>
          <Container>
            {cards}
          </Container>
        </Wrapper>
      );
    }
  }
);
