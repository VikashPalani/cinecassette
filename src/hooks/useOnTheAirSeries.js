import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addOnTheAirSeries } from "../utils/seriesSlice";


//Custom hooks are normal JS function (Utility Function)

const useOnTheAirSeries = () => {

  //Fetch data from TMDB API and updating the store.
  const dispatch = useDispatch();

  const getOnTheAirSeries = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/tv/on_the_air?page=1",
        API_OPTIONS
      );
      const json = await data.json();
      console.log(json.results);
      dispatch(addOnTheAirSeries(json.results))
    }
    
    catch (error) { 
      console.log(error)
    }
  };

  useEffect(() => { 
    getOnTheAirSeries();
  }, []);

}

export default useOnTheAirSeries;