import { all, takeLatest } from 'redux-saga/effects';

import { init } from './init';

import { Creators as BeerActions, Types as BeerTypes } from '../ducks/beer';
import { loadBeers, loadBeer } from './beer';

export default function* rootSaga() {
  yield all([
    init(),
    takeLatest(BeerTypes.GET_BEER_LIST_REQUEST, loadBeers),
    takeLatest(BeerTypes.GET_BEER_DETAIL_REQUEST, loadBeer),
  ]);
}
