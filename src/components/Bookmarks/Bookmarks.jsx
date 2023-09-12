import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 ">
      <div className="bg-[#6047ec1a] rounded-xl py-5 px-12 border border-[#6047EC]">
        <h3 className="text-2xl text-[#6047EC]">Spent time on read : {readingTime} min</h3>
      </div>
      <div className="bg-[#30303011]  rounded-xl p-4 mt-6 ">
        <h2 className="text-2xl font-bold text-center ">
          Bookmarked Blog: {bookmarks.length}
        </h2>

        {bookmarks.map((bookmark) => (
          <Bookmark key={bookmark.id} bookmark={bookmark} />
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};

export default Bookmarks;
