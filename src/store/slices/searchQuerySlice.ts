import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SearchQueryState } from 'types/searchQuery';

// Define the initial state using that type
const initialState: SearchQueryState = {
  query: localStorage.getItem('search-query') ?? '',
  pageStartNum: parseInt(localStorage.getItem('page-start-number') ?? '0'),
};

export const searchQuerySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setPageStartNum: (state, action: PayloadAction<number>) => {
      state.pageStartNum = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSearchQuery, setPageStartNum } = searchQuerySlice.actions;

export default searchQuerySlice.reducer;
