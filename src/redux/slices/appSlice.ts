import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {CategoryType} from '@types';
import {produce} from 'immer';

interface AppState {
  categories: CategoryType[];
}

const initialState: AppState = {
  categories: [],
};

export const appSlice = createSlice({
  name: 'machine',
  initialState: initialState,
  reducers: {
    addCategory: (state, action) => {
      state.categories.push(action.payload);
    },
    removeCategory: (state, action) => {
      return produce(state, draft => {
        draft.categories = draft.categories.filter(
          category => category.id !== action.payload,
        );
      });
    },
    updateCategory: (state, action) => {
      return produce(state, draft => {
        const categoryIndex = draft.categories.findIndex(
          category => category.id === action.payload.id,
        );
        draft.categories[categoryIndex] = action.payload;
      });
    },
    addNewField: (state, action) => {
      const categoryIndex = state.categories.findIndex(
        category => category.id === action.payload.categoryId,
      );

      state.categories[categoryIndex].fields.push(action.payload.field);
    },
    removeField: (state, action) => {
      const categoryIndex = state.categories.findIndex(
        category => category.id === action.payload.categoryId,
      );
      state.categories[categoryIndex].fields = state.categories[
        categoryIndex
      ].fields.filter(field => field.key !== action.payload.fieldKey);
    },
  },
});

export const categoriesSelector = state => state.appReducer.categories;
export const {
  addCategory,
  removeCategory,
  updateCategory,
  addNewField,
  removeField,
} = appSlice.actions;
export default appSlice.reducer;
