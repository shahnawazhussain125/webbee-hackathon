import {createSlice} from '@reduxjs/toolkit';
import {CategoryType} from '@types';
import {RootState} from '../store';
import {produce} from 'immer';

interface AppState {
  categories: CategoryType[];
}

const initialState: AppState = {
  categories: [],
};

export const categorySlice = createSlice({
  name: 'machine',
  initialState: initialState,
  reducers: {
    addCategory: (state, action) => {
      state.categories.push(action.payload);
    },
    removeCategory: (state, action) => {
      state.categories = state.categories.filter(
        category => category.id !== action.payload.categoryId,
      );
    },
    changeCategoryTitle: (state, action) => {
      const categoryIndex = state.categories.findIndex(
        category => category.id === action.payload.categoryId,
      );
      state.categories[categoryIndex].title = action.payload.value;
    },
    selectTitleField: (state, action) => {
      const categoryIndex = state.categories.findIndex(
        category => category.id === action.payload.categoryId,
      );

      state.categories[categoryIndex].item_title_key = action.payload.fieldKey;
    },

    addNewField: (state, action) => {
      const categoryIndex = state.categories.findIndex(
        category => category.id === action.payload.categoryId,
      );

      state.categories[categoryIndex].fields.push(action.payload.field);
    },
    changeFieldTitle: (state, action) => {
      const categoryIndex = state.categories.findIndex(
        category => category.id === action.payload.categoryId,
      );
      const fieldIndex = state.categories[categoryIndex].fields.findIndex(
        field => field.key === action.payload.fieldKey,
      );

      state.categories[categoryIndex].fields[fieldIndex].title =
        action.payload.value;
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

export const categoriesSelector = (state: RootState) =>
  state.categoryReducer.categories;
export const {
  addCategory,
  removeCategory,
  changeCategoryTitle,
  addNewField,
  removeField,
  changeFieldTitle,
  selectTitleField,
} = categorySlice.actions;
export default categorySlice.reducer;
