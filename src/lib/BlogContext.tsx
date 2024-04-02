"use client";

import { createContext, useContext, useState } from "react";

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

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};
