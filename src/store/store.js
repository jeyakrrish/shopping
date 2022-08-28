import { configureStore } from '@reduxjs/toolkit';
import  thunk  from 'redux-thunk';

import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { rootReducer } from './root.reducer';


const middlewares = [process.env.NODE_ENV !== 'production' && logger, thunk].filter(Boolean);  // OR !==production

const persistConfig = {
  key: 'root',           //persist whole thing,  start from root level
  storage,               //what do we want to store this into
  blacklist: ['user'],   //don't want to persist, bcz authListener will takeCare
  whitelist : ['cart'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,    // reducer:rootReducer
  middleware: middlewares,
});

export const persistor = persistStore(store);
