"use client";
import React, { useState, useEffect } from "react";
import {bg,pfp,PaL,ScL,StL,PaR,ScR,StR} from '../assets/page'
import score from "../JsonFiles/game.json";
import Image, { StaticImageData } from "next/image";
const Gamepage = () => {
  const [youHand, setYouHand] = useState<StaticImageData | undefined>(PaL);
  const [comHand, setComHand] = useState<StaticImageData | undefined>(PaR);
  const [youScore, setYouScore] = useState<number>(5);
  const [comScore, setComScore] = useState<number>(5);


  const DisplayResult = (result : string ) => {

  }

  const gameEnd = ( you : number , com : number) => {

  }

  const DrawResult = () => {
    
    //display Result
    DisplayResult('Draw');
  }
  const WinResult = () => {
    
    //Display Result
    DisplayResult('Win');
    setYouScore(youScore+1);
    setComScore(comScore-1);
  }
  const LossResult = () => {
    
    //Display Result
    DisplayResult('Loss');
    setYouScore(youScore-1);
    setComScore(comScore+1);
  }

  useEffect( () => {
    gameEnd(youScore,comScore);
  }, [youScore,comScore])

  const result = (element1 : any , element2 : any) => {
    if( element1 == PaL ) {
      if( element2 == PaR ) {
        DrawResult();
      }
      else if( element2 == ScR ){
        LossResult();
      }
      else if( element2 == StR){
        WinResult();
      }
    }
    else if( element1 == ScL ) {
      if( element2 == PaR ) {
        WinResult()
      }
      else if( element2 == ScR ){
        DrawResult();
      }
      else if( element2 == StR) {
        LossResult();
      }
    }
    else if( element1 == StL){
      if( element2 == PaR ) {
        LossResult();
      }
      else if( element2 == ScR ){
        WinResult();
      }
      else if( element2 == StR) {
        DrawResult();
      }
    }

  }
  
  const shuffleComHand= () => {
    const i: number = Math.floor(Math.random() * 3);
    if( i == 0) {
      setComHand(ScR);
    }
    else if( i == 1 ){
      setComHand(StR);
    }
    else{
      setComHand(PaR);
    }
  }

  const onclickHandle = (element: any) => {
    setYouHand(element);
    shuffleComHand();
  };
  useEffect( () => {
    result(youHand , comHand);
  }, [youHand,comHand])
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
      <div className="leftBox w-[50%] h-screen">
        <div className="aboutPlayer h-[15%] flex backdrop-blur-sm shadow-md">
          <div className="pfp w-[15%]">
            <Image src={pfp} alt="You" className="w-[100%] h-[100%]"></Image>
          </div>
          <h1 className="w-[20%] text-1xl xl:text-6xl md:text-5xl sm:text-3xl flex flex-col-reverse ">YOU</h1>
          <div className="score w-[50%]">
            <div
              style={{
                backgroundImage: `url(${score.images[youScore]})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "right",
              }}
              className="emoji w-[100%] h-[100%]"
            ></div>
          </div>
          <div className="w-[15%] h-[100%] place-self-start scorecard flex justify-center items-center">
            <h1 className="h-[100%] text-3xl xl:text-9xl md:text-7xl sm:text-3xl text-white">{youScore - 5}</h1>
          </div>
        </div>
        <div className="hand w-[100%] h-[69%] grid content-center">
          <div className="handElement flex justify-start">
            <Image src={youHand} alt="Hand" className="w-[60%] h-full" ></Image>
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
          <h1 className="w-[20%] text-1xl xl:text-6xl md:text-5xl sm:text-3xl flex flex-col-reverse ">CPU</h1>
          <div className="score w-[50%]">
            <div
              style={{
                backgroundImage: `url(${score.images[comScore]})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "left",
              }}
              className="emoji w-[100%] h-[100%]"
            ></div>
          </div>
          <div className="w-[15%] h-[100%] place-self-start scorecard flex justify-center items-center">
            <h1 className="h-[100%] text-3xl xl:text-9xl md:text-7xl sm:text-3xl text-white">{comScore - 5}</h1>
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
