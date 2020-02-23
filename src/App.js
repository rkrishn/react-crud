import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import './App.css';
import { Route, Switch, withRouter  } from "react-router-dom";
import MerchantsPage from './components/merchant/MerchantsPage';
import ManageMerchantPage from './components/merchant/ManageMerchantPage';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="container-fluid">
        <Switch>
          <Route exact path="/" component={MerchantsPage} />
          <Route exact path="/reactcrud" component={MerchantsPage} />
          <Route exact path="/reactcrud/merchant" component={ManageMerchantPage} />
          <Route path="/reactcrud/merchant/:index" component={ManageMerchantPage} />
        </Switch>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default withRouter (connect(mapStateToProps)(App));
