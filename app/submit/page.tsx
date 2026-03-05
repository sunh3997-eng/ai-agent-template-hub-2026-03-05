"use client";

import { useState } from "react";
import Link from "next/link";

interface FormData {
  name: string;
  company: string;
  contact: string;
  useCase: string;
  budget: string;
  description: string;
}

export default function SubmitPage() {
  const [form, setForm] = useState<FormData>({
    name: "",
    company: "",
    contact: "",
    useCase: "",
    budget: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.contact || !form.description) {
      setError("请填写必填项（姓名、联系方式、需求描述）");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("提交失败，请稍后重试");
      }
    } catch {
      setError("提交失败，请稍后重试");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">需求已提交！</h1>
        <p className="text-gray-500 mb-6">我们将在 24 小时内通过您留下的联系方式回复您，请保持手机畅通。</p>
        <Link href="/" className="inline-block bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors">
          返回模板广场
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-blue-600 transition-colors">首页</Link>
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-gray-600">定制需求</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form */}
        <div className="lg:col-span-2">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">提交定制需求</h1>
          <p className="text-gray-500 mb-6">告诉我们您的业务场景，我们为您定制专属 AI Agent 方案</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  您的姓名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="王先生 / 李女士"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">公司/团队名称</label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="XX科技有限公司（可不填）"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                联系方式 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="contact"
                value={form.contact}
                onChange={handleChange}
                placeholder="微信号 / 手机号 / 邮箱"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">应用场景</label>
              <select
                name="useCase"
                value={form.useCase}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="">请选择最接近的场景</option>
                <option value="客服运营">客服运营（自动回复、FAQ）</option>
                <option value="内容创作">内容创作（文章、脚本、文案）</option>
                <option value="数据分析">数据分析（报告、可视化）</option>
                <option value="电商运营">电商运营（选品、定价、推广）</option>
                <option value="办公效率">办公效率（邮件、文档、会议）</option>
                <option value="营销推广">营销推广（社媒、SEO、广告）</option>
                <option value="其他">其他场景</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">预算范围</label>
              <select
                name="budget"
                value={form.budget}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="">请选择预算</option>
                <option value="2000以内">¥2,000 以内（基础定制）</option>
                <option value="2000-5000">¥2,000 - ¥5,000（标准定制）</option>
                <option value="5000-10000">¥5,000 - ¥10,000（高级定制）</option>
                <option value="10000以上">¥10,000 以上（企业级方案）</option>
                <option value="待讨论">待讨论</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                需求描述 <span className="text-red-500">*</span>
              </label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={5}
                placeholder={`请详细描述您的需求，例如：
- 您希望 AI Agent 做什么？
- 对接哪些平台或系统？
- 希望什么时间上线？
- 有什么特殊要求？`}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "提交中..." : "提交需求"}
            </button>

            <p className="text-xs text-gray-400 text-center">
              提交即表示您同意我们通过您留下的联系方式与您沟通
            </p>
          </form>
        </div>

        {/* Sidebar info */}
        <div className="space-y-4">
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-3 text-sm">服务流程</h3>
            <ol className="space-y-3">
              {[
                "提交需求表单",
                "24小时内回复确认",
                "需求沟通和方案确认",
                "开发和交付（3-7天）",
                "上线支持和培训",
              ].map((step, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-3 text-sm">定制服务包含</h3>
            <ul className="space-y-2">
              {[
                "需求分析和方案设计",
                "Agent 开发和测试",
                "部署到您的服务器",
                "使用文档和培训",
                "30天免费售后支持",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-900 text-white rounded-xl p-5">
            <h3 className="font-semibold mb-2 text-sm">直接联系</h3>
            <p className="text-gray-400 text-xs mb-3">如需快速沟通，可直接添加微信</p>
            <div className="bg-white/10 rounded-lg p-3 text-center">
              <p className="text-sm font-mono">微信：AgentHub2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
