import axios from "axios";
import type { Movie } from "../types/movie";

export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const API_KEY = import.meta.env.VITE_TMDB_TOKEN;

axios.defaults.baseURL = "https://api.themoviedb.org/3";

axios.defaults.headers.common["Authorization"] = `Bearer ${API_KEY}`;

export const fetchMovies = async (
  query: string,
  page: number = 1,
): Promise<MovieResponse> => {
  const response = await axios.get<MovieResponse>("/search/movie", {
    params: {
      query,
      page,
      include_adult: false,
      language: "en-US",
    },
  });

  return response.data;
};
