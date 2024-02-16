import { API_OPTIONS, UPCOMING_MOVIE_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/movieSlice";
const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const getUpcomingMovies = async () => {
      const data = await fetch(UPCOMING_MOVIE_API,
        API_OPTIONS
      );
  
      const json = await data.json();
      dispatch(addUpcomingMovies(json.results));
    };
  
    useEffect(() => {
        getUpcomingMovies();
    },[]);
}

export default useUpcomingMovies;