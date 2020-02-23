import {
  FETCH_API_DATA_START,
  FETCH_API_DATA_SUCCESS,
  FETCH_API_DATA_FAIL
} from './api.types';
const INITIAL_STATE = {
  data: [],
  loading: false,
  dataFetchError: []
};

const apiReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_API_DATA_START:
      return {
        ...state,
        loading: true
      };
    case FETCH_API_DATA_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false
      };
    case FETCH_API_DATA_FAIL:
      return {
        ...state,
        loading: false,
        dataFetchError: payload
      };
    default:
      return state;
  }
};

export default apiReducer;
