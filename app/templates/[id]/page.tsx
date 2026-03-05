import { notFound } from "next/navigation";
import Link from "next/link";
import { templates } from "@/data/templates";

export function generateStaticParams() {
  return templates.map((t) => ({ id: t.id }));
}

export default function TemplatePage({ params }: { params: { id: string } }) {
  const template = templates.find((t) => t.id === params.id);
  if (!template) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-blue-600 transition-colors">模板广场</Link>
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-gray-600">{template.name}</span>
      </nav>

      {/* Header */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                {template.category}
              </span>
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                template.difficulty === "简单" ? "bg-green-100 text-green-700" :
                template.difficulty === "中等" ? "bg-yellow-100 text-yellow-700" :
                "bg-red-100 text-red-700"
              }`}>
                {template.difficulty}
              </span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{template.name}</h1>
            <p className="text-gray-600 leading-relaxed">{template.description}</p>
          </div>
          <div className="text-right shrink-0">
            {template.price === 0 ? (
              <div>
                <div className="text-2xl font-bold text-green-600">免费</div>
                <div className="text-gray-400 text-sm">永久免费使用</div>
              </div>
            ) : (
              <div>
                <div className="text-2xl font-bold text-orange-600">¥{template.price}</div>
                <div className="text-gray-400 text-sm">一次性购买</div>
              </div>
            )}
          </div>
        </div>

        {/* Meta info */}
        <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-gray-100 text-sm text-gray-500">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            {template.stars.toLocaleString()} 收藏
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            预计 {template.deployTime} 完成部署
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            支持：{template.cloudProviders.join(" · ")}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Use case */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
            <h2 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              适合人群
            </h2>
            <p className="text-gray-700 text-sm">{template.useCase}</p>
          </div>

          {/* Deploy Steps */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-4">一键部署教程</h2>
            <div className="space-y-4">
              {template.steps.map((step, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                  <div className="flex items-center gap-3 p-4 bg-gray-50 border-b border-gray-200">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                      {idx + 1}
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm">{step.title.replace(/^\d+\.\s*/, "")}</h3>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 text-sm mb-3">{step.description}</p>
                    {step.code && (
                      <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 text-xs overflow-x-auto leading-relaxed">
                        <code>{step.code}</code>
                      </pre>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* CTA */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 sticky top-20">
            {template.price === 0 ? (
              <>
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-green-600 mb-1">永久免费</div>
                  <p className="text-gray-400 text-xs">按教程操作，10分钟内完成</p>
                </div>
                <button className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-700 transition-colors mb-2">
                  开始部署（免费）
                </button>
              </>
            ) : (
              <>
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-orange-600 mb-1">¥{template.price}</div>
                  <p className="text-gray-400 text-xs">一次购买，永久使用</p>
                </div>
                <button className="w-full bg-orange-500 text-white py-2.5 rounded-lg font-semibold text-sm hover:bg-orange-600 transition-colors mb-2">
                  立即购买
                </button>
              </>
            )}
            <Link
              href="/submit"
              className="block w-full text-center border border-gray-200 text-gray-600 py-2.5 rounded-lg text-sm hover:bg-gray-50 transition-colors"
            >
              需要定制？联系我们
            </Link>
          </div>

          {/* Features */}
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-3 text-sm">功能特性</h3>
            <ul className="space-y-2">
              {template.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-3 text-sm">相关标签</h3>
            <div className="flex flex-wrap gap-2">
              {template.tags.map((tag) => (
                <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-lg">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
