import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "Movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
        state.upcomingMovies = action.payload;
      },
  },
});

export const {
  addNowPlayingMovies,
  addMovieTrailer,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies
} = movieSlice.actions;
export default movieSlice.reducer;
