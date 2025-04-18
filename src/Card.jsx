import { ChevronRight, FileText, Lock } from "lucide-react";


export default function ForumTopicCard({
  title,
  description,
  postCount,
  latestTitle,
  latestDate,
}) {
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
      <ChevronRight className="text-gray-400 mt-1" />
    </div>
  );
}
