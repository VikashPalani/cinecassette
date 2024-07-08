import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BGIMAGE } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
        <div className="absolute -z-10">
                <img 
                  src={BGIMAGE}
                  className="object-cover h-screen w-screen"
                  alt = "Background" 
                />   
        </div>
        <div className="">
          <GptSearchBar />
          <GptMovieSuggestions />
        </div>
    </>
  )
}

export default GptSearch