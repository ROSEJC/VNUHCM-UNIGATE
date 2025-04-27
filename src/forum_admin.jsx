import StatusTabs from "./forum_admin_status_button";

import { useState, useEffect } from "react";

export default function ForumManagement() { 
    const [statusFilter, setStatusFilter] = useState("All") //0 là tất cả, 1 là chờ duyệt, 2 là đã duyệt, 3 là đã từ chối
    const posts = [
      {
        title: "Learning React",
        username: "John Doe",
        category: "Frontend",
        status: "Approved",
        comments: 5,
        date: "2025-04-27"
      },
      {
        title: "Mastering NodeJS",
        username: "Jane Smith",
        category: "Backend",
        status: "Pending",
        comments: 2,
        date: "2025-04-25"
      },
      {
        title: "Understanding Docker",
        username: "Alice Johnson",
        category: "DevOps",
        status: "Rejected",
        comments: 1,
        date: "2025-04-20"
      },
      {
        title: "Exploring Python",
        username: "Bob Brown",
        category: "Programming",
        status: "Approved",
        comments: 8,
        date: "2025-04-22"
      },
      {
        title: "Introduction to AI",
        username: "Charlie Davis",
        category: "Machine Learning",
        status: "Pending",
        comments: 3,
        date: "2025-04-26"
      }
    ];
    
    let filterPost;
    const statusChangeHandle = (status) => {
     switch (status.tab) {
      case "Đã duyệt": 
        setStatusFilter("Approved")
      break;
      case "Chờ duyệt":
        setStatusFilter("Pending")
      break;
      case "Tất cả":
        setStatusFilter("All")
      break;
      case "Đã từ chối":
        setStatusFilter("Rejected")
      break;
      default:
        break
     } 
    } 

    const handleDecision = (postId, decision) => {
      if ({decision} == "reject"){
        //goi api reject post co postID
      }else if ({decision} == "approve"){
        //goi api approve post
      }else if ({decision} == "delete") {
        //goi api xoa post
      }
    }
    useEffect(() => {
      filterPost = posts.filterPost
    }, [statusFilter]);
    return (
      
      <div style={{ width: "90%", margin: "20px auto" }}>
        <StatusTabs onClickHandle = {statusChangeHandle} />
        <table style={{
          width: "100%",
          borderCollapse: "separate",
          borderSpacing: 0,
          border: "1px solid #ccc", // Border ngoài
        }}>
          <thead>
            <tr>
              <th style={thStyle}>Tiêu đề</th>
              <th style={thStyle}>Tác giả</th>
              <th style={thStyle}>Chuyên mục</th>
              <th style={thStyle}>Trạng thái</th>
              <th style={thStyle}>Bình luận</th>
              <th style={thStyle}>Ngày đăng</th>
              <th style={thStyle}>Thao tác</th>
            </tr>
          </thead>
          <tbody>
          {posts
            .filter(post => statusFilter === "All" || post.status === statusFilter)
            .map((post, index) => (
              <tr key={index} style={{ borderBottom: "1px solid #ccc", padding: 10 }}>
              <td style={{ ...tdStyle, color: "#1976d2" }}>{post.question}</td>
              <td style={tdStyle}>{post.username}</td>
              <td style={tdStyle}>{post.topic}</td>
              <td style={{ 
                ...tdStyle, 
              color: 
                post.status === "Approved" ? "green" : 
                post.status === "Pending" ? "orange" : 
                post.status === "Rejected" ? "red" : 
               "black" 
              }}>
               {post.status}
              </td>
              <td style={tdStyle}>{post.comments || 0}</td>
              <td style={tdStyle}>{post.date}</td>
              <td style={tdStyle}>
                <button style={btnStyle} onClick={handleDecision(post.id, "approve")}>✔️</button>
                <button style={btnStyle} onClick={handleDecision(post.id, "reject")}>❌</button>
                <button style={btnStyle} onClick={handleDecision(post.id, "delete")}>🗑️</button>
              </td>
    </tr>
))}

          </tbody>
        </table>
      </div>
    );
  }
  
  const thStyle = {
    padding: "12px",
    borderBottom: "1px solid #ccc", // chỉ border ngang
    backgroundColor: "#f2f2f2",
    textAlign: "left"
  };
  
  const tdStyle = {
    padding: "12px",
    borderBottom: "1px solid #ccc", // chỉ border ngang
    textAlign: "left"
  };
  
  const btnStyle = {
    marginRight: "1px",
    padding:"2px"
  };
  