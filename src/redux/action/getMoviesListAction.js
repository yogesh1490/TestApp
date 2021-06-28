import Constants from '../constants';
import {requestStarted, requestCompleted} from './appAction';
import api from '../../utils/api';

const axios = require('axios');

const getMoviesListSuccess = data => dispatch => {
  dispatch({
    type: Constants.GET_MOVIES_LIST_SUCCESS,
    payload: data,
  });
};

const getMoviesListFailure = error => dispatch => {
  dispatch({
    type: Constants.GET_MOVIES_LIST_FAILED,
    payload: error,
  });
};

const getMoviesListPending = () => dispatch => {
  dispatch({
    type: Constants.GET_MOVIES_LIST_PENDING,
  });
};

export const getMoviesListAction = searchText => (dispatch, getState) => {
  dispatch(getMoviesListPending());
  dispatch(requestStarted());

  console.log('getMoviesListAction: searchText: ', searchText);

  axios({
    method: 'get',
    url: api.baseUrl + 'search?term=' + searchText,

    data: {},
  })
    .then(function (response) {
      console.log('getMoviesListAction: response:', response.data);

      if (response.data) {
        dispatch(
          getMoviesListSuccess(
            response !== undefined ? response.data.results : [],
          ),
        );
      } else {
        dispatch(getMoviesListSuccess([]));
      }

      dispatch(requestCompleted());
    })
    .catch(function (error) {
      console.log('getMoviesListAction: error: ', error);
      dispatch(requestCompleted());
      dispatch(getMoviesListFailure(error));
    });
};
