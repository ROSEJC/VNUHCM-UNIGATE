import { useState } from "react";
import { PostContentCard } from "./Card";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function PostDetail() {
    const { id } = useParams();

    const[data, setData] = useState()

    const fetchPostData = async () => {
        try {
          const response = await fetch(`http://127.0.0.1:8000/api/get-post/${id}`);
          if (!response.ok) {
            throw new Error("Có lỗi xảy ra khi lấy dữ liệu");
          }
          const data = await response.json();
          setData(data);
        } catch (err) {
          console.error(err);
         
        } finally {
          
        }
      };
    
      useEffect(() => {
        fetchPostData();
      }, []);
    
    return(
        <div>
        {data ? (
            <PostContentCard
            title={data.question || data.title}
            content={data.content}
            topic={data.topic}
            date={data.date || data.created_at}
         />
         ) : (
      <p>Đang tải dữ liệu...</p>
    )}
            
        </div>
    );
}