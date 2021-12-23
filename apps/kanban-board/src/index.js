import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';
import App from './App';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
import throttle from 'lodash/throttle';
import { loadState, saveState } from './localStorage';


const persistedState = loadState();

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
   reducers,
   persistedState,
   devTools
)

store.subscribe(throttle(() => {
   saveState({
      board: store.getState().board
   });
}, 1000));


ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>
   , document.getElementById('root'));
registerServiceWorker();