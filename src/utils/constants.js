export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const BG_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_medium.jpg";
export const USER_LOGO =
  "https://occ-0-2041-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229";
export const GITHUB_PROFILE =
  "https://avatars.githubusercontent.com/u/25986189?v=4";

export const MOVIE_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const UPCOMING_MOVIE_API = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

export const TOPRATED_MOVIE_API = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

export const POPULAR_MOVIE_API = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

export const NOWPLAYING_MOVIE_API = "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const SUPPORTED_LANG = [
  { identifier: "en", name: "English" },
  { identifier: "spanish", name: "Spanish" },
  { identifier: "tamil", name: "Tamil" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};
