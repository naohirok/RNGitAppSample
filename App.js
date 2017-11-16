import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import { Router, Scene } from 'react-native-router-flux';

import allReducers from './reducers/index';

import Welcom from './components/welcom';

const store = createStore(allReducers, applyMiddleware(thunk));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router hideNavBar="true">
          <Scene key="root">
            <Scene key="welcom" component={Welcom} title="Welcom" initial={true} />
          </Scene>
        </Router>
      </Provider>
  );
  }
}
