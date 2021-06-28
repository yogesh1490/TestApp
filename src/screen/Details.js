import React, {Fragment, useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import colors from '../resource/colors';
import Strings from '../resource/Strings';
import IconBack from 'react-native-vector-icons/Ionicons';

const Details = props => {
  const renderTitleBar = () => (
    <View style={[styles.headerContainer, {backgroundColor: colors.white}]}>
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={styles.titleBarView}>
        <IconBack
          style={[styles.searchIcon, styles.searchIconExtra]}
          size={27}
          name="arrow-back"
        />
      </TouchableOpacity>

      <View style={styles.titleBarViewMiddle}>
        <Text style={[styles.headerTextStyle, {color: colors.darkslategray}]}>
          {Strings.details}
        </Text>
      </View>
      <View style={styles.titleBarView} />
    </View>
  );

  return (
    <Fragment>
      <SafeAreaView style={styles.safeAreaView} />
      <SafeAreaView style={styles.safeAreaSubView}>
        <StatusBar
          hidden={false}
          backgroundColor={colors.white}
          barStyle="dark-content"
        />
        {renderTitleBar()}
        <ScrollView>
          <View style={styles.container}>
            <Image
              style={styles.imageTrackPicture}
              source={{
                uri: props.navigation.getParam('item', null).artworkUrl100,
              }}
            />
            <Text style={styles.trackTitleText}>
              {props.navigation.getParam('item', null).trackName
                ? props.navigation.getParam('item', null).trackName
                : props.navigation.getParam('item', null).collectionName}
            </Text>
            <Text style={styles.trackDetails}>
              {props.navigation.getParam('item', null).description
                ? props.navigation.getParam('item', null).description
                : props.navigation.getParam('item', null).collectionName}
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  safeAreaView: {flex: 0, backgroundColor: colors.white},
  safeAreaSubView: {flex: 1, backgroundColor: colors.white},
  headerContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 5,
    paddingLeft: 5,
    backgroundColor: 'black',
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#000',

    shadowOpacity: 0.0015 * 1 + 0.18,
    shadowRadius: 0.5 * 1,
    shadowOffset: {
      height: 0.6 * 4,
    },
    elevation: 5,
  },
  trackTitleText: {
    fontSize: 22,
    color: 'black',
    padding: 10,
    textAlign: 'center',
  },
  trackDetails: {fontSize: 16, color: 'black', padding: 20, paddingTop: 1},
  imageTrackPicture: {
    height: 200,
    width: 100,
    borderColor: 'blue',
    borderRadius: 10,
    borderWidth: 2,
    marginTop: 20,
  },
  titleBarView: {flex: 0.2, justifyContent: 'center', alignItems: 'center'},
  titleBarViewMiddle: {flex: 0.6},
  headerTextStyle: {
    alignSelf: 'center',
    color: colors.lightpink,
    fontSize: 19,
    textAlign: 'center',
  },
});
export default Details;
