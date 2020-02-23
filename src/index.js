import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { ConnectedRouter } from 'react-router-redux';
import { loadMerchants } from './actions/merchantActions';
import 'bootstrap/dist/css/bootstrap.css'
import 'toastr/build/toastr.min.css'
import createHistory from 'history/createBrowserHistory';
import App from './App';
const history = createHistory();
const store = configureStore();
store.dispatch(loadMerchants());

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
          <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
