import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'


function App() {
  const [bookmarks, setBookkmarks] = useState([])
  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookkmarks(newBookmarks);
  }

  const [readingTime, setReadingTime] = useState(0);
  const handleMarkAsRead = (id,reading_time) => {
    setReadingTime(readingTime + parseFloat(reading_time));
    // remove read blog from bookmark
    const remainingBookmarks= bookmarks.filter(bookmark=>bookmark.id !==id);
    setBookkmarks(remainingBookmarks)
  }

  return (
    <main className='w-[90%] mx-auto'>

      <Header></Header>
      <div className=' md:flex gap-5'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>

    </main>
  )
}

export default App;