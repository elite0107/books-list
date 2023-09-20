import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SearchQueryState } from 'types/searchQuery';

// Define the initial state using that type
const initialState: SearchQueryState = {
  query: '',
};

export const searchQuerySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setSearchQuery: (_, action: PayloadAction<string>) => {
      return { query: action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSearchQuery } = searchQuerySlice.actions;

export default searchQuerySlice.reducer;
