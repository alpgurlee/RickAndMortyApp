import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import episodesReducer from './slices/episodesSlice';
import charactersReducer from './slices/charactersSlice';
import favoritesReducer from './slices/favoritesSlice';

const rootReducer = combineReducers({
  episodes: episodesReducer,
  characters: charactersReducer,
  favorites: favoritesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
