import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchEpisodes = createAsyncThunk(
  'episodes/fetchEpisodes',
  async ({ page, search }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/episode`, {
        params: {
          page,
          name: search
        }
      });
      return response.data;
    } catch (error) {
      console.error('Episode API request error:', error);
      return rejectWithValue(error.response ? error.response.data : { message: error.message });
    }
  }
);

export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async ({ page, search }, { rejectWithValue }) => {
    try {
      const params = { page };
      const searchLower = search.toLowerCase();
      if (['alive', 'dead', 'unknown'].includes(searchLower)) {
        params.status = searchLower;
      } else if (['human', 'alien', 'robot', 'humanoid', 'poopybutthole', 'mythological', 'animal', 'robot' ].includes(searchLower)) { 
        params.species = searchLower;
      } else if (['male', 'female', 'genderless', 'unknown',].includes(searchLower)) {
        params.gender = searchLower;
      } else if (['earth', 'citidal', 'wordlender', 'unknown', ].includes(searchLower)) {
        params.location = searchLower;
      }
      else {
        params.name = search; // Fallback to name search if no match found
      }
      const response = await axios.get(`https://rickandmortyapi.com/api/character`, { params });
      return response.data;
    } catch (error) {
      console.error('Character API request error:', error);
      return rejectWithValue(error.response ? error.response.data : { message: error.message });
    }
  }
);

const episodesSlice = createSlice({
  name: 'episodes',
  initialState: {
    episodes: [],
    characters: [],
    page: 1,
    totalPages: 1,
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEpisodes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEpisodes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.episodes = action.payload.results;
        state.page = action.meta.arg.page;
        state.totalPages = action.payload.info.pages;
      })
      .addCase(fetchEpisodes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload ? action.payload.message : action.error.message;
      })
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
        state.error = action.payload ? action.payload.message : action.error.message;
      });
  }
});

export default episodesSlice.reducer;
