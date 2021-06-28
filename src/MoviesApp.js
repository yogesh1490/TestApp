import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Text, TextInput} from 'react-native';

import configureStore from './redux/store';
import AppContainer from './AppContainer';

const store = configureStore();

Text.defaultProps = {...(Text.defaultProps || {}), allowFontScaling: false};
TextInput.defaultProps = {...(TextInput.defaultProps || {}), allowFontScaling: false};

export default class SmappApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
