"use client";

import { useState } from "react";
import Link from "next/link";
import TemplateCard from "@/components/TemplateCard";
import { templates, CATEGORIES } from "@/data/templates";

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("全部");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = templates.filter((t) => {
    const matchCategory = activeCategory === "全部" || t.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchSearch =
      !q ||
      t.name.includes(q) ||
      t.description.includes(q) ||
      t.tags.some((tag) => tag.includes(q));
    return matchCategory && matchSearch;
  });

  const freeCount = templates.filter((t) => t.price === 0).length;
  const totalStars = templates.reduce((sum, t) => sum + t.stars, 0);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 text-blue-100 text-sm px-3 py-1.5 rounded-full mb-5">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              AI Agent 需求井喷，中文生态先机窗口期
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              一键部署专业 AI Agent
              <br />
              <span className="text-blue-200">无需编程，即刻提效</span>
            </h1>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              精选中文化 AI Agent 模板，适配阿里云、腾讯云等国内平台，
              <br className="hidden sm:block" />
              10 分钟内完成部署，让 AI 为您打工。
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center">
              <a
                href="#templates"
                className="w-full sm:w-auto bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                浏览免费模板
              </a>
              <Link
                href="/submit"
                className="w-full sm:w-auto border border-white/40 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                提交定制需求
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-4 max-w-md mx-auto">
            {[
              { value: `${templates.length}+`, label: "精选模板" },
              { value: `${freeCount}款`, label: "永久免费" },
              { value: `${(totalStars / 1000).toFixed(1)}k+`, label: "开发者使用" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-gray-500 text-sm font-medium uppercase tracking-wide mb-8">三步完成部署</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {[
              { step: "01", title: "选择模板", desc: "从模板库选择适合您业务场景的 AI Agent" },
              { step: "02", title: "按教程配置", desc: "中文图文教程，手把手指导配置和部署" },
              { step: "03", title: "上线运行", desc: "接入微信/网站/小程序，AI Agent 开始工作" },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold text-sm shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Template Listing */}
      <section id="templates" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h2 className="text-xl font-bold text-gray-900">模板广场</h2>
          <div className="relative">
            <svg className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="搜索模板..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-48"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 flex-wrap mb-6">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Template Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-gray-400">
            <svg className="w-12 h-12 mx-auto mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p>没有找到匹配的模板</p>
            <button onClick={() => { setSearchQuery(""); setActiveCategory("全部"); }} className="mt-2 text-blue-600 text-sm hover:underline">
              清除筛选
            </button>
          </div>
        )}
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-gray-50 py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">价格方案</h2>
          <p className="text-gray-500 text-center mb-8">从免费开始，按需升级</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                name: "免费版",
                price: "¥0",
                period: "永久免费",
                features: ["全部免费模板", "中文部署教程", "社区支持"],
                cta: "立即使用",
                href: "#templates",
                highlight: false,
              },
              {
                name: "高级模板",
                price: "¥29-99",
                period: "一次性购买",
                features: ["高级场景模板", "视频部署教程", "邮件技术支持", "模板源码"],
                cta: "查看高级模板",
                href: "#templates",
                highlight: true,
              },
              {
                name: "企业定制",
                price: "¥2000起",
                period: "一次性服务",
                features: ["需求定制开发", "专属部署支持", "1对1技术对接", "后续维护服务"],
                cta: "联系我们",
                href: "/submit",
                highlight: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`rounded-xl p-6 ${plan.highlight ? "bg-blue-600 text-white ring-2 ring-blue-600 ring-offset-2" : "bg-white border border-gray-200"}`}
              >
                <h3 className={`font-bold text-lg mb-1 ${plan.highlight ? "text-white" : "text-gray-900"}`}>{plan.name}</h3>
                <div className="mb-1">
                  <span className={`text-2xl font-bold ${plan.highlight ? "text-white" : "text-gray-900"}`}>{plan.price}</span>
                </div>
                <p className={`text-sm mb-4 ${plan.highlight ? "text-blue-200" : "text-gray-400"}`}>{plan.period}</p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className={`text-sm flex items-center gap-2 ${plan.highlight ? "text-blue-100" : "text-gray-600"}`}>
                      <svg className={`w-4 h-4 shrink-0 ${plan.highlight ? "text-blue-200" : "text-green-500"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.href}
                  className={`block text-center py-2 rounded-lg text-sm font-semibold transition-colors ${
                    plan.highlight
                      ? "bg-white text-blue-600 hover:bg-blue-50"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-3">没找到合适的模板？</h2>
          <p className="text-gray-400 mb-6">告诉我们您的业务需求，我们提供专属定制 AI Agent 方案</p>
          <Link
            href="/submit"
            className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            提交定制需求
          </Link>
        </div>
      </section>
    </div>
  );
}
