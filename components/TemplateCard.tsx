import Link from "next/link";
import type { Template } from "@/data/templates";

const difficultyColor = {
  简单: "bg-green-100 text-green-700",
  中等: "bg-yellow-100 text-yellow-700",
  进阶: "bg-red-100 text-red-700",
};

export default function TemplateCard({ template }: { template: Template }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md hover:border-blue-200 transition-all group">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
              {template.category}
            </span>
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${difficultyColor[template.difficulty]}`}>
              {template.difficulty}
            </span>
          </div>
          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
            {template.name}
          </h3>
        </div>
        <div className="text-right ml-3 shrink-0">
          {template.price === 0 ? (
            <span className="text-green-600 font-bold text-sm">免费</span>
          ) : (
            <span className="text-orange-600 font-bold text-sm">¥{template.price}</span>
          )}
        </div>
      </div>

      <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
        {template.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {template.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            {template.stars.toLocaleString()}
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {template.deployTime}部署
          </span>
        </div>
        <Link
          href={`/templates/${template.id}`}
          className="text-blue-600 text-sm font-medium hover:text-blue-700 flex items-center gap-1"
        >
          查看详情
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
