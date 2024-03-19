import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import PostsPage from './pages/PostsPage'
import PostPage from './pages/PostPage'
import CommentsPage from './pages/CommentsPage'

function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<PostsPage/>}/>
        <Route path='/PostPage' element={<PostPage/>}/>
        <Route path='/:id' element={<CommentsPage/>}/>
        <Route path='*' element={<h2>404</h2>}/>
      </Routes>
    </>
  )
}

export default App
