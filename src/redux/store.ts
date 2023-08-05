import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import workoutSlice from './slices/workoutSlice';
import {REDUX_STORAGE_KEY} from '@constants';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  workoutReducer: workoutSlice,
});

const middleware =
  process.env.NODE_ENV !== 'production'
    ? [require('redux-immutable-state-invariant').default(), thunk, logger]
    : [thunk];

const persistedConfig = {
  key: REDUX_STORAGE_KEY,
  storage: AsyncStorage,
  blacklist: [],
};

const persistedStore = persistReducer(persistedConfig, rootReducer);

const store = configureStore({
  reducer: persistedStore,
  middleware,
});

const persistor = persistStore(store);

export {store, persistor};
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
