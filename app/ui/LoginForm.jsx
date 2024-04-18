"use client";
import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoMdArrowRoundBack } from "react-icons/io";

import { validateNewAccount, validateSignIn } from "./../utils/validation";

const LoginForm = ({
  setSignUp,
  signInWithEmailPassword,
  signInWithGoogle,
  signInForm,
  createUserWithCredintial,
  setSignInForm,
}) => {
  const [user, setUser] = useState({});
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateNewAccount(user).isValid) {
      setErrors({});
      createUserWithCredintial(user?.email, user?.password);
    } else {
      setErrors(validateNewAccount(user).errors);
    }
  };

  const handleSignIn = () => {
    if (validateSignIn(user).isValid) {
      setErrors({});
      signInWithEmailPassword(user?.email, user?.password);
    } else {
      setErrors(validateNewAccount(user).errors);
    }
  };
  const handleChange = (e) => {
    setErrors({});
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="w-full  flex items-center justify-center">
      <div className="">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm bg-white rounded-lg p-8 flex flex-col  relative z-10 shadow-md shadow-black/40"
        >
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font flex items-center gap-2">
            <button
              onClick={() => {
                setSignUp(false);
                setSignInForm(true);
              }}
            >
              <IoMdArrowRoundBack size={20} />
            </button>
            {signInForm ? "Sign In" : "Google"}
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            {signInForm ? "Enter credintials to Sign in" : "Create New Account"}
          </p>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
            noValidate
              onChange={handleChange}
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {errors?.email && (
              <span className="text-red-600">{errors?.email}</span>
            )}
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="password"
              className="leading-7 text-sm text-gray-600"
            >
              Password
            </label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {errors?.password && (
              <span className="text-red-600">{errors?.password}</span>
            )}
          </div>
          {!signInForm && (
            <div className="relative mb-4">
              <label
                htmlFor="confirmPassword"
                className="leading-7 text-sm text-gray-600"
              >
                confirm Password
              </label>
              <input
                onChange={handleChange}
                type="password"
                name="confirmPassword"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {errors?.confirmPassword && (
                <span className="text-red-600">{errors?.confirmPassword}</span>
              )}
            </div>
          )}
          <div className="flex gap-2 justify-end mb-2">
            {signInForm && (
              <button
                onClick={handleSignIn}
                className="flex-1 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-slate-200 rounded-full text-lg"
              >
                Sign In
              </button>
            )}
            {!signInForm && (
              <button
                type="submit"
                className="text-white flex-1 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-lg"
              >
                sign up
              </button>
            )}
          </div>
          <button
            type="button"
            onClick={signInWithGoogle}
            className="text-center py-2 px-6 focus:outline-none bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center gap-3"
          >
            <FcGoogle size={25} />
            Sign up with google
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
