import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import produce from 'immer';

// GET ALL QUEUES THUNK
export const GetUserRecentActivity = createAsyncThunk(
  'workout/recent_activity',
  async (data, {fulfillWithValue, rejectWithValue}) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      };

      return fulfillWithValue({});
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const workoutSlice = createSlice({
  name: 'workout',
  initialState: {
    activities: [],
  },
  extraReducers: builder => {
    // builder.addCase(GetUserRecentActivity.fulfilled, (state, action) => {
    //   state.activites = action.payload.subscribed;
    // });
  },
});

export default workoutSlice.reducer;
