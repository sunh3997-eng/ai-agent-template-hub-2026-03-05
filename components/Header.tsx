"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className="font-bold text-gray-900 text-lg hidden sm:block">Agent 模板市场</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors">
              模板广场
            </Link>
            <Link href="/submit" className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors">
              定制需求
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors"
            >
              开源项目
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              提交定制需求
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden py-3 border-t border-gray-100 space-y-1">
            <Link href="/" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg text-sm" onClick={() => setMenuOpen(false)}>模板广场</Link>
            <Link href="/submit" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg text-sm" onClick={() => setMenuOpen(false)}>定制需求</Link>
            <Link href="/submit" className="block px-3 py-2 text-blue-600 font-medium text-sm" onClick={() => setMenuOpen(false)}>提交定制需求</Link>
          </div>
        )}
      </div>
    </header>
  );
}
