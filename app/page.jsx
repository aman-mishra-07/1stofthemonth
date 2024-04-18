"use client";
import { MdOutlineCalendarMonth } from "react-icons/md";
import Dropdown from "./ui/Dropdown";
import { HiOutlineBolt } from "react-icons/hi2";
import { useState, useEffect } from "react";
import app from "../firebaseConfig";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { redirect, useRouter } from "next/navigation";

export default function Home() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const auth = getAuth(app);
    console.log(auth);
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        document.cookie = `accessToken=${user?.accessToken};`;
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const options = ["individual", "family", "friend", "relative"];
  return (
    <>
      <main className="w-full flex flex-col lg:flex-row p-4 md:px-8 py-20">
        <section className="w-full max-w-4xl min-h-96">
          <header className="flex gap-4 items-center relative">
            <h2 className="text-2xl font-semibold">Hi</h2>
            <Dropdown options={options} />
            <div className="absolute top-44 md:right-10 md:top-14 w-36 aspect-square rounded-full bg-sky-300 text-white flex items-center justify-center">
              <span className="text-2xl font-semibold">0%</span>
            </div>
          </header>
        </section>
        <section className=" lg:w-[420px] p-10 rounded-4xl bg-slate-100 h-screen border-t-[6px] border-r-[10px] border-sky-400">
          <header>
            <h2 className="text-2xl font-semibold underline flex gap-2 items-center">
              <MdOutlineCalendarMonth size={25} />
              What's Next
            </h2>
          </header>
          <article className="mt-20 space-y-4">
            <h3 className="text-2xl px-4 font-semibold leading-none flex gap-2 items-center">
              <HiOutlineBolt size={25} />
              Explore
            </h3>
            <div className="bg-white w-full h-28 border border-red-400 rounded-full pl-8 py-4">
              <h4 className="text-lg font-semibold tracking-tighter">
                Invite a family member
              </h4>
              <p>Partner, kid or parent</p>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
