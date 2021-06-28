import Constant from '../constants';

const initialState = {
  isLoading: false,
  isConnected: true,
};

const appReducer = (state = initialState, action) => {
  // console.log('addFile details type @: ', action.type);
  switch (action.type) {
    case Constant.REQUEST_STARTED:
      return {
        isLoading: true,
      };
    case Constant.REQUEST_COMPLETED:
      return {
        isLoading: false,
      };
    case Constant.NET_STATE_CHANGED:
      return {
        isConnected: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
