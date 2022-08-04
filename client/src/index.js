import React from 'react';
import { applyMiddleware, compose, createStore } from 'redux';
import App from './App';
import reducer from './reducers';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';



const store = createStore(reducer, compose(applyMiddleware(thunk)))
const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<Provider store={store}><App/></Provider>);

