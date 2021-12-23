import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './../client/ducks';

export default () => {
   const store = createStore(reducers, {}, applyMiddleware(thunk));

   return store;
}