import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedSeries } from "../utils/seriesSlice";


//Custom hooks are normal JS function (Utility Function)

const useTopRatedSeries = () => {

  //Fetch data from TMDB API and updating the store.
  const dispatch = useDispatch();

  const getTopRatedSeries = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/tv/top_rated?page=1",
        API_OPTIONS
      );
      const json = await data.json();
      console.log(json.results);
      dispatch(addTopRatedSeries(json.results))
    }
    
    catch (error) { 
      console.log(error)
    }
  };

  useEffect(() => { 
    getTopRatedSeries();
  }, []);

}

export default useTopRatedSeries;