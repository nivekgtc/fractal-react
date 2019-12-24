import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../../services/history';

import beer from './beer';

export default combineReducers({
  beer,
  router: connectRouter(history),
});
