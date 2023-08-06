import {createSlice} from '@reduxjs/toolkit';
import {CategoryType} from '@types';
import {produce} from 'immer';
import {RootState} from '../store';

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

    addNewItem: (state, action) => {
      const categoryIndex = state.categories.findIndex(
        category => category.id === action.payload.categoryId,
      );

      state.categories[categoryIndex].items.push(action.payload.item);
    },
    removeItem: (state, action) => {
      const {categoryId, itemId} = action.payload;
      const categoryIndex = state.categories.findIndex(
        category => category.id === categoryId,
      );

      state.categories[categoryIndex].items = state.categories[
        categoryIndex
      ].items.filter(item => item.id !== itemId);
    },
    changeItemFieldValue: (state, action) => {
      const {categoryId, itemId, fieldKey, value} = action.payload;

      const categoryIndex = state.categories.findIndex(
        category => category.id === categoryId,
      );

      const itemIndex = state.categories[categoryIndex].items.findIndex(
        item => item.id === itemId,
      );

      const valueIndex = state.categories[categoryIndex].items[
        itemIndex
      ].values.findIndex(value => value.key === fieldKey);

      console.log('valueIndex', valueIndex);
      console.log('itemIndex', itemIndex);
      console.log('categoryIndex', categoryIndex);

      if (valueIndex === -1) {
        state.categories[categoryIndex].items[itemIndex].values.push({
          key: fieldKey,
          value: value,
        });
        return;
      }

      state.categories[categoryIndex].items[itemIndex].values[
        valueIndex
      ].value = value;
    },
  },
});

export const categoriesSelector = (state: RootState) =>
  state.appReducer.categories;
export const {
  addCategory,
  removeCategory,
  changeCategoryTitle,
  addNewField,
  removeField,
  changeFieldTitle,
  selectTitleField,
  ///
  addNewItem,
  removeItem,
  changeItemFieldValue,
} = appSlice.actions;
export default appSlice.reducer;
