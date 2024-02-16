import { API_OPTIONS, TOPRATED_MOVIE_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/movieSlice";
const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);
    const getTopRatedMovies = async () => {
      const data = await fetch(TOPRATED_MOVIE_API,
        API_OPTIONS
      );
  
      const json = await data.json();
      dispatch(addTopRatedMovies(json.results));
    };
  
    useEffect(() => {
        !topRatedMovies && getTopRatedMovies();
    },[]);
}

export default useTopRatedMovies;