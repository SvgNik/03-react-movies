import axios from "axios";
import type { MovieResponse } from "../types/movie";
const TOKEN = import.meta.env.VITE_TMDB_TOKEN; 
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (query: string, page: number = 1): Promise<MovieResponse> => {
  const { data } = await axios.get<MovieResponse>(`${BASE_URL}/search/movie`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      accept: 'application/json'
    },
    params: {
      query: query,
      page: page,
      language: "en-US",
      include_adult: false,
    },
  });
  
  return data;
};