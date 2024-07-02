import {WHITELOGO} from "../utils/constants";
import { FaUser } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () => {

  const navigate = useNavigate();
  const user = useSelector(store => store.user)

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  return (
    <div className="absolute w-full bg-gradient-to-b from-black px-28 py-4 z-10 flex justify-between">
      <img
        className="w-36"
        src={WHITELOGO}
        alt = "Logo" 
      />
      {user && 
        (<div className="flex gap-8">
          <FaUser className="text-white text-3xl font-bold my-10"/>
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
