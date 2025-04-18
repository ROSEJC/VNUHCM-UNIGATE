import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Login from './Login.jsx'
import Forum from './Forum.jsx'
import ForumHeader from './ForumHeader.jsx'
import ForumTopicCard from './Card.jsx'
import CreatePostForm from './CreatePost.jsx'
function App() {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/forum" element={<Forum />} />
    </Routes>
  )
}

export default App
