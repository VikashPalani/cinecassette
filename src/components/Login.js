import { useRef, useState } from "react";
import { BGIMAGE } from "../utils/constants";
import Header from "./Header";
import {checkValidData} from "../utils/Validate";

const Login = () => {

  const[isSignInForm, setIsSignInForm] = useState(true);
const [errMessage, setErrMessage] = useState(null);

  //Used useRef hook for form validation
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }

  const handleButtonClick = () => {
    //Validate the form data
    const message = checkValidData(name.current.value,email.current.value,password.current.value);
    setErrMessage(message);

  }

  return (
    <div>
        <Header />
        <div className="absolute">
            <img src={BGIMAGE}
            alt = "Background" />   
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-3/12 absolute p-12 bg-black bg-opacity-80 my-36 mx-auto right-0 left-0 text-white"
        >
          <h1 className="m-2 font-bold text-3xl py-4">{isSignInForm? "Sign In" : "Sign Up"}</h1>

            {!isSignInForm && (
              <input 
                ref={name}
                type="text"
                placeholder="Name"
                className="p-4 m-2 w-full rounded-md bg-transparent border border-white" 
              />
            )}
            <input 
              ref={email}
              type="text" 
              placeholder="Email Address" 
              className="p-4 m-2 w-full rounded-md bg-transparent border border-white"
            />
            <input 
              ref={password}
              type="password"
              placeholder="Password"
              className="p-4 m-2 w-full rounded-md bg-transparent border border-white"
            />
            <p className="text-red-500 mx-2 font-bold text-lg py-2">{errMessage}</p>
            <button 
              className="p-4 mb-5 m-2 rounded-md bg-red-700 w-full" 
              onClick={handleButtonClick}>
                {isSignInForm? "Sign In" : "Sign Up"}
            </button>

            <span className="m-2">{isSignInForm? "New to Cine Cassette? " : "Already Registered? "}</span>
            <span className="cursor-pointer font-bold" onClick={toggleSignInForm}>{isSignInForm? "Sign Up" : "Sign In"}</span>

        </form>
    </div>
  );
};

export default Login;
