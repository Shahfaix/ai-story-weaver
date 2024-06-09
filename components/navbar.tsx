"use client";
import React, { useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import Image from "next/image";
import logo from "../public/assets/logo.svg";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import Header from "./header";
import { useUser } from "@clerk/nextjs";

const Navbar = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUser();
  console.log("currentuser", user);
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user.id));
    }
  }, [user]); //bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100  h-24
  return (
    <nav className="fixed w-full shadow-xl bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
      <div className="flex justify-between items-center h-full w-full px-[20px] py-[16px] ">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            height={200}
            width={200}
            className="cursor-pointer"
          />
        </Link>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <Link href="/dashboard">
              <li className="ml-10 uppercase hover:border-b text-xl">
                Write Story
              </li>
            </Link>
            <Link href="/myStories">
              <li className="ml-10 uppercase hover:border-b text-xl">
                My Stories
              </li>
            </Link>

            <div className="ml-10 cursor-pointer">
              <Header user={user} />
              {children}
            </div>
          </ul>
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;