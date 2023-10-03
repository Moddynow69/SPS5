"use client";
import React, { useEffect, useState } from "react";
import {home} from "../JsonFiles/page";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Homepage = () => {
    const router = useRouter()
  const [bgimg, setBgimg] = useState(
    JSON.stringify(
      home.images[
        Math.floor(Math.random() * Math.floor(home.images.length))
      ]
    )
  );
  const stl = {
    backgroundImage: `url(${bgimg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "bottom",
  };
  const och =()=>{
    router.push('/Gamepage');
  }
  return (
    <>
      <div
        style={stl}
        className="h-screen w-screen flex justify-center items-center"
      >
        <div className="container backdrop-blur-xl rounded-lg w-[40%] h-[600px]">
          <div className="Ucon h-[30%] flex justify-center items-center shadow-lg	">
            <h1 className=" text-9xl text-indigo-100">
              S<span className="text-sm">tone</span> 
              P<span className="text-sm">apper</span>
              S<span className="text-sm">cissors</span>
              5<span className="text-sm">Rounds</span>
            </h1>
          </div>
          <div className="Lcon flex justify-center items-center h-[70%]">
            <Link href='/Gamepage' className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-9xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Let's Play
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};


export default Homepage;