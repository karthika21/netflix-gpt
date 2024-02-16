import { API_OPTIONS, NOWPLAYING_MOVIE_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((store) =>store.movies?.nowPlayingMovies);
    const getNowPlayingMovies = async () => {
      const data = await fetch(
        NOWPLAYING_MOVIE_API,
        API_OPTIONS
      );
  
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
    };
  
    useEffect(() => {
      !nowPlayingMovies && getNowPlayingMovies();
    },[]);
}

export default useNowPlayingMovies;