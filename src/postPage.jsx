import React from "react";
import { useParams } from "react-router-dom";
import { PostCard } from './Card'; // 
import { useState, useEffect } from "react";

export default function PostPage() {

  const { title } = useParams();

  const [postsData, setPosts] = useState({ posts: [] });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const fetchTitle = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/get-topic-posts?topic=" + encodeURIComponent(title));
      if (!response.ok) {
        throw new Error("Có lỗi xảy ra khi lấy dữ liệu");
      }
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTitle();
    }, []);
  return (
    <div className="max-w-xl px-4 py-6">
      <h1 className="!text-3xl font-bold text-blue-700 !flex justify-left" >Thông báo</h1>
      <p className= "text-sm text-gray-500 mb-6 !flex justify-left">
        Các thông báo chính thức từ VNUHCM
      </p>
      {postsData.posts.map((post, index) => (
              <PostCard
              key={post.id || index}

              title={post.question}
              content={" "}
              description="Chủ đề thảo luận"
              id ={post.id}
              postCount={1}
            />
      ))}



      
    </div>
  );
}
