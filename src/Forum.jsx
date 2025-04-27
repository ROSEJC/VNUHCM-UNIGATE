import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Dùng để chuyển trang
import ForumHeader from "./ForumHeader";
import ForumTopicCard from "./Card";
import { LatestPostPanel } from "./Card";
export default function Forum() {
  const [topicsData, setTopicsData] = useState({ topics: [] });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [newQuestion, setNewQuestion] = useState("");
  const [lastestPosts, setLastestPost] = useState();

  const fetchTopics = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/get-post-topics");
      if (!response.ok) {
        throw new Error("Có lỗi xảy ra khi lấy dữ liệu");
      }
      const data = await response.json();
      setTopicsData(data);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchLatestPost = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/latest-posts");
      if (!response.ok) {
        throw new Error("Có lỗi xảy ra khi lấy dữ liệu");
      }
      const data = await response.json();
      setLastestPost(data);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTopics();
    fetchLatestPost();
  }, []);

  const handleAddQuestion = () => {
    if (!newQuestion.trim()) return;
    // This line had a reference to `setQaList`, which doesn't exist in your code.
    // You might want to implement that or remove this function for now.
    console.log("New question:", newQuestion);
    setNewQuestion("");
  };

  return (

  <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row gap-8 px-6 py-8">
  {/* Cột bên trái */}
  <div className="w-full md:w-3/4 bg-blue-100 rounded-lg">
      <ForumHeader 
       className ="!m-20"
      />
      {topicsData.topics.map((topicName, index) => (
        <ForumTopicCard
        key={index}
        title={topicName}
        description="Chủ đề thảo luận"
        postCount={5} // You can replace this with real data later
        latestTitle="Tiêu đề bài viết gần nhất"
        latestDate="2024-10-01"
      />
      ))}
  </div>

  {/* Cột bên phải */}
  <div className="mt-15 flex-1 bg-white h-[400px] rounded-lg shadow">
    <LatestPostPanel posts={lastestPosts}/>
  </div>
</div>
  );
}
