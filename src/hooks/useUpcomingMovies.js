import { API_OPTIONS, UPCOMING_MOVIE_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/movieSlice";
const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const upcomingMovies = useSelector((store) => store.movies?.upcomingMovies);
    const getUpcomingMovies = async () => {
      const data = await fetch(UPCOMING_MOVIE_API,
        API_OPTIONS
      );
  
      const json = await data.json();
      dispatch(addUpcomingMovies(json.results));
    };
  
    useEffect(() => {
        !upcomingMovies && getUpcomingMovies();
    },[]);
}

export default useUpcomingMovies;