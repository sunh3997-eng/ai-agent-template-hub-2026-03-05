import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Agent 模板市场 - 一键部署专业 AI Agent",
  description: "中文化的 AI Agent 模板商店，让不会编程的用户也能一键部署专业 AI Agent。涵盖客服、内容创作、数据分析等场景。",
  keywords: "AI Agent, 人工智能, 模板, 一键部署, 客服机器人, 内容创作",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
