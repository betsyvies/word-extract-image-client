//import { createStore } from 'redux';
import { initApp } from './container/initApp.js';
import reducer from './reducer.js';
const Redux = require('redux');

//let store = createStore(reducer);
let store = Redux.createStore(reducer)
store.subscribe(() => {
  initApp(store.getState())
});
