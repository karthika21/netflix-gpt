import React, { useRef, useState } from "react";
import Header from "./Header";
import { BG_IMG, GITHUB_PROFILE } from "../utils/constants";
import validate from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [validationMsg, setValidationMsg] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const firstName = useRef(null);
  const lastName = useRef(null);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleButtonClick = () => {
    const message = validate(
      email.current.value,
      password.current.value,
      firstName?.current?.value,
      lastName?.current?.value,
      isSignIn
    );
    setValidationMsg(message);

    if (message) {
      return;
    }
    //Sign In / Sign Up logic
    if (!isSignIn) {
      //Signup
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: firstName.current.value + " " +lastName.current.value,
            photoURL: GITHUB_PROFILE,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setValidationMsg(error.code);
            });

          setValidationMsg("User Created Successfully");
        })
        .catch((error) => {
          setValidationMsg(error.code);
        });
    } else {
      //signIn
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setValidationMsg("User Logged In Successfully");
        })
        .catch((error) => {
          error.code === "auth/invalid-credential"
            ? setValidationMsg("Invalid Credentials")
            : setValidationMsg(error.code);
        });
    }
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
        {validationMsg != undefined && (
          <div className="p-2 m-2 bg-yellow-600 w-full">
            <div className="text-black text-center">{validationMsg}</div>
          </div>
        )}

        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            {!isSignIn && (
              <input
                ref={firstName}
                type="text"
                placeholder="First Name"
                className="p-2 m-2 rounded-md w-full bg-transparent border border-solid border-white text-white"
              />
            )}
            {!isSignIn && (
              <input
                ref={lastName}
                type="text"
                placeholder="Last Name"
                className="p-2 m-2 rounded-md w-full bg-transparent border border-solid border-white text-white"
              />
            )}
            <input
              ref={email}
              type="text"
              placeholder="Email or phone number"
              className="p-2 m-2 rounded-md w-full bg-transparent border border-solid border-white text-white "
            />
          </div>
          <div>
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="password - p-2 m-2 rounded-md w-full bg-transparent border border-solid border-white  text-white"
            />
          </div>
          <button
            className="text-white p-2 m-2 bg-red-600 rounded-sm w-full"
            onClick={handleButtonClick}
          >
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
