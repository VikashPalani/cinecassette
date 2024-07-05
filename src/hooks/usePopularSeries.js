import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularSeries } from "../utils/seriesSlice";


//Custom hooks are normal JS function (Utility Function)

const usePopularSeries = () => {

  //Fetch data from TMDB API and updating the store.
  const dispatch = useDispatch();

  const getPopularSeries = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/tv/popular?page=1",
        API_OPTIONS
      );
      const json = await data.json();
      console.log(json.results);
      dispatch(addPopularSeries(json.results))
    }
    
    catch (error) { 
      console.log(error)
    }
  };

  useEffect(() => { 
    getPopularSeries();
  }, []);

}

export default usePopularSeries;