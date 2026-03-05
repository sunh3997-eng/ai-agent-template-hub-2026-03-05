import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">AI</span>
              </div>
              <span className="font-bold text-white">Agent 模板市场</span>
            </div>
            <p className="text-sm leading-relaxed">
              让每个人都能用上专业的 AI Agent，无需编程经验，一键部署，即刻提效。
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">快速导航</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">模板广场</Link></li>
              <li><Link href="/submit" className="hover:text-white transition-colors">定制需求</Link></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">价格方案</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">联系我们</h3>
            <ul className="space-y-2 text-sm">
              <li>微信：AgentHub2025</li>
              <li>邮箱：hello@agenthub.cn</li>
              <li className="pt-1">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub 开源项目
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <p>© 2026 AI Agent 模板市场. 基于 MIT 协议开源</p>
          <p>专注中文 AI Agent 生态建设</p>
        </div>
      </div>
    </footer>
  );
}
