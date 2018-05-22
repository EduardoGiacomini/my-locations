import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './store/reducers';

import Page from './components/Page';

const store = createStore(reducer);

export default class extends Component {
  render() {
    return (
      <Provider store={store}>
          <Page />
      </Provider>
    );
  }
}