"use client";
import React, { useState, useEffect } from "react";
import bg from "../assets/bg.gif";
import pfp from "../assets/pfp.jpg";
import PaL from "../assets/PaL.png";
import ScL from "../assets/ScL.png";
import StL from "../assets/StL.png";
import PaR from "../assets/PaR.png";
import ScR from "../assets/ScR.png";
import StR from "../assets/StR.png";
import score from "../JsonFiles/game.json";
import Image from "next/image";
const Gamepage = () => {
  const [comHand, setComHand] = useState<string | undefined>(StL);
  const [youHand, setYouHand] = useState<string | undefined>(StL);
  const [youScore, setYouScore] = useState<number>(5);
  const [comScore, setComScore] = useState<number>(5);
  const onclickHandle = (element: any) => {
    setComHand(element);
    const i: number = Math.floor(Math.random() * 3);
    setYouHand(element);//not random
  };
  return (
    <div
      style={{
        background: `url(${bg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-screen h-screen flex flex-row"
    >
      <div className="leftBox w-[50%] h-screen">
        <div className="aboutPlayer h-[15%] flex backdrop-blur-sm shadow-md">
          <div className="pfp w-[15%]">
            <Image src={pfp} alt="You" className="w-[100%] h-[100%]"></Image>
          </div>
          <h1 className="w-[20%] text-7xl flex flex-col-reverse ">YOU</h1>
          <div className="score w-[50%]">
            <div
              style={{
                background: `url(${score.images[youScore]})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "right",
              }}
              className="emoji w-[100%] h-[100%]"
            ></div>
          </div>
          <div className="w-[15%] h-[100%] place-self-start scorecard flex justify-center items-center">
            <h1 className="h-[100%] text-9xl text-white">{comScore - 5}</h1>
          </div>
        </div>
        <div className="hand w-[100%] h-[69%] grid content-center">
          <div className="handElement">
            <Image src={youHand} alt="Hand" className="w-[60%] h-full"></Image>
          </div>
        </div>
        <div className="chooseHand w-[100%] h-[15%] flex flex-row ">
          <a
            className=" cursor-pointer "
            onClick={() => {
              onclickHandle(PaL);
            }}
          >
            <Image
              src={PaL}
              alt="Hand"
              className="rotate-[300deg] w-full h-[70%]"
            ></Image>
          </a>
          <a
            className=" cursor-pointer "
            onClick={() => {
              onclickHandle(ScL);
            }}
          >
            <Image
              src={ScL}
              alt="Hand"
              className="rotate-[300deg] w-full h-[70%]"
            ></Image>
          </a>
          <a
            className=" cursor-pointer "
            onClick={() => {
              onclickHandle(StL);
            }}
          >
            <Image
              src={StL}
              alt="Hand"
              className="rotate-[300deg] w-full h-[70%]"
            ></Image>
          </a>
        </div>
      </div>




      <div className="rightBox w-[50%] h-screen">
        <div className="aboutPlayer h-[15%] flex flex-row-reverse backdrop-blur-sm shadow-md">
          <div className="pfp w-[15%]">
            <Image
              src={pfp}
              alt="computer"
              className="w-[100%] h-[100%]"
            ></Image>
          </div>
          <h1 className="w-[20%] text-7xl flex flex-col-reverse ">YOU</h1>
          <div className="score w-[50%]">
            <div
              style={{
                background: `url(${score.images[youScore]})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "left",
              }}
              className="emoji w-[100%] h-[100%]"
            ></div>
          </div>
          <div className="w-[15%] h-[100%] place-self-start scorecard flex justify-center items-center">
            <h1 className="h-[100%] text-9xl text-white">{comScore - 5}</h1>
          </div>
        </div>
        <div className="hand w-[100%] h-[69%] grid content-center">
          <div className="handElement flex justify-end">
            <Image
              src={comHand}
              alt="Hand"
              width="100"
              height="100"
              className="w-[60%] h-full"
              unoptimized
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Gamepage;
