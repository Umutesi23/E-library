import result from "postcss/lib/result";
import React from "react";
import BlogPosts from "./BlogsWidget";

export const BlogPage = async () => {
  const getBlogs = async () => {
    const response = await fetch(process.env.APPURL + `/api/getBlogs`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    const result = await response.json();

    return result;
  };

  const blogs = await getBlogs();

  return (
    <div>
      <BlogPosts blogs={blogs} />
    </div>
  );
};

export default BlogPage;
