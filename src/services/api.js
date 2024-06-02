import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api';

const api = axios.create({
  baseURL: API_URL,
});

export const getEpisodes = (page = 1) => api.get(`/episode?page=${page}`);
export const getEpisodeById = (id) => api.get(`/episode/${id}`);
export const getCharacterById = (id) => api.get(`/character/${id}`);
export const getCharacters = (name = '') => api.get(`/character?name=${name}`);


export default api;
