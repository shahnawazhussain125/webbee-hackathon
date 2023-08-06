import {combineReducers} from '@reduxjs/toolkit';
import workoutSlice from './categorySlice';

const rootReducer = combineReducers({
  workoutReducer: workoutSlice,
});

export default rootReducer;
