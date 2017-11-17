import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import { Router, Scene } from 'react-native-router-flux';

import allReducers from './reducers/index';

import Welcom from './components/welcom';
import RepoList from './components/repoList';
import RepoInfo from './components/repoInfo';

const store = createStore(allReducers, applyMiddleware(thunk));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root">
            <Scene key="Welcom" component={Welcom} hideNavBar title="Welcom" initial={true} />
            <Scene key="RepoList" component={RepoList} hideNavBar title="RepoList" />
            <Scene key="RepoInfo" component={RepoInfo} hideNavBar title="RepoInfo" />
          </Scene>
        </Router>
      </Provider>
  );
  }
}
