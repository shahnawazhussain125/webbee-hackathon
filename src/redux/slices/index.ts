import {combineReducers} from '@reduxjs/toolkit';
import workoutSlice from './appSlice';

const rootReducer = combineReducers({
  workoutReducer: workoutSlice,
});

export default rootReducer;
