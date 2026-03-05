"use client";

import { useState } from "react";

const faqs = [
  {
    q: "我没有编程基础，能用这里的模板吗？",
    a: "完全可以。我们的部署教程专为非技术用户设计，提供 Vercel（国际）和阿里云（国内）两种方案，按步骤操作即可，通常 5-10 分钟完成部署。",
  },
  {
    q: "使用这些模板需要付费吗？",
    a: "标注「免费」的模板完全免费使用。你需要自行承担 AI API 费用（如通义千问、DeepSeek 等）和云服务器费用。Vercel 免费套餐对大多数个人和小团队已经足够。",
  },
  {
    q: "模板支持哪些 AI 模型？",
    a: "不同模板支持范围不同，详见各模板说明。大多数支持 DeepSeek、通义千问、文心一言、OpenAI GPT 等主流模型，可在部署时通过环境变量切换。",
  },
  {
    q: "部署后可以自定义吗？",
    a: "可以。所有模板都是开源的，你可以在 GitHub 上 Fork 后任意修改，包括界面样式、回复逻辑、知识库内容等。",
  },
  {
    q: "如何保证数据安全和隐私？",
    a: "模板部署在你自己的服务器或云账号下，数据不经过我们的系统。建议使用环境变量存储 API Key，不要将密钥提交到 Git 仓库。",
  },
  {
    q: "我想要的场景没有对应模板怎么办？",
    a: "请点击「提交定制需求」告诉我们你的业务需求，我们会根据需求频次优先开发，也提供付费定制服务，3-7 天交付。",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {faqs.map((faq, i) => (
        <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
          >
            <span className="text-sm font-medium text-gray-900 dark:text-white">{faq.q}</span>
            <svg
              width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              className={`shrink-0 text-gray-400 transition-transform ${open === i ? "rotate-180" : ""}`}
            >
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
          {open === i && (
            <div className="px-5 pb-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
