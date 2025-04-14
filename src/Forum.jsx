import { useState } from "react";

export default function Forum() {
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [qaList, setQaList] = useState([
    {
      question: "Làm thế nào để học machine learning?",
      answer: "Bạn có thể bắt đầu với Python và các thư viện như scikit-learn hoặc TensorFlow."
    },
    {
      question: "Có tài liệu tiếng Việt nào không?",
      answer: "Có, bạn có thể tìm các khóa học trên Youtube hoặc Coursera hỗ trợ tiếng Việt."
    },
    {
      question: "Ví dụ chưa có trả lời",
      answer: "(Chưa có trả lời)"
    }
  ]);

  const [answers, setAnswers] = useState({});

  const handleSubmit = () => {
    if (email && question) {
      setQaList([...qaList, { question, answer: "(Chưa có trả lời)" }]);
      setEmail("");
      setQuestion("");
    }
  };

  const handleAdminAnswer = (index) => {
    const newAnswer = answers[index];
    if (!newAnswer || newAnswer.trim() === "") return;

    const updatedList = [...qaList];
    updatedList[index].answer = newAnswer;
    setQaList(updatedList);

    // Clear input
    setAnswers({ ...answers, [index]: "" });
  };

  return (
    <div className="max-w-xl mx-auto p-4 space-y-6">
      {/* Form đặt câu hỏi */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Đặt câu hỏi</h2>
        <input
          type="email"
          placeholder="Email của bạn"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Nội dung câu hỏi"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          onClick={handleSubmit}
        >
          Gửi câu hỏi
        </button>
      </div>

      {/* Danh sách câu hỏi và trả lời */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Quản lý câu hỏi (Admin)</h2>
        {qaList.map((item, index) => (
          <div key={index} className="border border-gray-200 shadow-sm rounded p-4 space-y-2">
            <p className="font-semibold">Q: {item.question}</p>
            <p className="text-gray-700">A: {item.answer}</p>

            {item.answer === "(Chưa có trả lời)" && (
              <div className="space-y-2">
                <textarea
                  placeholder="Nhập câu trả lời..."
                  value={answers[index] || ""}
                  onChange={(e) => setAnswers({ ...answers, [index]: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <button
                  onClick={() => handleAdminAnswer(index)}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                >
                  Gửi trả lời
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
