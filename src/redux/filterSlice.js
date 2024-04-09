import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filter',
  initialState: {
    filters: '',
  },
  reducers: {
    filterContact: (state, action) => {
      state.name = action.payload;
    },
  },
  selectors: { selectFilter: state => state.filter.filters.name },
});

export const filterReducer = slice.reducer;
export const { filterContact } = slice.actions;
export const { selectFilter } = slice.selectors;
