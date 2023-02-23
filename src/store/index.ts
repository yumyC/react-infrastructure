import { configureStore, combineReducers } from '@reduxjs/toolkit'
import colorReducer from './themes/slice'

const reducer = combineReducers({
  theme: colorReducer,
});

const store = configureStore({
  reducer,
});

export default store;
