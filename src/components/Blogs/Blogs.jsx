import { useEffect, useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const asyncFunc = async () => {
      const res = await fetch("blogs.json");
      const data = await res.json();
      setBlogs(data);
    };
    asyncFunc();
  }, []);
  return (
  <div className="w-2/3">
    <h1 className="text-4xl">Blogs: {blogs.length}</h1>
  </div>);
};

export default Blogs;
