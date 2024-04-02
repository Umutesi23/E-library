"use client";

import { createContext, useContext, useState, useEffect } from "react";

const BlogContext = createContext<any>(null);

export const useBlogContext = () => {
  return useContext(BlogContext);
};

export const BlogContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  var [dataNow, setBlog] = useState({ key: "Value" });

  const value = { dataNow };

  useEffect(() => {
    const data = window.localStorage.getItem("BLOG_POST");

    if (data !== null) {
      setBlog(JSON.parse(String(data)));
    }
  }, []);

  () => {
    window.localStorage.setItem("BLOG_POST", JSON.stringify(dataNow));
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};
