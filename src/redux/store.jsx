import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk'; 
import recipesReducer from './recepiesReducer';
import authReducer from './Signup/ReducerAuth';

const store = configureStore({
  reducer: {
    auth: authReducer,
    recipes: recipesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
