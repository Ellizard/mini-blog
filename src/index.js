import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import rootReducer from './redux/reducers';
import {Provider} from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';


//const store = createStore(rootReducer, applyMiddleware(reduxThunk));

const store = createStore(rootReducer, composeWithDevTools(
	applyMiddleware(reduxThunk),
	// other store enhancers if any
));

const app = (
  <BrowserRouter>
	  <Provider store={store}>
		  <App />
	  </Provider>
  </BrowserRouter>
);

ReactDOM.render(
  <React.StrictMode>
      {app}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
