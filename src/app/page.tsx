"use client";
import Image from "next/image";
import Nav from "./component/nav";
import bg from "./images/bg.jpg";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Explore from "./explore-genre/page";
import { useState, useEffect } from "react";
import hide from "./images/hide.png";

export default function Home() {
  // const [isMounted, setIsMounted] = useState(false);
  const [welcomeM, setWelcome] = useState(true);

  // useEffect(() => {
  //   setIsMounted(true);

  //   const data = window.localStorage.getItem("WELCOME_MESSAGE");

  //   if (data !== null) {
  //     setWelcome(JSON.parse(String(data)));
  //   }
  // }, []);

  // useEffect(() => {
  //   window.localStorage.setItem("WELCOME_MESSAGE", JSON.stringify(welcomeM));
  // }, [welcomeM]);

  const buttonClickHandler = () => {
    setWelcome(false);

    // window.localStorage.setItem("WELCOME_MESSAGE", JSON.stringify(false));
  };

  // if (!isMounted) return null;

  return (
    <main className="">
      {
        //first part of landing page
      }
      <div className="">
        <Nav />
      </div>

      {
        //other parts of the LP
      }

      <div className=" w-[100vw] h-[40vh] bg bg-repeat-x block justify-center">
        <div className=" flex justify-center">
          {/* {(welcomeM && ( */}
          <h1 className=" text-[2.5vw] text-[#E9E4D9] text-center pt-[3vh] gap-[0.2vw] font-bold drop-shadow-lg flex justify-center">
            Welcome To Our E-library!
            <Button
              className="hover:bg-[#E9E4D9] mt-[0.5vh] w-[4vw] flex justify-center rounded-xl"
              onClick={buttonClickHandler}
            >
              <Image src={hide} alt="hide" className=" h-[2.5vw] w-[2vw]" />
            </Button>
          </h1>
          {/* )) || (
          <h1 className=" text-[2.5vw] text-[#E9E4D9] text-center pt-[3vh] gap-[0.2vw] font-bold drop-shadow-lg flex justify-center">
            Welcome Back!
          </h1>
        )} */}
        </div>
        <div className="ml-[35vw] mt-[18vh] flex gap-[5vw]">
          <Link href="/explore-genre">
            <Button className="w-[14vw] h-[5vw] bg-[#E9E4D9] rounded-xl shadow-2xl  font-bold text-[#41554F] text-[1.3vw] hover:bg-[#41554F] hover:text-[#E9E4D9]">
              Start Reading
            </Button>
          </Link>

          <Link href="/writebook">
            <Button className="w-[14vw] h-[5vw] bg-[#E9E4D9] rounded-xl shadow-2xl  font-bold text-[#41554F] text-[1.3vw] hover:bg-[#41554F] hover:text-[#E9E4D9]">
              Start Writing
            </Button>
          </Link>
        </div>
      </div>
      {
        //other parts of the LP
      }
      <div className=" bg-[#E9E4D9] w-[100vw] h-[50vh]"></div>
    </main>
  );
}
