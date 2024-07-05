import MovieList from "./MovieList";
import { useSelector } from "react-redux";


const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies);
  const series = useSelector(store => store.series);

  return (
    movies && (
      <div className="bg-black">
        <div className="-mt-72 pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
          <MovieList title={"Popular Movies"} movies={movies.popularMovies}/>
          <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies}/>
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>

          <MovieList title={"Airing Today Series"} series={series.airingTodaySeries}/>
          <MovieList title={"On The Air Series"} series={series.onTheAirSeries}/>
          <MovieList title={"Popular Series"} series={series.popularSeries}/>
          <MovieList title={"Top Rated Series"} series={series.topRatedSeries}/>

        </div>
      </div>
    )
  )
}

export default SecondaryContainer;