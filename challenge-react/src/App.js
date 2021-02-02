import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import { connect } from 'react-redux';
import { summaryDonations } from './helpers';
import { styleCss } from './styling'
import Alert from '@material-ui/lab/Alert';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charities: [],
      selectedAmount: 10,
    };
    this.handlePay = this.handlePay.bind(this);
    this.showHide = this.showHide.bind(this)
    this.closePaymentModal = this.closePaymentModal.bind(this);
  }

  closePaymentModal() {
    const { charities } = this.state;
    charities.map((charity, i) => {
      if (charity.show) {
        charity.show = false;
      }
    });
    this.setState( {charities})
    // reset selected amount once click donate to another charity
    this.setState( {selectedAmount: 10})
  }


  showHide(e) {
    const { charities } = this.state;
    const currentCharity= e.target.id -1;
    // To make sure other payment modal is closed before open the current one
    this.closePaymentModal();
    charities[currentCharity].show = !charities[currentCharity].show ? true : false;
    this.setState( {charities})
}

  componentDidMount() {
    const self = this;
    fetch('http://localhost:3001/charities')
      .then(function (resp) {
        return resp.json();
      })
      .then(function (data) {
        self.setState({ charities: data });
      }).catch(function() {
        self.props.dispatch({
          type: 'UPDATE_MESSAGE',
          message: 'Something wrong! Please try again later',
          status: 'error',
        });
    });

    fetch('http://localhost:3001/payments')
      .then(function (resp) {
        return resp.json();
      })
      .then(function (data) {
        self.props.dispatch({
          type: 'UPDATE_TOTAL_DONATE',
          amount: summaryDonations(data.map((item) => item.amount)),
        });
      }).catch(function() {
        self.props.dispatch({
          type: 'UPDATE_MESSAGE',
          message: 'Cannot display full amount of donation',
          status: 'error',
        });
    });
  }


  handlePay(formSubmitEvent) {
    formSubmitEvent.preventDefault();
    const self = this;
    const charityID = formSubmitEvent.target[0].value;

    fetch('http://localhost:3001/payments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: `{ "charitiesId": ${charityID}, "amount": ${self.state.selectedAmount}, "currency": "THB" }`,
    })
    .then(function (resp) {
      return resp.json();
    })
    .then(function (result) {
      const successCharityPayment = self.state.charities.find(charity => charity.id === result.charitiesId);
      self.props.dispatch({
        type: 'UPDATE_TOTAL_DONATE',
        amount: result.amount,
      });
      self.props.dispatch({
        type: 'UPDATE_MESSAGE',
        message: `Payment succesfully! You have donted to ${successCharityPayment.name} for ${result.amount} THB`,
        status: 'success',
      });

    }).catch(function() {
      self.props.dispatch({
        type: 'UPDATE_MESSAGE',
        message: 'Sorry we can not process your payment. Please try again later.',
        status: 'error',
      });
  });
  }

  render() {
    const self = this;
    const cards = this.state.charities.map(function (item, i) {
      const imagePath = `/images/${item.image}`
      const payments = [10, 20, 50, 100, 500].map((amount, j) => (
          <label key={j}>
            <input
              type="radio"
              name="payment"
              value={amount}
              checked={self.state.selectedAmount === amount}
              onChange={event =>
                self.setState({
                  selectedAmount: parseInt(event.target.value, 10),
                })}
            />
            {amount}
          </label>
        ));

      let donatePayment = null;
      if (item.show) {
        donatePayment = (<styleCss.PaymentFormDiv>
          <span id={item.id} className="close" onClick={self.closePaymentModal}>&times;</span>
          <div className="payment-section">
            <form onSubmit={self.handlePay}>
            <input type='hidden' id='charityId' name='charityId' value={item.id} />
        <p>Select the amount to donate ({item.currency})</p>
            {payments}
            <br></br>
            <styleCss.Button className="paymentButton" type="submit">Pay</styleCss.Button>
            </form>
          </div>

          </styleCss.PaymentFormDiv>);
      }

      return (
        <styleCss.Card key={i} id={item.id} className="donate-card">
          <div>
            <img className="charity-img" src={imagePath} />
          </div>
          <div className="donate-section">
            <p>{item.name}</p>
            <styleCss.Button ref={button => self.closemodal = button} variant="outlined" color="primary" id={item.id} onClick={self.showHide}>Donate</styleCss.Button>
          </div>

          {donatePayment}

        </styleCss.Card>
      );
    });


    const donate = this.props.donate;
    const message = this.props.message;
    let alert = null;
    if (this.props.status === 'success') {
      alert = (<Alert severity="success" >{message}</Alert>);
      setTimeout(()=> {
        self.props.dispatch({
          type: 'UPDATE_MESSAGE',
          message: '',
          status: '',
        });
      }, 4000);

    } else if (this.props.status === 'error') {
      alert = (<Alert severity="error" >{message}</Alert>);
      setTimeout(()=> {
        self.props.dispatch({
          type: 'UPDATE_MESSAGE',
          message: '',
          status: '',
        });
      }, 4000);
    }

    return (
      <styleCss.Main>
        {alert}
        <div className="title">
          <h1>Omise Tamboon React</h1>
          <p>All donations: {donate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} THB</p>
        </div>
        <div className="cards-div">
          {cards}
        </div>
      </styleCss.Main>
    );
  }
}

export default connect((state) => state)(App);

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
