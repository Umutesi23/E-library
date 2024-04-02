import Image from "next/image";
import book from "../images/book.png";
import { Button } from "@/components/ui/button";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { useState } from "react";
import Link from "next/link";

{
  //function
}

export default function Nav() {
  return (
    <div className="bg-[#A8A8A4] w-[100vw] h-[10vh] flex p-[1vw] shadow-md">
      {
        //LOGO AND PICTURE
      }
      <Link href="/">
        <Button className="w-[10vw] h-[100%] ">
          <div className=" flex w-[100%] h-[100%]">
            <Image
              src={book}
              alt="brand logo"
              className=" w-[4vw] h-[7vh] fa-flip pb-[1.5vh]"
            />
            <h2 className=" text-[1.3vw] font-[cursive] font-black logo pt-[2vh] italic">
              Princess Pages
            </h2>
          </div>
        </Button>
      </Link>

      {
        //BUTTONS
      }

      <div className=" flex justify-end w-[80%] h-[100%]">
        <Link href="/explore-genre">
          <Button className=" hover:bg-[#41554F] hover:text-[#E9E4D9] rounded-xl p-[1.5vw] text-[1.1vw]">
            Explore Genre
          </Button>
        </Link>
        <Link href="/blogposts">
          <Button className=" hover:bg-[#41554F] hover:text-[#E9E4D9] rounded-xl p-[1.5vw] text-[1.1vw]">
            Blog Posts
          </Button>
        </Link>
        <Link href="/writeblog">
          <Button className=" hover:bg-[#41554F] hover:text-[#E9E4D9] rounded-xl p-[1.5vw] text-[1.1vw]">
            Write Blog
          </Button>
        </Link>
        <Link href="/writebook">
          <Button className=" hover:bg-[#41554F] hover:text-[#E9E4D9] rounded-xl p-[1.5vw] text-[1.1vw]">
            Write Book
          </Button>
        </Link>
      </div>
    </div>
  );
}
