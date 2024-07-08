import {SUPPORTED_LANGUAGES, WHITELOGO} from "../utils/constants";
import { FaUser } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";



const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  useEffect(() => {

    //onAuthStateChanged is like an event listener.
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            // console.log(user);
            // User is signed in.
            const {uid, email, displayName} = user;
            dispatch(addUser({uid: uid, email: email, displayName: displayName}));
            navigate("/browse");
        } 
        
        else {
          // User is signed out
          dispatch(removeUser());
          navigate("/");
        }
      });

      //Unsubscribe when the component unmounts
      return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }


  return (
    <div className="absolute w-full bg-gradient-to-b from-black px-10 py-4 z-10 flex flex-col md:flex-row justify-between">
      <img
        className="w-36 mx-auto md:mx-0"
        src={WHITELOGO}
        alt = "Logo" 
      />
      {user && 
        (<div className="flex gap-4  justify-center md:justify-end">

          <FaUser className="text-white text-3xl font-bold my-10"/>

          {showGptSearch && <select 
            className=" mt-9 p-2 h-10 bg-gray-900 text-white rounded-lg"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>}

          <button
            onClick={handleGptSearchClick}
            className="text-white font-medium italic bg-red-700 rounded-lg w-32 h-10 my-9"
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>
          <button 
            onClick={handleSignOut}
            className="text-white font-medium italic bg-red-700 rounded-lg w-20 h-10 my-9"
          >
            Sign Out
          </button>
        </div>)
      }
    </div>
  )
}

export default Header;
