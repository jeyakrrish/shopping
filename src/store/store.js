import { applyMiddleware, compose, configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';

import { rootReducer } from './root.reducer';

const loggedMiddleware = (store) => (next) => (action) => {
  if (!action.type) return next(action);

  console.log("===>Current state", store.getState());
  console.log("===>Type", action.type);
  console.log("===>Payload", action.payload);

  next(action);

  console.log("===>Next state", store.getState());

}

const middleware = [loggedMiddleware];

const composedEnhancer = compose(applyMiddleware(...middleware));

export const store = configureStore({
  reducer: rootReducer,
  middleware,
});