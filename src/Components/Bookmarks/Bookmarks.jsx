const Bookmarks = () => {
    return (
        <div className="md:w-1/3">
            <div className="w-full border border-[#6047EC] bg-[#EFECFD] text-center py-4 rounded-xl mb-5">
            <h1 className="font-bold">Spent Time On Read: <span>100</span> min</h1>
            </div>
        <div className="p-5 bg-[#F3F3F3] rounded-xl">
            <h1 className="font-bold mb-5">Bookmark Blogs: <span>8</span></h1>
            <div>
                <div className="text-center p-3 bg-white rounded-xl mb-5">
                    <h1 className="text-sm font-bold">Top 10 ES6 Features You Must Know</h1>
                </div>
                <div className="text-center p-3 bg-white rounded-xl mb-5">
                    <h1 className="text-sm font-bold">Top 10 ES6 Features You Must Know</h1>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Bookmarks;