import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async ({ page, search }) => {
    const response = await axios.get(`https://rickandmortyapi.com/api/character`, {
      params: {
        page,
        name: search
      }
    });

    const filteredResults = response.data.results.filter(character => 
      character.status.includes(search) ||
      character.species.includes(search) ||
      character.gender.includes(search) ||
      character.origin.name.includes(search) ||
      character.location.name.includes(search)
    );

    return { ...response.data, results: filteredResults };
  }
);

const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    characters: [],
    page: 1,
    totalPages: 1,
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.characters = action.payload.results;
        state.page = action.meta.arg.page;
        state.totalPages = action.payload.info.pages;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default charactersSlice.reducer;
