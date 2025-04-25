import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Login from './Login.jsx'
import Forum from './Forum.jsx'
import CreatePostForm from './CreatePost.jsx';
import PostDetailPage from './Post.jsx';
import PostPage from './postPage.jsx';
import PostDetail  from './QuestionDetails.jsx';
import ReplyBox from './Reply.jsx';
function App() {

  return (
    <Routes>

      <Route path="/login" element={<Login />} />
      <Route path="/forum" element={<Forum />} />
      <Route path="/test" element={<ReplyBox />} />
      <Route path="/create_post" element={<CreatePostForm />} />
      <Route path="/posts_page/:title" element={<PostPage/>} />
      <Route path="/post/:id" element={<PostDetail/>} />
    </Routes>
  )
}

export default App
