import { useState } from "react";
import { BGIMAGE } from "../utils/constants";
import Header from "./Header";
// import { BGIMAGE } from "../utils/constants";

const Login = () => {

  const[isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }

  return (
    <div>
        <Header />
        <div className="absolute">
            <img src={BGIMAGE}
            alt = "Background" />   
        </div>
        <form className="w-3/12 absolute p-12 bg-black bg-opacity-80 my-36 mx-auto right-0 left-0 text-white">
          <h1 className="m-2 font-bold text-3xl py-4">{isSignInForm? "Sign In" : "Sign Up"}</h1>

            {!isSignInForm && (
              <input type="text" placeholder="Name" className="p-4 m-2 w-full rounded-md bg-transparent border border-white" />
            )}
            <input type="text" placeholder="Email Address" className="p-4 m-2 w-full rounded-md bg-transparent border border-white" />
            <input type="text" placeholder="Password" className="p-4 m-2 w-full rounded-md bg-transparent border border-white" />
            <button className="p-4 mb-5 m-2 rounded-md bg-red-700 w-full">{isSignInForm? "Sign In" : "Sign Up"}</button>

            <span className="m-2">{isSignInForm? "New to Cine Cassette? " : "Already Registered? "}</span>
            <span className="cursor-pointer font-bold" onClick={toggleSignInForm}>{isSignInForm? "Sign Up" : "Sign In"}</span>

        </form>
    </div>
  );
};

export default Login;
