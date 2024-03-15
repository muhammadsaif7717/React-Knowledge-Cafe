import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog,handleAddToBookmark,handleMarkAsRead }) => {
    const { title, cover, author_img, posted_date, author, reading_time, hashtags } = blog;
    return (
        <div className='mb-5 border p-5 rounded-xl shadow-xl'>
            <img className='rounded-xl' src={cover} alt="" />
            <div className='flex justify-between'>
                <div className="flex my-3 items-center">
                    <div className='mr-2'>
                        <img className='w-14' src={author_img} alt="" />
                    </div>
                    <div>
                        <h1 className="font-bold">{author}</h1>
                        <h1 className="text-sm text-gray-600">{posted_date}</h1>
                    </div>
                </div>
                <div className='flex items-center'>
                    <h1 className='text-gray-500 mr-2'>{reading_time} minutes red</h1>
                    <button onClick={()=>handleAddToBookmark(blog)}><CiBookmark></CiBookmark></button>
                </div>
            </div>
            <h2 className="text-3xl mb-3">{title}</h2>
            <h3 className='text-gray-600'>{hashtags}</h3>
            <button onClick={()=>handleMarkAsRead(reading_time)} className='text-blue-600 mt-2'><u>Mark as read</u></button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.shape({
        title: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired,
        author_img: PropTypes.string.isRequired,
        posted_date: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        reading_time: PropTypes.number.isRequired,
        hashtags: PropTypes.string.isRequired,
        handleAddToBookmark: PropTypes.func.isRequired,
    }).isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired,
};
export default Blog