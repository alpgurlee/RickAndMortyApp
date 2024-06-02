import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      if (state.items.length < 10) {
        state.items.push(action.payload);
        AsyncStorage.setItem('favorites', JSON.stringify(state.items));
      }
    },
    removeFavorite: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      AsyncStorage.setItem('favorites', JSON.stringify(state.items));
    },
    setFavorites: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { addFavorite, removeFavorite, setFavorites } = favoritesSlice.actions;

export const loadFavorites = () => async dispatch => {
  const favorites = await AsyncStorage.getItem('favorites');
  if (favorites) {
    dispatch(setFavorites(JSON.parse(favorites)));
  }
};

export default favoritesSlice.reducer;
