# AI Agent 模板市场

为中小企业主、内容创作者、独立开发者提供精选 AI Agent 模板，无需技术背景，一键部署专业 AI 助手。

## 快速开始

```bash
npm install
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看页面。

## 功能

- **模板展示** — 9 个精选 AI Agent 模板，覆盖客服、内容创作、数据分析、自动化、电商运营
- **分类筛选** — 按场景快速找到所需模板
- **部署教程** — Vercel（国际）和阿里云函数计算（国内）两种方案，步骤详解
- **需求提交** — 用户可提交定制需求，留下联系方式
- **深色模式** — 支持系统偏好自动切换，手动切换
- **响应式** — 移动端、平板、桌面完整适配

## 技术栈

- [Next.js 14](https://nextjs.org/) — App Router
- [Tailwind CSS](https://tailwindcss.com/) — 样式
- TypeScript — 类型安全
- 纯静态，无后端依赖

## 目录结构

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navbar.tsx       # 顶部导航（含深色模式切换）
│   ├── Hero.tsx         # 首屏 Hero 区域
│   ├── Features.tsx     # 功能亮点
│   ├── TemplateGrid.tsx # 模板列表（含筛选）
│   ├── TemplateCard.tsx # 模板卡片
│   ├── DeployGuide.tsx  # 部署教程
│   ├── SubmitForm.tsx   # 需求提交表单
│   ├── FAQ.tsx          # 常见问题
│   └── Footer.tsx       # 页脚
└── data/
    └── templates.ts     # 模板 mock 数据
```

## 添加新模板

编辑 `src/data/templates.ts`，向 `templates` 数组追加新对象：

```ts
{
  id: "unique-id",
  name: "模板名称",
  description: "简短描述，100字以内",
  useCase: "适用场景",
  category: "客服",          // 客服 | 内容创作 | 数据分析 | 自动化 | 电商运营
  difficulty: "简单",        // 简单 | 中等 | 进阶
  tags: ["标签1", "标签2"],
  users: 0,
  deployUrl: "#deploy-guide",
}
```

## 部署到生产

```bash
# 部署到 Vercel（推荐）
npx vercel

# 或构建静态文件
npm run build
npm run start
```

## License

MIT © 2026
