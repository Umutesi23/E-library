import BlogPosts from "./BlogsWidget";
import { getBlogs } from "../services/functions";
import Nav from "../component/nav";
import { Blog } from "@prisma/client";

const BlogPage = async () => {
  const blogs = (await getBlogs()) as Blog[];

  return (
    <div>
      {/* kjkhkh */}
      <BlogPosts blogs={blogs} />
    </div>
  );
};

export default BlogPage;
