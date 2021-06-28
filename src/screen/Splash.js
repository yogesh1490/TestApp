import React, {Component, Fragment} from 'react';
import {StyleSheet, StatusBar, SafeAreaView, Text, View} from 'react-native';

import Strings from '../resource/Strings';

import colors from '../resource/colors';
import NavigationService from '../redux/NavigationService';

class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      NavigationService.replace('Movies');
    }, 2000);
  }

  render() {
    return (
      <Fragment>
        <SafeAreaView style={styles.safeAreaView} />
        <SafeAreaView style={styles.safeAreaSubView}>
          <StatusBar hidden />
          <View style={styles.splashContainer}>
            <View style={styles.textView}>
              <Text style={styles.splashText}>{Strings.app_name}</Text>
            </View>
          </View>
        </SafeAreaView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  splashContainer: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeAreaView: {flex: 0, backgroundColor: colors.lightslategray},
  safeAreaSubView: {flex: 1, backgroundColor: colors.lightslategray},
  splashText: {
    color: colors.white,
    fontWeight: '500',
    fontSize: 48,
    fontFamily: 'RedHatDisplay-Regular',
  },
  textView: {flexDirection: 'row', alignItems: 'center'},
});

export default Splash;
