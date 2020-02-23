import React from 'react';
import { Route, Switch } from "react-router-dom";
import App from './App';
import MerchantsPage from './components/merchant/MerchantsPage';
import ManageMerchantPage from './components/merchant/ManageMerchantPage'; //eslint-disable-line import/no-named-as-default

export default (
  <Switch>
    <Route path="/" component={App} />
    <Route path="merchants" component={MerchantsPage} />
    <Route path="merchant" component={ManageMerchantPage} />
    <Route path="merchant/:index" component={ManageMerchantPage} />
  </Switch>
);
