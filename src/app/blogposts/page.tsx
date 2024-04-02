"use client";

import { useBlogContext } from "@/lib/BlogContext";
import Nav from "../component/nav";
import { useState, useEffect } from "react";

interface BlogType {
  id: string;
  author: string;
  body: string;
}

export default function BlogPosts() {
  const [articless, setArticles] = useState<BlogType[]>([]);

  useEffect(() => {
    // Get Data from LocalStorage
    const articles = localStorage.getItem("articles");

    let currentArticles;

    if (!articles) {
      currentArticles = [];
    } else {
      currentArticles = JSON.parse(articles);
    }
    setArticles(currentArticles.reverse());
  }, []);

  return (
    <div>
      <Nav />
      <h1 className="text-[5vw]">{}</h1>
      <div className=" p-[4vw]">
        {articless.map((article) => (
          <div
            key={article.id}
            className=" h-[45vh] w-[20vw] bg-[#E9E4D9] p-[1.2vw] rounded-xl shadow-md text-center "
          >
            <h2 className=" font-bold capitalize">{article.author}</h2>X{" "}
            {article.body}
          </div>
        ))}
      </div>
    </div>
  );
}
