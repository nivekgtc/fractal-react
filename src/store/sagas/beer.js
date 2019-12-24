import { call, put } from 'redux-saga/effects';

import { push } from 'connected-react-router';
import { Creators } from '../ducks/beer';

import api from '../../services/api';

export function* loadBeer({ payload }) {
  try {
    const response = yield call([api, 'get'], `beers/${payload.id}`);
    yield put(Creators.getBeerDetailsSuccess(response.data[0]));
    yield put(push('/beer'));
  } catch (err) {
    yield put(push('/'));
  }
}

export function* loadBeers({ payload }) {
  try {
    const response = yield call([api, 'get'], 'beers?page=1&per_page=25');
    yield put(Creators.getBeerListSuccess(response.data));
  } catch (err) {
    // Error code
  }
}
