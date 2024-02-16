import React, { useRef } from "react";
import { lang } from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const currLang = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  //Search Movie in TMDB API

  const searchMovieTmdb = async (movie) => {
    const movieResult = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await movieResult.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    //Make an API call to GPT to get movie results

    const gptQuery =
      "Act as a Movie recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma separated like the example given ahead. Example result : Bombay, Iruvar, Nayagan, Thalapathi, Mouna Raagam";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    // if(!gptResults.choices) // handle error

    const gptMovieResuts = gptResults.choices[0].message.content.split(",");

    //For each movie , call search movie of TMDB API
    const promiseArray = gptMovieResuts.map((movie) => searchMovieTmdb(movie));

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResults({
        movieNames: gptMovieResuts,
        movieResults: tmdbResults,
      })
    );
  };

  return (
    <div className="pt-[20%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className=" p-4 m-4 col-span-9"
          placeholder={lang[currLang].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[currLang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
