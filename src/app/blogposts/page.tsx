import result from "postcss/lib/result";
import React from "react";
import BlogPosts from "./BlogsWidget";
import { getBlogs } from "../services/functions";
import Nav from "../component/nav";
const BlogPage = async () => {
  const blogs = await getBlogs();

  return (
    <div>
      <Nav />

      <BlogPosts blogs={blogs} />
    </div>
  );
};

export default BlogPage;
