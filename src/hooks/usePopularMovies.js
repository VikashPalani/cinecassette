import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useSelector } from "react-redux";


//Custom hooks are normal JS function (Utility Function)

const usePopularMovies = () => {

  //Fetch data from TMDB API and updating the store.
  const dispatch = useDispatch();

  const popular = useSelector((store) => store.movies.popularMovies);

  const getPopularMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        API_OPTIONS
      );
      const json = await data.json();
      console.log(json.results);
      dispatch(addPopularMovies(json.results))
    }
    
    catch (error) { 
      console.log(error)
    }
  };

  useEffect(() => { 
    //Memoization
    if(!popular) getPopularMovies();
  }, []);

}

export default usePopularMovies;