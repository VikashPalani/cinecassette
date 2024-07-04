import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";


//Custom hooks are normal JS function (Utility Function)

const useNowPlayingMovies = () => {

  //Fetch data from TMDB API and updating the store.
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );
      const json = await data.json();
      console.log(json.results);
      dispatch(addNowPlayingMovies(json.results))
    }
    
    catch (error) { 
      console.log(error)
    }
  };

  useEffect(() => { 
    getNowPlayingMovies();
  }, []);

}

export default useNowPlayingMovies;