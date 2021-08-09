/* istanbul ignore file */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Amplify from "aws-amplify";
import aws_exports from "./aws-exports";
import { createStore, combineReducers, applyMiddleware } from "redux"
import reduxThunk from "redux-thunk"
import { Provider } from "react-redux"
import { auth, nav } from "./store/reducers";

const rootReducer = combineReducers({
  auth,
  nav,
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

Amplify.configure(aws_exports);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

