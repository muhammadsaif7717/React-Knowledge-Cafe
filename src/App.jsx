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
  return (
    <main className='w-[90%] mx-auto'>

      <Header></Header>
      <div className=' md:flex gap-5'>
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>

    </main>
  )
}

export default App
