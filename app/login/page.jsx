"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaRegUserCircle } from "react-icons/fa";
import LoginForm from "./../ui/LoginForm";
import app from "./../../firebaseConfig";
import { useState, useEffect } from "react";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { redirect, useRouter } from "next/navigation";

const page = () => {
  const [user, setUser] = useState(null);
  const [signInForm, setSignInForm] = useState(true);

  const [signUp, setSignUp] = useState(false);
  const router = useRouter();
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  });

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      signInWithPopup(auth, provider).then((userCredential) => {
        console.log(userCredential);
        const user = userCredential.user;
        if (user.uid) {
          document.cookie = `accessToken=${user?.accessToken};`;
          router.push("/");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
      // console.log(signedIn);
      // router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const signInWithEmailPassword = async (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user.uid) {
          document.cookie = `accessToken=${user?.accessToken};`;
          router.push("/");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const createUserWithCredintial = async (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user.uid) {
          document.cookie = `accessToken=${user?.accessToken};`;
          router.push("/");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-orange-500">
      <div className="flex flex-col md:flex-row  items-center justify-center gap-3 w-full max-w-4xl">
        <div className="flex-1  p-4 text-white">
          <h2 className="text-5xl font-semibold mb-8">1stofthemonth</h2>
          <p className="text-6xl font-extrabold max-w-sm leading-none text-sky-300">
            Get better with your health
          </p>
        </div>
        <div className="w-full max-w-sm">
          {signUp ? (
            <>
              <LoginForm
                createUserWithCredintial={createUserWithCredintial}
                signInForm={signInForm}
                setSignInForm={setSignInForm}
                signInWithEmailPassword={signInWithEmailPassword}
                setSignUp={setSignUp}
                signInWithGoogle={signInWithGoogle}
              ></LoginForm>
            </>
          ) : (
            <div className="w-full max-w-sm bg-white rounded-2xl py-4 px-6 flex flex-col  relative z-10 drop-shadow-2xl ">
              <p className="text-right mb-4">
                Already have an account?
                <button
                  onClick={() => setSignUp(true)}
                  className="text-blue-600 font-medium"
                >
                  Sign In
                </button>
              </p>
              <h2 className="mb-5 text-xl font-bold">Sign Up</h2>
              <button
                type="button"
                onClick={signInWithGoogle}
                className="text-center py-2 px-6 focus:outline-none bg-gray-100 rounded-full flex items-center justify-center gap-3"
              >
                <FcGoogle size={25} />
                Sign up with google
              </button>

              <p className="relative flex items-center justify-center my-4">
                <span className="h-0.5 bg-slate-200 absolute inset-x-4 top-1/2 z-10 rounded-md"></span>
                <span className="z-50 block w-fit bg-white px-2">or</span>
              </p>

              <button
                type="button"
                onClick={() => {
                  setSignUp(true);
                  setSignInForm(false);
                }}
                className="text-center py-2 px-6 focus:outline-none bg-gray-100 hover:bg-gray-300 rounded-full flex items-center justify-center gap-3"
              >
                <FaRegUserCircle size={20} />
                Sign Up with credintial
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
