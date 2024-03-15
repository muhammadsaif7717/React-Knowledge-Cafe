import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title}=bookmark;
    return (
        <div>
                <div className="text-center p-3 bg-white rounded-xl mb-5">
                    <h1 className="text-sm font-bold">{title}</h1>
                </div>
            </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.shape({
        title: PropTypes.string.isRequired,
    }).isRequired,
};
export default Bookmark;