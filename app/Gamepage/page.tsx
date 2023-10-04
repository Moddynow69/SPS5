"use client";
import React, { useState, useEffect } from "react";
import { bg, pfp, PaL, ScL, StL, PaR, ScR, StR ,Up , Down , Equal } from "../assets/page";
import { game } from "../JsonFiles/page";
import Image, { StaticImageData } from "next/image";

const Gamepage = () => {
  const [youHand, setYouHand] = useState<StaticImageData | undefined>(PaL);
  const [comHand, setComHand] = useState<StaticImageData | undefined>(PaR);
  const [youScore, setYouScore] = useState<number>(5);
  const [comScore, setComScore] = useState<number>(5);
  const [res, setRes] = useState<StaticImageData | undefined>();
  const [resVisible, setResVisible] = useState<Boolean>(false);

  useEffect(() => {
    let animationTimeout;

    // Add the class to trigger the animation
    document.getElementById("youHand").classList.remove("animate-wiggle");
    document.getElementById("comHand").classList.remove("animate-wiggle");
    document.getElementById("youHand").classList.add("animate-fade");
    document.getElementById("comHand").classList.add("animate-fade");

    // Set a timeout to remove the class after the animation duration (in milliseconds)
    animationTimeout = setTimeout(() => {
      document.getElementById("youHand").classList.remove("animate-fade");
      document.getElementById("comHand").classList.remove("animate-fade");
      document.getElementById("youHand").classList.add("animate-wiggle");
      document.getElementById("comHand").classList.add("animate-wiggle");
    }, 1000); // Change 1000 to match your animation duration in milliseconds
    // Clean up the timeout if the component unmounts or if isActive changes before the animation completes
    return () => {
      clearTimeout(animationTimeout);
    };
  }, [youHand, comHand]);

  const DisplayResult = (result: string) => {};

  const gameEnd = (you: number, com: number) => {};

  const DrawResult = () => {
    //display Result
    setRes(Equal);
    DisplayResult("Draw");
  };
  const WinResult = () => {
    //Display Result
    DisplayResult("Win");
    setRes(Up);
    setYouScore(youScore + 1);
    setComScore(comScore - 1);
  };
  const LossResult = () => {
    //Display Result
    DisplayResult("Loss");
    setRes(Down);
    setYouScore(youScore - 1);
    setComScore(comScore + 1);
  };
useEffect(()=>{
  let visi;
  setResVisible(true)
    visi = setTimeout(() => {
      setResVisible(false);
    }, 1500);
    return () => {
      clearTimeout(visi);
    };
},[res])
  useEffect(() => {
    gameEnd(youScore, comScore);
  }, [youScore, comScore]);

  const result = (element1: any, element2: any) => {
    if (element1 == PaL) {
      if (element2 == PaR) {
        DrawResult();
      } else if (element2 == ScR) {
        LossResult();
      } else if (element2 == StR) {
        WinResult();
      }
    } else if (element1 == ScL) {
      if (element2 == PaR) {
        WinResult();
      } else if (element2 == ScR) {
        DrawResult();
      } else if (element2 == StR) {
        LossResult();
      }
    } else if (element1 == StL) {
      if (element2 == PaR) {
        LossResult();
      } else if (element2 == ScR) {
        WinResult();
      } else if (element2 == StR) {
        DrawResult();
      }
    }
  };

  const shuffleComHand = () => {
    const i: number = Math.floor(Math.random() * 3);
    if (i == 0) {
      setComHand(ScR);
    } else if (i == 1) {
      setComHand(StR);
    } else {
      setComHand(PaR);
    }
  };

  const onclickHandle = (element: any) => {
    setYouHand(element);
    shuffleComHand();
  };
  useEffect(() => {
    result(youHand, comHand);
  }, [youHand, comHand]);
  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-screen h-screen flex flex-row"
    >
      <Image src={res}  className={`${resVisible? "":"hidden"} absolute z- top-0 bottom-0 left-0 right-0 10 m-auto drop-shadow-2xl drop-shadow-black backdrop-blur-md p-3 rounded-md h-[200px] w-[200px]`}/>
      <div className="leftBox w-[50%] h-screen">
        <div className="aboutPlayer h-[15%] flex backdrop-blur-sm shadow-md">
          <div className="pfp w-[15%]">
            <Image src={pfp} alt="You" className="w-[100%] h-[100%]"></Image>
          </div>
          <h1 className="w-[20%] text-1xl xl:text-6xl md:text-5xl sm:text-3xl flex flex-col-reverse">
            YOU
          </h1>
          <div className="game w-[50%]">
            <div
              style={{
                backgroundImage: `url(${game.images[youScore]})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "right",
              }}
              className="emoji w-[100%] h-[100%]"
            ></div>
          </div>
          <div className="w-[15%] h-[100%] place-self-start scorecard flex justify-center items-center">
            <h1 className="h-[100%] text-3xl xl:text-9xl md:text-7xl sm:text-3xl text-white">
              {youScore - 5}
            </h1>
          </div>
        </div>
        <div className="hand w-[100%] h-[69%] grid content-center">
          <div className="handElement flex justify-start">
            <Image
              src={youHand}
              alt="Hand"
              id="youHand"
              className="w-[60%] h-full animate-wiggle ml-1"
            ></Image>
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
              className="p-1 rotate-[300deg] w-full h-[70%] hover:scale-110 hover:animate-pulse "
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
              className="p-1 rotate-[300deg] w-full h-[70%] hover:scale-110 hover:animate-pulse "
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
              className="p-1 rotate-[300deg] w-full h-[70%] hover:scale-110 hover:animate-pulse "
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
          <h1 className="w-[20%] text-1xl xl:text-6xl md:text-5xl sm:text-3xl flex flex-col-reverse text-right">
            CPU
          </h1>
          <div className="game w-[50%]">
            <div
              style={{
                backgroundImage: `url(${game.images[comScore]})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "left",
              }}
              className="emoji w-[100%] h-[100%]"
            ></div>
          </div>
          <div className="w-[15%] h-[100%] place-self-start scorecard flex justify-center items-center">
            <h1 className="h-[100%] text-3xl xl:text-9xl md:text-7xl sm:text-3xl text-white">
              {comScore - 5}
            </h1>
          </div>
        </div>
        <div className="hand w-[100%] h-[69%] grid content-center">
          <div className="handElement flex justify-end">
            <Image
              src={comHand}
              alt="Hand"
              width="100"
              height="100"
              id="comHand"
              className="w-[60%] h-full animate-wiggle mr-1"
              unoptimized
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Gamepage;
