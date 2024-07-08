import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {

  const langKey = useSelector(store => store.config.lang);

  return (
    <div className="pt-[60%] md:pt-[10%] flex justify-center">
      <form className="bg-black w-full md:w-1/2 grid grid-cols-12">
        <input 
          type="text"
          className="p-4 m-4 col-span-9 rounded-md"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
         type="submit"
         className="py-2 px-4  m-4 text-white font-medium italic bg-red-700 rounded-md col-span-3"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar;
