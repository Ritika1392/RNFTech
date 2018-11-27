import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
// import * as serviceWorker from './serviceWorker';
import App from './scripts/App';
import pollReducer from './reducers/pollReducer';


import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(pollReducer);



ReactDOM.render(
    <Provider store={store}>
<App />
</Provider>
, document.getElementById('root'));
// serviceWorker.unregister();
