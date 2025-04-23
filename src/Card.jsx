import { ChevronRight, FileText, Lock } from "lucide-react";
import { Navigate } from "react-router-dom";
import React from "react";


export default function ForumTopicCard({
  title,
  description,
  postCount,
  latestTitle,
  latestDate,
}) {

  function slugify(text) {
    return text
      .toString()
      .normalize("NFD")                 // tách dấu tiếng Việt
      .replace(/[\u0300-\u036f]/g, "") // xóa dấu
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")    // xóa ký tự đặc biệt
      .replace(/\s+/g, "-")            // chuyển khoảng trắng thành -
      .replace(/-+/g, "-");            // bỏ trùng dấu -
  }
  return (
    <div className="border border-gray-200 rounded-lg p-4 py-5 flex justify-between items-start hover:shadow-md transition duration-300 w-[1000px]">
      <div className="space-y-1">
        <h3 className="text-blue-700 font-semibold text-left text-2xl pb-2">{title}</h3>
        <p className="text-sm text-gray-500 text-left text-2xl pb-2 ">{description}</p>
        <div className="flex items-center text-sm text-gray-600 mt-2 gap-6">
          <span className="flex items-center gap-1">
            <FileText className="w-4 h-4" />
            {postCount} bài viết
          </span>
          <span className="flex items-center gap-1">
            <Lock className="w-4 h-4" />
            Bài viết mới nhất:{" "}
            <span className="font-medium text-black">
              {latestTitle}
            </span>{" "}
            - {latestDate}
          </span>
        </div>
      </div>
      <button
      onClick={() => {
        const slug = slugify(title);
        window.location.href =  `/posts_page/${slug}`
      }}
      className="p-2 hover:bg-gray-100 rounded-full text-gray-400 transition flex items-center justify-between"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}

// PostCard.jsx

export function PostCard({ title, content, description, id, postCount }) {

  

  return (
    <div className="border border-gray-200 rounded-lg p-4 py-5 flex justify-between items-start hover:shadow-md transition duration-300 w-[1000px]">
      <div className="space-y-1">
        <h3 className="text-blue-700 font-semibold text-left text-2xl pb-2">{title}</h3>
        <p className="text-sm text-gray-500 text-left text-2xl pb-2">{description}</p>
        <div className="flex items-center text-sm text-gray-600 mt-2 gap-6">
          <span className="flex items-center gap-1">
            <FileText className="w-4 h-4" />
            {postCount} bài viết
          </span>
          <span className="flex items-center gap-1">
            <Lock className="w-4 h-4" />
            Bài viết mới nhất: <span className="font-medium text-black">?</span>
          </span>
        </div>
      </div>
      <button
        onClick={() =>  window.location.href =  `/post/${id}`}
        className="p-2 hover:bg-gray-100 rounded-full text-gray-400 transition flex items-center justify-center"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}


export function PostContentCard({title, content, topic, date}) {
  return (
    <div className="bg-white border rounded-lg p-5 shadow-sm max-w-3xl mx-auto">
      
      <div className="!flex items-left text-sm text-gray-500 mb-2">
        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded mr-2 font-medium">{topic}</span>
        <span>{date}</span>
      </div>

      {/* Avatar và tên người đăng */}
      <div className="flex items-center mb-2">
        <div className="w-10 h-10 bg-gray-300 rounded-full mr-3" /> {/* Placeholder Avatar */}
        <div>
          <p className="font-semibold text-black">Lê Văn C</p>
          <p className="text-sm text-gray-500">Thành viên</p>
        </div>
      </div>

      {/* Tiêu đề bài viết */}
      <h2 className="text-xl font-bold text-black mb-3 !flex item-left">
        {title}
      </h2>

      {/* Nội dung */}
      <p className="text-gray-700 leading-relaxed mb-4 !flex item-left !text-left">
       {content}
      </p>

      {/* Các nút hành động */}
      <div className="flex items-center gap-6 text-gray-600 text-sm border-t pt-3">
        <button className="flex items-center gap-1 hover:text-black">
          ❤️ <span>25</span>
        </button>
        <button className="flex items-center gap-1 hover:text-black">
          💬 <span>Trả lời</span>
        </button>
        <button className="flex items-center gap-1 hover:text-black">
          📤 <span>Chia sẻ</span>
        </button>
      </div>
    </div>
  );
}
