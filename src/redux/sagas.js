import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { SET_COUNTRY_DATA, FETCH_COUNTRY_DATA_REQUEST } from './constant';

function* fetchCountryData(action) {
  try {
    const response = yield call(axios.get, `https://api.covid19api.com/total/country/${action.payload}`);
    yield put({ type: SET_COUNTRY_DATA, payload: response.data });
  } catch (error) {
    console.error('API çağrısı sırasında bir hata oluştu:', error);
  }
}

function* watchFetchCountryData() {
  yield takeEvery(FETCH_COUNTRY_DATA_REQUEST, fetchCountryData);
}

export default watchFetchCountryData;
