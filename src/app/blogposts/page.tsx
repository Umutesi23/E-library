"use client";

import { useBlogContext } from "@/lib/BlogContext";
import Nav from "../component/nav";

export default function Blogposts() {
  var { dataNow } = useBlogContext();
  var author = dataNow.author;
  console.log(dataNow);
  return (
    <div>
      <Nav />
      <h1 className="text-[5vw]">{author}</h1>
    </div>
  );
}
