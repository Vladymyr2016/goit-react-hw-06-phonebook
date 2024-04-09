import { createReducer } from '@reduxjs/toolkit';
import { addContact, filterContact, removeContact } from './actions';

const initialState = {
  contacts: {
    items: [],
  },
  filters: {
    name: '',
  },
};

export const phoneBookReduser = createReducer(initialState, builder => {
  builder
    .addCase(removeContact, (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        item => item.id !== action.payload
      );
    })
    .addCase(addContact, (state, action) => {
      state.contacts.items.push(action.payload);
    })
    .addCase(filterContact, (state, action) => {
      state.filters.name = action.payload;
    });
});
