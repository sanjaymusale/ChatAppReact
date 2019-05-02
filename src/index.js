import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import configureStore from './components/redux/store/configureStore'

const store = configureStore()

store.subscribe(() => {
    console.log('state', store.getState())
})
const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
