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
  return(
    <div>
        tui gu kha
    </div>
  );
};

export default Blogs;
