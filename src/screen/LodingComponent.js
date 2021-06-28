import React from 'react';
import {Text, StyleSheet, ActivityIndicator, SafeAreaView} from 'react-native';
import colors from '../resource/colors';

const LoadingComponent = props => (
  <SafeAreaView style={styles.loaderParent}>
    <ActivityIndicator size="large" color="black" />
    <Text style={styles.loaderTxt}>{'Loading...'}</Text>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderParent: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderTxt: {
    color: 'black',
    marginTop: 10,
    fontWeight: '600',
    fontSize: 20,
  },
  buttonStyle: {
    height: 40,
    width: '70%',
    borderRadius: 2,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.appGreen,
  },
});

export default LoadingComponent;
