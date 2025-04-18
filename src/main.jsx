import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Forum from './Forum.jsx'
import ForumHeader from './ForumHeader.jsx'
import ForumTopicCard from './Card.jsx'
import { BrowserRouter } from 'react-router-dom';
import CreatePostForm from './CreatePost.jsx'
createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Forum/>
    </StrictMode>
  );
