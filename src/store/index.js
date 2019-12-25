import { createStore, compose, applyMiddleware } from 'redux';

import { connectRouter, routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './ducks';

import history from '../services/history';

// Sagas
import rootSaga from './sagas';

const middlewares = [];

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;
const sagaMiddlewares = createSagaMiddleware({
  sagaMonitor,
});

middlewares.push(sagaMiddlewares);
middlewares.push(routerMiddleware(history));

const composer =
  process.env.NODE_ENV === 'development'
    ? compose(applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares);

const enhancer =
  process.env.NODE_ENV === 'development'
    ? compose(console.tron.createEnhancer(), applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares);

const store = createStore(connectRouter(history)(rootReducer), enhancer);

sagaMiddlewares.run(rootSaga);

export default store;
