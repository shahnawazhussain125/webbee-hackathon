import {combineReducers} from '@reduxjs/toolkit';
import workoutSlice from './workoutSlice';

const rootReducer = combineReducers({
  workoutReducer: workoutSlice,
});

export default rootReducer;
