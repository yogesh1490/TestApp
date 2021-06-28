import Constant from '../constants';

const initialState = {
  getMoviesListData: [],
  getMoviesListerror: null,
  isLoading: false,
};

const getMoviesListReducer = (state = initialState, action) => {
  switch (action.type) {
    case Constant.GET_MOVIES_LIST_SUCCESS:
      return {
        getMoviesListData: action.payload,
        getMoviesListerror: null,
        isLoading: false,
      };
    case Constant.GET_MOVIES_LIST_FAILED:
      return {
        getMoviesListData: [],
        getMoviesListerror: action.payload,
        isLoading: false,
      };
    case Constant.GET_MOVIES_LIST_PENDING:
      return {
        getMoviesListData: [],
        getMoviesListerror: null,
        isLoading: true,
      };
    case Constant.RESET_STORE:
      return {
        getMoviesListData: [],
        getMoviesListerror: null,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default getMoviesListReducer;
