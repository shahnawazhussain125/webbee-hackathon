import {createSlice} from '@reduxjs/toolkit';
import {ItemType} from '@types';
import {RootState} from '../store';
import {produce} from 'immer';

interface AppState {
  items: ItemType[];
}

const initialState: AppState = {
  items: [],
};

export const itemSlice = createSlice({
  name: 'item',
  initialState: initialState,
  reducers: {
    addNewItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const {itemId} = action.payload;

      state.items = state.items.filter(item => item.id !== itemId);
    },
    changeItemFieldValue: (state, action) => {
      const {itemId, fieldKey, value} = action.payload;

      const itemIndex = state.items.findIndex(item => item.id === itemId);

      const valueIndex = state.items[itemIndex].values.findIndex(
        value => value.key === fieldKey,
      );

      if (valueIndex === -1) {
        state.items[itemIndex].values.push({
          key: fieldKey,
          value: value,
        });
        return;
      }

      state.items[itemIndex].values[valueIndex].value = value;
    },
  },
});

export const itemsSelector = (state: RootState) => state.itemReducer.items;
export const {addNewItem, removeItem, changeItemFieldValue} = itemSlice.actions;
export default itemSlice.reducer;
