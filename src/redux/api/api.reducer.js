import {
  FETCH_API_DATA_START,
  FETCH_API_DATA_SUCCESS,
  FETCH_API_DATA_FAIL,
  SEARCH_FOOD
} from './api.types';
const INITIAL_STATE = {
  data: [],
  query: false,
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

    case SEARCH_FOOD:
      console.log('payload>>>', payload);
      return {
        ...state,
        query: true,
        filterData: state.data.filter(food => {
          console.log('food', food.fooditems);
          if (food.fooditems) {
            return (
              food.fooditems.toLowerCase().indexOf(payload.toLowerCase()) >= 0
            );
          }
          // return (
          //   food.fooditems.toLowerCase().indexOf(payload.toLowerCase()) >= 0
          // );
        })
      };
    default:
      return state;
  }
};

export default apiReducer;
