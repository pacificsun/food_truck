import { call, put, all, takeLatest } from 'redux-saga/effects';

import { FETCH_API_DATA_START } from './api.types';
import { SERVICE_URL } from '../../config';

import { fetchApiDataSuccess, fetchApiDataFail } from './api.actions';

// worker function
export function* fetchAllData() {
  try {
    const successResponse = yield fetch(SERVICE_URL);
    const parsedResponse = yield successResponse.json();
    yield put(fetchApiDataSuccess(parsedResponse));
    console.log('parsedResponse>>', parsedResponse);
  } catch (error) {
    yield put(fetchApiDataFail(error));
    console.log(error);
  }
}

//watcher function
export function* watchFetchAlllData() {
  yield takeLatest(FETCH_API_DATA_START, fetchAllData);
}

export function* apiDataSaga() {
  yield all([call(watchFetchAlllData)]);
}
