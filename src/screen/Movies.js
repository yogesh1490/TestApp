import React, {Fragment, useState, useEffect} from 'react';
import {
  StatusBar,
  SafeAreaView,
  Text,
  View,
  TextInput,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
  Keyboard,
  Platform,
} from 'react-native';

import Icons from 'react-native-vector-icons/AntDesign';
import IconSearch from 'react-native-vector-icons/EvilIcons';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as getMoviesListActionCreator from '../redux/action/getMoviesListAction';

import Strings from '../resource/Strings';

import colors from '../resource/colors';
var moment = require('moment');

const Movies = props => {
  const inputs = [];

  const [isFocusOnSearch, setIsFocusOnSearch] = useState(false);
  const [isSearchCloseVisible, setIsSearchCloseVisible] = useState(false);

  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    //default search for blade movie
    props.getMoviesActions.getMoviesListAction('Jack');
  }, [props.getMoviesActions]);

  const clearSearch = () => {
    inputs.textInput.clear();
    setIsSearchCloseVisible(false);

    setSearchValue('');
    props.getMoviesActions.getMoviesListAction('Jack');
    Keyboard.dismiss();
  };

  const searchFilterFunction = searchTxt => {
    const n = searchTxt.length;

    setIsSearchCloseVisible(n > 0);

    setSearchValue(searchTxt);

    props.getMoviesActions.getMoviesListAction(searchTxt);
  };

  const renderTitleBar = () => (
    <View style={[styles.headerContainer, {backgroundColor: colors.white}]}>
      <View style={styles.titleBarView} />
      <View style={styles.titleBarViewMiddle}>
        <Text style={[styles.headerTextStyle, {color: colors.darkslategray}]}>
          {Strings.movie}
        </Text>
      </View>
      <View style={styles.titleBarView} />
    </View>
  );

  const renderSearchBar = () => (
    <View style={styles.movieViewSearchBarContainer}>
      <View
        style={[
          styles.serachMain,
          {borderColor: isFocusOnSearch ? colors.royalblue : colors.dark_grey},
        ]}>
        <IconSearch
          style={[styles.searchIcon, styles.searchIconExtra]}
          size={27}
          name="search"
        />

        <TextInput
          onFocus={() => setIsFocusOnSearch(true)}
          onBlur={() => setIsFocusOnSearch(false)}
          style={styles.searchTextInput}
          keyboardType="ascii-capable"
          autoCapitalize="none"
          maxLength={20}
          placeholder={Strings.search_by}
          selectionColor={colors.blue}
          underlineColorAndroid="transparent"
          placeholderTextColor={colors.grey}
          accessible
          blurOnSubmit
          ref={input => {
            inputs.textInput = input;
          }}
          onChangeText={query => searchFilterFunction(query)}
        />
        {isSearchCloseVisible ? (
          <TouchableOpacity onPress={() => clearSearch()}>
            <Icons style={styles.searchIcon} size={20} name="close" />
          </TouchableOpacity>
        ) : (
          <View />
        )}
      </View>
    </View>
  );

  const renderMovieItemView = item => (
    <TouchableOpacity
      onPress={() =>
        props.navigation.navigate('Details', {
          item,
        })
      }>
      <View style={styles.rowMovieViewContainer}>
        <View style={styles.rowImageStyle}>
          <Image
            style={styles.rowMovieImage}
            source={{
              uri: item.artworkUrl100,
            }}
          />
          <View style={styles.rowMovieTitle}>
            <Text style={styles.rowMovieTitleText}>
              {item.trackName ? item.trackName : item.collectionName}
            </Text>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.rowMovieTxtAddress}>
              {item.kind ? item.kind : item.wrapperType}
            </Text>

            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.rowMovieTxtAddress}>
              {`Artist: ${item.artistName}`}
            </Text>

            <Text style={styles.rowMovieDateText}>
              {`Released: ${moment(item.releaseDate).format('MMM DD, YYYY')}`}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
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
        <View style={styles.movieSearchBarView}>
          <View style={styles.movieContainerView}>
            {renderSearchBar()}

            <View style={styles.moviesListViewParent}>
              {props.getMoviesListData.length === 0 ? (
                <Text style={styles.moviesNotAvailableText}>
                  {props.isLoading ? '' : Strings.no_movie_to_show}
                </Text>
              ) : (
                <FlatList
                  data={
                    props.getMoviesListData !== undefined
                      ? props.getMoviesListData
                      : []
                  }
                  width={Dimensions.get('window').width}
                  alwaysBounceHorizontal={false}
                  bounces={false}
                  renderItem={({item}) => renderMovieItemView(item)}
                  keyExtractor={(item, index) => index.toString()}
                />
              )}
            </View>
          </View>
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
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
  titleBarView: {flex: 0.2},
  titleBarViewMiddle: {flex: 0.6},
  headerTextStyle: {
    alignSelf: 'center',
    color: colors.lightpink,
    fontSize: 19,
    textAlign: 'center',
  },

  serachMain: {
    flexDirection: 'row',
    height: 37,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 80 / 2,
    backgroundColor: colors.white,
    alignItems: 'center',

    width: '93%',
  },
  searchIcon: {
    color: colors.black,
    justifyContent: 'center',
    marginRight: 10,
  },
  searchIconExtra: {marginLeft: 5},
  searchTextInput: {
    flex: 1,
    fontSize: 15,
    justifyContent: 'center',
    color: 'black',
    fontFamily: 'RedHatDisplay-Regular',
  },
  rowImageStyle: {flexDirection: 'row', alignItems: 'center', marginTop: -5},
  rowMovieViewContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 15,
    marginBottom: 6,
    marginTop: 6,
    borderColor: colors.grey8,
    padding: 10,
    paddingTop: 15,
    paddingLeft: 12,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 7,
    borderTopLeftRadius: 8,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
  },
  movieContainer: {
    height: '100%',
    width: '100%',
  },

  movieSearchBarView: {flex: 1, flexDirection: 'column'},
  movieContainerView: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.white,
    alignContent: 'center',
    alignItems: 'center',
  },
  moviesListViewParent: {
    flex: 1,
    alignItems: 'center',
  },
  movieViewSearchBarContainer: {
    width: '93%',
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 13,
    backgroundColor: colors.whitesmoke1,
    marginTop: Platform.OS === 'android' ? 15 : 0,
  },

  rowMovieImage: {
    resizeMode: 'contain',
    width: 60,
    height: 60,
    backgroundColor: colors.grey,
    borderRadius: 5,
  },
  rowMovieTitleText: {
    fontSize: 16,
    color: colors.darkslategray,
    fontFamily: 'RedHatDisplay-Regular',
  },
  rowMovieTitle: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 15,
  },
  rowMovieTxtAddress: {
    fontSize: 12,
    color: colors.darkslategray1,
    fontFamily: 'RedHatDisplay-Regular',
    marginTop: 5,
  },
  rowMovieDateText: {
    fontSize: 14,
    color: colors.royalblue,
    fontFamily: 'RedHatDisplay-Bold',
    marginTop: 5,
  },
  rowMovieImageAttachement: {
    resizeMode: 'contain',
    width: 30,
    height: 30,
    margin: 5,
  },
  rowMovieTxtDate: {
    fontSize: 12,
    color: colors.grey,
    fontFamily: 'RedHatDisplay-Regular',
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
  },
  moviesNotAvailableText: {
    fontFamily: 'RedHatDisplay-Regular',
    marginTop: 50,
    fontSize: 18,
  },
});

const mapDispatchToProps = dispatch => ({
  getMoviesActions: bindActionCreators(getMoviesListActionCreator, dispatch),
});

const mapStateToProps = state => ({
  isLoading: state.getMoviesListReducer.isLoading,
  getMoviesListData: state.getMoviesListReducer.getMoviesListData,
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
