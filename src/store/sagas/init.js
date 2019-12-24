import { call, put } from 'redux-saga/effects';

import { Creators } from '../ducks/beer';

import api from '../../services/api';

export function* init() {
  try {
    const response = yield call([api, 'get'], 'beers?page=1&per_page=25');
    yield put(Creators.getBeerListSuccess(response.data));
  } catch (err) {
    // Error code
  }
}
