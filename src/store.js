// store.js

import { createStore, combineReducers } from 'redux';
import categoryReducer from './categoryReducer';

const rootReducer = combineReducers({
  category: categoryReducer
});

const store = createStore(rootReducer);

export default store;