import React, { useState } from "react";
import Header from "./Header";
import { BG_IMG } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_IMG} alt="logo" />
      </div>
      <div className="w-3/12 absolute p-12 bg-black/70 my-36 mx-auto right-0 left-0">
        <h1 className="font-bold text-3xl text-white p-2">
          {isSignIn ? "Sign In" : "Sign up"}
        </h1>
        <form>
          <div>
            {!isSignIn && (
            <input
              type="text"
              placeholder="First Name"
              className="p-2 m-2 rounded-md w-full bg-transparent border border-solid border-white"
            />
            ) }
             {!isSignIn && (
            <input
              type="text"
              placeholder="Last Name"
              className="p-2 m-2 rounded-md w-full bg-transparent border border-solid border-white"
            />
            ) }
            <input
              type="text"
              placeholder="Email or phone number"
              className="p-2 m-2 rounded-md w-full bg-transparent border border-solid border-white"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Password"
              className="p-2 m-2 rounded-md w-full bg-transparent border border-solid border-white"
            />
          </div>
          <button className="text-white p-2 m-2 bg-red-600 rounded-sm w-full">
            {isSignIn ? "Sign In" : "Sign up"}
          </button>
          <p className="text-gray-500 p-2 text-center">OR</p>
          <button className="text-white p-2 m-2 bg-gray-700 rounded-sm w-full">
            Use a sign-in code
          </button>
          <p className="text-white p-2 text-center">
            {isSignIn ? "New to Netflix? " : "Already Registered ? "}
            <a
              className="font-bold hover:underline cursor-pointer"
              onClick={toggleSignInForm}
            >
              {isSignIn ? "Sign up now" : "Sign In now"}
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
