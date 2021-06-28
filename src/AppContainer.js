import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import NetInfo from '@react-native-community/netinfo';

import * as appActionCreator from './redux/action/appAction';
import Internet from './screen/Internet';
import LoadingComponent from './screen/LodingComponent';
import NavigationService from './redux/NavigationService';
import AppNavigator from './AppNavigator';

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInternetWarningShow: false,
    };
  }

  componentDidMount() {
    NetInfo.addEventListener(this._handleConnectivityChange);
  }

  _handleConnectivityChange = state => {
    this.props.appActions.isConnectionStateChanged(state.isConnected);
  };

  componentWillUnmount() {
    NetInfo.removeEventListener(this._handleConnectivityChange);
  }

  onTryAgainClick = () => {
    if (this.props.isConnected) {
      this.props.appActions.isConnectionStateChanged(true);
    } else {
      this.setState({isInternetWarningShow: true});
      setTimeout(() => {
        this.setState({isInternetWarningShow: false});
      }, 2000);
    }
  };

  render() {
    return (
      <View style={{flex: 1,}}>
        <AppNavigator
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
        {this.props.isLoading ? <LoadingComponent /> : <View />}
        {!this.props.isConnected && this.props.isConnected !== undefined ? (
          <Internet
            onTryAgainClick={this.onTryAgainClick}
            isInternetWarningShow={this.state.isInternetWarningShow}
          />
        ) : (
          <View />
        )}
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    isLoading: state.appReducer.isLoading,
    isConnected: state.appReducer.isConnected,
  };
}
const mapDispatchToProps = dispatch => ({
  appActions: bindActionCreators(appActionCreator, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
