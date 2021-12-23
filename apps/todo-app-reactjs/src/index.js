import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import reducers from './reducers';

import App from './components/App';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
   <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
      <div>
         <BrowserRouter>
            <Switch>
               <Route to="/" component={App} />
            </Switch>
         </BrowserRouter>
      </div>
   </Provider>
   , document.getElementById('root'));
registerServiceWorker();


