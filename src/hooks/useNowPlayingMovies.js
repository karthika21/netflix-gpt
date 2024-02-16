import { API_OPTIONS, NOWPLAYING_MOVIE_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
      const data = await fetch(
        NOWPLAYING_MOVIE_API,
        API_OPTIONS
      );
  
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
    };
  
    useEffect(() => {
      getNowPlayingMovies();
    },[]);
}

export default useNowPlayingMovies;