import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";
const Blogs = ({ handleAddToBookmark , handleMarkAsRead}) => {
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
      <div>
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            handleAddToBookmark={handleAddToBookmark}
            handleMarkAsRead={handleMarkAsRead}
          />
        ))}
      </div>
    </div>
  );
};
Blogs.propTypes={
    handleAddToBookmark:PropTypes.func,
    handleMarkAsRead:PropTypes.func
}
export default Blogs;
