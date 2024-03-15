import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3">

            <div className="w-full border border-[#6047EC] bg-[#EFECFD] text-center py-4 rounded-xl mb-5">
            <h1 className="font-bold">Spent Time On Read: {readingTime} min</h1>
            </div>
        <div className="p-5 bg-[#F3F3F3] rounded-xl">
            <h1 className="font-bold mb-5">Bookmark Blogs: <span>{bookmarks.length}</span></h1>
            {
                bookmarks.map(bookmark=><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
        </div>
    );
};

Bookmarks.propTypes={
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired,
}
export default Bookmarks;