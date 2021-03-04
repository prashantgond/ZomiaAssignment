/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import RegistartionForm from './src/screens/RegistartionScreen/RegistartionForm';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import rootReducer from './src/redux/reducer';
import mySaga from './src/redux/sagas';


const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(mySaga);

const App = () => {

  console.disableYellowBox = true
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <RegistartionForm />
      </SafeAreaView>
    </Provider>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
