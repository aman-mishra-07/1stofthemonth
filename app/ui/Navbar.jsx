"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoMdCloseCircle } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscAccount } from "react-icons/vsc";
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../../firebaseConfig";
import Image from "next/image";

const Navbar = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const router = useRouter();
  const iconSize = isOpenNav ? 25 : 40;
  const options = [
    {
      title: "health dashboard",
      icon: <CiHeart size={iconSize} />,
      path: "/health",
    },
    {
      title: "learnings",
      icon: <HiOutlineLightBulb size={iconSize} />,
      path: "/learnings",
    },
    {
      title: "account",
      icon: <VscAccount size={iconSize} />,
      path: "/account",
    },
    {
      title: "search",
      icon: <FiSearch size={iconSize} />,
      path: "/",
    },
  ];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        router.push('/')
      }
    });
    return () => unsubscribe()
  }, [auth, router]);
  
  const handleLogout = async () => {
    try {
      await signOut(auth)
      document.cookie = 'accessToken=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      // router.refresh()
      router.push('/login')
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div>
        <div className="fixed z-10 inset-x-0 bg-red p-2 bg-white md:hidden">
          <button
            onClick={() => setIsOpenNav((prev) => !prev)}
            className="block md:hidden hover:bg-slate-100 outline-1 p-2 rounded-md"
          >
            <RxHamburgerMenu size={30} />
          </button>
        </div>
        <nav
          className={`z-50 fixed transition-all ease-out duration-100 ${
            isOpenNav ? "inset-0 left-0 " : " -left-full md:left-0 md:inset-y-0"
          } backdrop-blur-md  bg-black/20`}
        >
          {isOpenNav && (
            <button
              onClick={() => setIsOpenNav((prev) => !prev)}
              className="absolute top-4 left-64 md:left-32"
            >
              <IoMdCloseCircle size={30} />
            </button>
          )}
          <ul className="flex flex-col items-center gap-4 p-2 border-r  w-60 md:w-24 bg-slate-100 border-slate-400 h-screen text-sm capitalize">
            <li className="p-2 md:aspect-square w-full rounded-md transition-all ease-linear hover:bg-white">
              <Link href={"/"} onClick={() => setIsOpenNav(false)}>
                <img
                  src="https://1ofthemonth.vercel.app/_next/image?url=%2Fimages%2Flogo_orange_LR.png&w=96&q=75"
                  alt="home"
                  className="w-16 sm:w-24 rounded-full"
                />
              </Link>
            </li>
            {options?.map((nav, i) => (
              <li
                className="text-center md:aspect-square w-full flex items-center md:justify-center rounded-md transition-all ease-linear hover:bg-white p-2 sm:p-0"
                key={nav.title}
              >
                <Link
                  href={nav.path}
                  className="flex md:flex-col gap-2 md:gap-0 items-center justify-center"
                  onClick={() => setIsOpenNav(false)}
                >
                  {nav.icon}
                  <span>{nav.title}</span>
                </Link>
              </li>
            ))}
            <li className="text-center md:aspect-square w-full flex items-center md:justify-center rounded-md transition-all ease-linear hover:bg-white p-2 sm:p-0">
              <button
                type="button"
                onClick={handleLogout}
                className="flex md:flex-col gap-2 md:gap-0 items-center justify-center "
              >
                <img
                    src={user?.photoURL ? user?.photoURL : 'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI='}
                    alt={user?.displayName}
                    className="w-12 rounded-full"
                  />
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
