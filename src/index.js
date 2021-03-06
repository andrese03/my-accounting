import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import reducers from './reducers'
import registerServiceWorker from './registerServiceWorker';


let store = createStore(reducers)

console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
