import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {
    title,
    cover,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-20">
      <img
        className="w-full rounded-xl"
        src={cover}
        alt={`Cover picture of the title ${title}`}
      />
      <div className="flex justify-between items-end mb-4">
        <div className="flex gap-6 mt-8">
          <img className="w-14" src={author_img} alt="" />
          <div>
            <h3 className="text-2xl font-bold">{author}</h3>
            <p className="text-[#919191]">{posted_date}</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-[#6e6e6e]">{reading_time} min read </span>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="active:text-blue-500"
          >
            <FaBookmark />
          </button>
        </div>
      </div>
      <h2 className="text-4xl font-bold">{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a className="text-[#919191]"> #{hash}</a>
          </span>
        ))}
      </p>
      <button
        onClick={()=>handleMarkAsRead(reading_time)}
        className="text-[#6047EC] font-bold underline"
      >
        Mark as Read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};

export default Blog;
