/* istanbul ignore file */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore, combineReducers, applyMiddleware } from "redux"
import reduxThunk from "redux-thunk"
import { Provider } from "react-redux"
import { auth, nav } from "./store/reducers";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { WORKOUTS_URL } from "./constants";

const client = new ApolloClient({
  uri: WORKOUTS_URL,
  cache: new InMemoryCache()
});

const rootReducer = combineReducers({
  auth,
  nav,
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>,
  document.getElementById('root')
);

