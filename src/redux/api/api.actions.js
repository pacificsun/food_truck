import {
  FETCH_API_DATA_START,
  FETCH_API_DATA_SUCCESS,
  FETCH_API_DATA_FAIL
} from './api.types';

export const fetchApiDataStart = () => ({
  type: FETCH_API_DATA_START
});

export const fetchApiDataSuccess = items => ({
  type: FETCH_API_DATA_SUCCESS,
  payload: items
});

export const fetchApiDataFail = error => ({
  type: FETCH_API_DATA_FAIL,
  payload: error
});
