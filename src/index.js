import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './helpers/store';
import  {App}  from './components/App/App';

// setup fake backend
//import { configureFakeBackend } from './helpers/fake-backend';
//configureFakeBackend();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);