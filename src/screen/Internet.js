import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Strings from '../resource/Strings.js';
import colors from '../resource/colors.js';

const Internet = props => (
  <SafeAreaView style={styles.safeAreaViewContainer}>
    <View style={styles.internetContainer}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      {props.isInternetWarningShow ? (
        <View style={styles.internetViewWarning}>
          <Text style={styles.internetTvWarning}>{Strings.please_turn_on}</Text>
        </View>
      ) : (
        <View />
      )}

      <View style={styles.internetViewTvImg}>
        <Image
          style={styles.internetWarningImageView}
          source={require('../resource/images/no_internet_connection.png')}
        />
        <Text style={styles.internetTextMsg}>
          {Strings.no_internet_connection}
        </Text>
        <Text style={styles.internetTvMsgIn}>
          {Strings.please_check_your_internet}
        </Text>
        <TouchableOpacity
          style={styles.internetBtnRequest}
          onPress={props.onTryAgainClick}>
          <Text style={styles.internetTxtRequest}>{Strings.try_again}</Text>
        </TouchableOpacity>
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  internetContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  internetViewWarning: {
    width: '100%',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
  },
  internetTvWarning: {
    color: colors.white,
    fontSize: 14,
    padding: 5,
    paddingTop: 3,
    paddingBottom: 3,
    fontFamily: 'RedHatDisplay-Regular',
  },
  internetWarningImageView: {
    width: 180,
    height: 130,
    marginBottom: 20,
  },
  internetTextMsg: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'RedHatDisplay-Regular',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  internetTvMsgInfo: {
    color: colors.grey4,
    fontSize: 12,
    fontFamily: 'RedHatDisplay-Regular',
    marginTop: 7,
    textAlign: 'center',
    marginRight: 40,
    marginLeft: 40,
  },
  internetBtnRequest: {
    width: 300,
    height: 50,
    justifyContent: 'center',
    backgroundColor: colors.royalblue,
    color: colors.white,
    marginTop: 100,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 4,
  },
  internetViewTvImg: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  internetTxtRequest: {
    color: colors.white,
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'RedHatDisplay-Regular',
  },
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: colors.white,
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
});

export default Internet;
