import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";


//Custom hooks are normal JS function (Utility Function)

const useTopRatedMovies = () => {

  //Fetch data from TMDB API and updating the store.
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?page=1",
        API_OPTIONS
      );
      const json = await data.json();
      console.log(json.results);
      dispatch(addTopRatedMovies(json.results))
    }
    
    catch (error) { 
      console.log(error)
    }
  };

  useEffect(() => { 
    getTopRatedMovies();
  }, []);

}

export default useTopRatedMovies;