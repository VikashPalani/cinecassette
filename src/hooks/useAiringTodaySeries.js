import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addAiringTodaySeries } from "../utils/seriesSlice";


//Custom hooks are normal JS function (Utility Function)

const useAiringTodaySeries = () => {

  //Fetch data from TMDB API and updating the store.
  const dispatch = useDispatch();

  const getAiringTodaySeries = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/tv/airing_today?page=1",
        API_OPTIONS
      );
      const json = await data.json();
      console.log(json.results);
      dispatch(addAiringTodaySeries(json.results))
    }
    
    catch (error) { 
      console.log(error)
    }
  };

  useEffect(() => { 
    getAiringTodaySeries();
  }, []);

}

export default useAiringTodaySeries;