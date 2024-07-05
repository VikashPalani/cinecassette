import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";

import { useSelector } from "react-redux";

import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

import useAiringTodaySeries from "../hooks/useAiringTodaySeries";
import useOnTheAirSeries from "../hooks/useOnTheAirSeries";
import usePopularSeries from "../hooks/usePopularSeries";
import useTopRatedSeries from "../hooks/useTopRatedSeries";

const Browse = () => {

  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  useAiringTodaySeries();
  useOnTheAirSeries();
  usePopularSeries();
  useTopRatedSeries();
  
  return (
    <div>
      <Header />
      {showGptSearch 
        ? (<GptSearch />)
        : 
        (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )
      }
    </div>
  );
};

export default Browse;
