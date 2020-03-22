import { combineReducers, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from "redux-persist";
import thunk from 'redux-thunk';
import storage from '@react-native-community/async-storage';

import PersistReducer from './Reducers/PersistReducer';
import AuthReducer from './Reducers/AuthReducers';

const persistConfig = {
  // Root
  key: 'root',
  storage: storage,
  whitelist: [
    'PersistReducer',
  ],
  blacklist: [
    'AuthReducer',
  ],
};

const AppReduccer = combineReducers({
  AuthReducer,
  PersistReducer
});

const persistedReducer = persistReducer(persistConfig, AppReduccer);

const store = createStore(persistedReducer, applyMiddleware(thunk));
let persistor = persistStore(store);
export {
  store,
  persistor,
};