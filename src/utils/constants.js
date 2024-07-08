export const LOGO= require("./images/logo.png");
export const WHITELOGO= require("./images/white.png");
export const BGIMAGE= require("./images/background.png");

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANGUAGES = [
  {identifier: 'en', name: 'English'},
  {identifier: 'tamil', name: 'Tamil'},
  {identifier: 'hindi', name: 'Hindi'}
];

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer' + process.env.REACT_APP_TMDB_KEY ,
  }
};


//Deployed URL: cine-cassette1.web.app