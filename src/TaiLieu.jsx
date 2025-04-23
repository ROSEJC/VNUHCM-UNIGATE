// TaiLieuList.jsx – chỉnh màu tag (background trắng, chữ đen; khi chọn: xanh + trắng)
import React, { useEffect, useState } from 'react';
import { FileText, Download } from 'lucide-react';

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8000';

const TaiLieuList = () => {
  const [documents, setDocuments] = useState([]);
  const [filterTag, setFilterTag] = useState('Tất cả');
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch(`${API_BASE}/api/get-documents-list`)
      .then(res => res.json())
      .then(setDocuments)
      .catch(console.error);
  }, []);

  const tagSet = new Set(['Tất cả']);
  documents.forEach(d => (d.tags || []).forEach(t => tagSet.add(t)));
  const tags = Array.from(tagSet);

  const visibleDocs = documents.filter(doc => {
    const matchTag = filterTag === 'Tất cả' || (doc.tags || []).includes(filterTag);
    const matchSearch = doc.title.toLowerCase().includes(search.toLowerCase());
    return matchTag && matchSearch;
  });

  return (
    <div className="min-h-screen bg-[#f5f6fa] text-sm font-sans">
      {/* Navbar */}
      <nav className="w-full bg-white shadow-sm border-b px-4 lg:px-12 py-3 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center space-x-8">
          <span className="text-lg lg:text-xl font-bold text-blue-700">VNUHCM-UNIGATE</span>
          <ul className="hidden lg:flex space-x-6 text-gray-600">
            {['Trang chủ', 'Giới thiệu', 'Thi ĐGNL', 'Xét tuyển', 'Tài liệu', 'Diễn đàn', 'Liên hệ'].map(item => (
              <li key={item} className={`cursor-pointer ${item === 'Tài liệu' ? 'text-blue-700 font-semibold' : ''}`}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs">NV</div>
          <span className="hidden lg:block">Nguyen Van A</span>
        </div>
      </nav>

      {/* Banner */}
      <section className="bg-blue-700 text-white py-6 px-4 lg:px-12 flex items-start space-x-4">
        <div className="p-3 bg-white/20 rounded-lg"><FileText size={24} /></div>
        <div>
          <h2 className="text-lg lg:text-xl font-semibold mb-1 text-left">Tài liệu ôn tập</h2>
          <p className="max-w-3xl text-white/90">Nguồn tài liệu ôn tập được cung cấp từ thư viện Đại học Quốc gia, giúp thí sinh chuẩn bị tốt nhất cho kỳ thi ĐGNL.</p>
        </div>
      </section>

      {/* Card */}
      <div className="max-w-6xl mx-auto bg-white mt-8 mb-12 rounded-lg shadow-sm p-6 lg:p-8">
        <h3 className="text-xl font-semibold mb-4 text-left">Tài liệu ôn tập</h3>

        {/* Tags + Search */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <button
                key={tag}
                onClick={() => setFilterTag(tag)}
                className={`px-4 py-1.5 rounded-full border transition whitespace-nowrap ${
                  filterTag === tag
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="ml-auto w-full sm:w-64 relative">
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Tìm kiếm tài liệu..."
              className="w-full border border-gray-300 rounded-lg pl-3 pr-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-left border-separate border-spacing-y-2">
            <thead>
              <tr className="text-gray-500">
                <th className="py-2">Tên tài liệu</th>
                <th className="py-2 hidden md:table-cell">Ngày đăng</th>
                <th className="py-2 hidden md:table-cell">Lượt tải</th>
                <th className="py-2 hidden md:table-cell">Kích thước</th>
                <th className="py-2 text-center">&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {visibleDocs.map(doc => (
                <tr key={doc.id} className="bg-white shadow-sm rounded-md">
                  <td className="p-3 flex items-center gap-3"><FileText size={20} className="text-blue-600 flex-none" />{doc.title}</td>
                  <td className="p-3 hidden md:table-cell">{doc.date || '--'}</td>
                  <td className="p-3 hidden md:table-cell">{doc.downloads ?? '--'}</td>
                  <td className="p-3 hidden md:table-cell">{doc.size ?? '--'}</td>
                  <td className="p-3 text-center">
                    <a href={`${API_BASE}/api/get-document?id=${doc.id}`} className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-4 py-1.5 rounded md:text-sm text-xs"><Download size={16}/>Tải xuống</a>
                  </td>
                </tr>
              ))}
              {visibleDocs.length === 0 && (
                <tr><td colSpan={5} className="text-center py-6 text-gray-500">Không tìm thấy tài liệu phù hợp.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TaiLieuList;