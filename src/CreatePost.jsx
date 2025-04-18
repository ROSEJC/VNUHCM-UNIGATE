import { Bold, Italic, Link } from "lucide-react";
import { useState, useEffect } from "react";
const [topicChoice, setTopicChoice] = useState();


export default function CreatePostForm() {
  return (
    <div className="max-w-5xl p-6 bg-white !justify-center mx-auto">
      <h1 className="!text-3xl font-bold mb-6 text-left">Tạo bài viết mới</h1>

      {/* Chuyên mục */}
      <label className="!text-lg block font-medium text-sm mb-1 text-left">Chuyên mục</label>
      <select className="w-full p-2 border border-gray-300 rounded mb-4 bg-gray-100 py-5 ">
        <option>Thảo luận chung</option>
        <option>Đánh giá năng lực</option>
        <option>Chia sẻ kinh nghiệm</option>
      </select>

      {/* Tiêu đề */}
      <label className="!text-lg block font-medium text-sm mb-1 text-left">Tiêu đề</label>
      <input
        type="text"
        placeholder="Nhập tiêu đề bài viết"
        className="w-full p-2 border border-gray-300 rounded mb-4 py-5"
      />

      {/* Nội dung */}
      <label className="!text-lg block font-medium text-sm mb-1 text-left">Nội dung</label>
      <div className="border border-gray-300 rounded mb-4">
        {/* Thanh công cụ */}
        <div className="bg-gray-50 px-3 py-2 flex gap-2">
          <Bold className="w-4 h-4 cursor-pointer" />
          <Italic className="w-4 h-4 cursor-pointer" />
          <Link className="w-4 h-4 cursor-pointer" />
        </div>

        {/* Ô soạn nội dung */}
        <textarea
          rows={10}
          className="w-full p-3 outline-none resize-none"
          placeholder="Nhập nội dung bài viết..."
        ></textarea>
      </div>

      {/* Nút */}
      <div className="flex justify-end gap-2">
        <button className="px-4 py-2 rounded border !text-gray-700 !bg-white hover:!bg-gray-100">
          Hủy
        </button>
        <button className="px-4 py-2 rounded !bg-blue-700 hover:!bg-blue-800 !text-white font-medium">
          Đăng bài
        </button>
      </div>
    </div>
  );
}
