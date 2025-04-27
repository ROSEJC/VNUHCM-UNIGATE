import { useState } from "react";

export default function StatusTabs({onClickHandle}) {
  const [activeTab, setActiveTab] = useState("Tất cả");

  const tabs = ["Tất cả", "Chờ duyệt", "Đã duyệt", "Đã từ chối", "Bị báo cáo"];

  return (
    <div className="flex gap-2 mb-5">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => {setActiveTab(tab);
            onClickHandle({tab});
          }}
          className={`!px-4 !py-3 rounded-md border text-sm ml-5 
            ${
              activeTab === tab
                ? "!bg-blue-700 text-white"
                :  "bg-white text-gray-700 !border-gray-300 hover:bg-gray-100"
            }
          `}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
