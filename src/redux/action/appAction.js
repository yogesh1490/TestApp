import Constants from '../constants';

const updateNetSate = data => dispatch => {
  dispatch({
    type: Constants.NET_STATE_CHANGED,
    payload: data,
  });
};

export const requestStarted = () => dispatch => {
  dispatch({
    type: Constants.REQUEST_STARTED,
  });
};

export const requestCompleted = () => dispatch => {
  dispatch({
    type: Constants.REQUEST_COMPLETED,
  });
};

export const isConnectionStateChanged = netState => dispatch => {
  dispatch(updateNetSate(netState));
};
