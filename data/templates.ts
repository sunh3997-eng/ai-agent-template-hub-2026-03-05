export interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  tags: string[];
  difficulty: "简单" | "中等" | "进阶";
  price: number; // 0 = free
  stars: number;
  deployTime: string;
  useCase: string;
  features: string[];
  steps: DeployStep[];
  cloudProviders: string[];
}

export interface DeployStep {
  title: string;
  description: string;
  code?: string;
}

export const CATEGORIES = ["全部", "客服运营", "内容创作", "数据分析", "电商运营", "办公效率", "营销推广"];

export const templates: Template[] = [
  {
    id: "customer-service-bot",
    name: "智能客服机器人",
    description: "7×24小时自动回复客户咨询，支持多轮对话、常见问题自动解答，大幅降低人工客服压力。",
    category: "客服运营",
    tags: ["客服", "自动回复", "多轮对话"],
    difficulty: "简单",
    price: 0,
    stars: 1240,
    deployTime: "10分钟",
    useCase: "适合电商店铺、SaaS产品、本地服务商",
    features: [
      "自动识别用户意图，精准回复",
      "支持接入微信、网站、小程序",
      "一键导入常见问题库",
      "对话记录自动存档分析",
    ],
    steps: [
      {
        title: "1. 获取 API Key",
        description: "前往 OpenAI 或阿里云百炼平台注册账号，获取 API Key。推荐使用阿里云百炼（国内访问更稳定）。",
      },
      {
        title: "2. 配置知识库",
        description: "将您的产品说明、常见问题整理成 TXT 文档，上传至系统知识库。",
        code: `# 示例：常见问题格式
Q: 如何退款？
A: 请在订单页面点击「申请退款」，1-3个工作日内处理完毕。

Q: 支持哪些支付方式？
A: 支持微信支付、支付宝、银行卡转账。`,
      },
      {
        title: "3. 一键部署到阿里云",
        description: "使用阿里云函数计算（FC）一键部署，无需服务器，按调用次数计费。",
        code: `# 安装依赖
npm install

# 配置环境变量
cp .env.example .env
# 编辑 .env 填入您的 API Key

# 部署到阿里云
npm run deploy:aliyun`,
      },
      {
        title: "4. 接入您的渠道",
        description: "复制生成的 Webhook 地址，粘贴到微信公众号后台或您的网站代码中即可完成接入。",
      },
    ],
    cloudProviders: ["阿里云", "腾讯云", "本地部署"],
  },
  {
    id: "content-creator",
    name: "爆款内容创作助手",
    description: "输入主题关键词，自动生成小红书、公众号、抖音脚本等多平台爆款内容，支持一键多平台适配。",
    category: "内容创作",
    tags: ["内容创作", "小红书", "公众号", "抖音"],
    difficulty: "简单",
    price: 0,
    stars: 2089,
    deployTime: "5分钟",
    useCase: "适合自媒体博主、品牌运营、内容团队",
    features: [
      "支持小红书、公众号、抖音、B站多平台",
      "自动生成标题、正文、标签",
      "内置爆款文案风格模板",
      "批量生产，一键导出",
    ],
    steps: [
      {
        title: "1. 获取 API Key",
        description: "推荐使用 DeepSeek API（国产、价格低、效果好）或阿里云通义千问。",
        code: `# DeepSeek API 注册地址
https://platform.deepseek.com/

# 通义千问 API 注册地址
https://dashscope.aliyun.com/`,
      },
      {
        title: "2. 本地运行",
        description: "克隆项目后，安装依赖并配置 API Key，即可在本地运行。",
        code: `git clone https://github.com/your-org/content-creator
cd content-creator
npm install
echo "API_KEY=你的API密钥" > .env
npm run dev`,
      },
      {
        title: "3. 开始创作",
        description: "打开浏览器访问 http://localhost:3000，输入主题，选择平台，点击生成即可。",
      },
    ],
    cloudProviders: ["本地部署", "Vercel", "阿里云"],
  },
  {
    id: "ecommerce-analyst",
    name: "电商选品分析 Agent",
    description: "自动抓取平台热销数据，结合 AI 分析竞争格局、利润空间、供应链情况，输出选品报告。",
    category: "电商运营",
    tags: ["选品", "数据分析", "电商", "竞品分析"],
    difficulty: "中等",
    price: 49,
    stars: 876,
    deployTime: "30分钟",
    useCase: "适合淘宝、拼多多、亚马逊卖家",
    features: [
      "自动抓取平台销量、评价数据",
      "AI 分析市场竞争激烈程度",
      "利润率自动估算",
      "生成 PDF 选品报告",
    ],
    steps: [
      {
        title: "1. 环境准备",
        description: "需要 Python 3.9+ 环境，安装项目依赖。",
        code: `pip install -r requirements.txt`,
      },
      {
        title: "2. 配置平台账号",
        description: "配置您要分析的电商平台 Cookie（用于数据获取），详见文档说明。",
        code: `# 编辑 config.yaml
platform: "taobao"  # 或 "pinduoduo", "amazon"
cookie: "YOUR_COOKIE_HERE"
api_key: "YOUR_AI_API_KEY"`,
      },
      {
        title: "3. 运行分析",
        description: "输入目标品类关键词，Agent 将自动完成数据采集和分析，约需 5-10 分钟。",
        code: `python main.py --keyword "无线耳机" --platform taobao`,
      },
    ],
    cloudProviders: ["本地部署", "阿里云 ECS"],
  },
  {
    id: "social-media-manager",
    name: "社媒矩阵运营 Agent",
    description: "统一管理微博、微信、抖音、小红书多个账号，自动定时发帖、互动回复、数据统计。",
    category: "营销推广",
    tags: ["社媒运营", "自动发帖", "矩阵账号"],
    difficulty: "中等",
    price: 99,
    stars: 654,
    deployTime: "45分钟",
    useCase: "适合品牌方、MCN机构、个人IP运营",
    features: [
      "多平台统一管理界面",
      "定时自动发布内容",
      "评论自动筛选和回复",
      "数据可视化报表",
    ],
    steps: [
      {
        title: "1. 部署服务",
        description: "推荐部署在腾讯云轻量应用服务器（99元/年），稳定可靠。",
        code: `# 腾讯云一键部署
docker pull your-org/social-manager:latest
docker run -d -p 3000:3000 \\
  -e API_KEY=your_key \\
  your-org/social-manager`,
      },
      {
        title: "2. 授权平台账号",
        description: "扫码授权各平台账号，系统获得发布权限后即可开始自动化运营。",
      },
      {
        title: "3. 配置发布计划",
        description: "在可视化日历中拖拽安排内容发布时间，支持批量导入内容。",
      },
    ],
    cloudProviders: ["腾讯云", "阿里云", "Vercel"],
  },
  {
    id: "meeting-minutes",
    name: "会议纪要自动整理",
    description: "上传会议录音或实时转录，AI 自动提炼关键决策、待办事项、负责人，生成结构化会议纪要。",
    category: "办公效率",
    tags: ["会议纪要", "语音转文字", "办公自动化"],
    difficulty: "简单",
    price: 0,
    stars: 1580,
    deployTime: "10分钟",
    useCase: "适合公司管理层、项目团队、创业者",
    features: [
      "支持上传 MP3/MP4 录音文件",
      "实时语音转文字（普通话优化）",
      "AI 提炼决议和待办",
      "一键发送邮件给与会者",
    ],
    steps: [
      {
        title: "1. 获取语音识别 API",
        description: "推荐使用阿里云语音识别（中文效果最佳），新用户赠送免费额度。",
      },
      {
        title: "2. 配置和运行",
        description: "填入 API Key 后即可使用，支持网页版和本地版两种部署方式。",
        code: `npm install && npm run dev
# 访问 http://localhost:3000 上传录音文件`,
      },
    ],
    cloudProviders: ["本地部署", "Vercel", "阿里云"],
  },
  {
    id: "data-report-agent",
    name: "数据分析报告 Agent",
    description: "上传 Excel/CSV 数据文件，AI 自动生成图表、发现数据规律、输出分析报告，无需 SQL 和 Python 经验。",
    category: "数据分析",
    tags: ["数据分析", "Excel", "可视化报告"],
    difficulty: "简单",
    price: 29,
    stars: 934,
    deployTime: "15分钟",
    useCase: "适合运营人员、电商卖家、小企业主",
    features: [
      "支持 Excel、CSV、Google Sheets",
      "自动生成可视化图表",
      "自然语言提问数据（无需写公式）",
      "一键导出 PDF 报告",
    ],
    steps: [
      {
        title: "1. 快速启动",
        description: "基于 Python Flask 构建，安装后即可使用。",
        code: `pip install -r requirements.txt
python app.py
# 访问 http://localhost:5000`,
      },
      {
        title: "2. 上传数据",
        description: "拖拽上传 Excel 文件，系统自动解析数据结构并提供分析建议。",
      },
      {
        title: "3. 对话式分析",
        description: "用中文提问，如「本月哪个产品销量最高？」，AI 直接回答并生成图表。",
      },
    ],
    cloudProviders: ["本地部署", "阿里云", "腾讯云"],
  },
  {
    id: "seo-content-optimizer",
    name: "SEO 内容优化 Agent",
    description: "分析目标关键词搜索意图，自动生成符合百度/Google SEO规则的高质量文章，提升自然搜索排名。",
    category: "营销推广",
    tags: ["SEO", "内容营销", "关键词优化"],
    difficulty: "中等",
    price: 49,
    stars: 721,
    deployTime: "20分钟",
    useCase: "适合网站运营、内容营销团队、独立站卖家",
    features: [
      "关键词竞争度分析",
      "自动生成 SEO 优化文章",
      "内链建议和图片 Alt 优化",
      "批量生产内容（支持定时任务）",
    ],
    steps: [
      {
        title: "1. 安装配置",
        description: "需要配置 AI API Key 和目标网站信息。",
        code: `git clone https://github.com/your-org/seo-agent
cd seo-agent
pip install -r requirements.txt
cp config.example.yaml config.yaml`,
      },
      {
        title: "2. 输入目标关键词",
        description: "在配置文件中填入目标关键词列表，系统自动批量生成优化文章。",
      },
      {
        title: "3. 发布到网站",
        description: "支持一键推送到 WordPress、Notion 等平台。",
      },
    ],
    cloudProviders: ["本地部署", "阿里云 ECS", "腾讯云"],
  },
  {
    id: "email-auto-reply",
    name: "邮件智能处理 Agent",
    description: "自动分类邮件优先级，为重要邮件起草回复草稿，过滤垃圾邮件，让邮箱管理效率提升10倍。",
    category: "办公效率",
    tags: ["邮件管理", "自动回复", "办公效率"],
    difficulty: "简单",
    price: 0,
    stars: 1123,
    deployTime: "15分钟",
    useCase: "适合外贸从业者、销售人员、企业管理者",
    features: [
      "自动识别邮件重要程度",
      "AI 起草回复建议",
      "支持中英文双语处理",
      "与 Gmail、Outlook 无缝集成",
    ],
    steps: [
      {
        title: "1. 授权邮箱访问",
        description: "通过 OAuth2 授权您的 Gmail 或 Outlook 账号（企业邮箱也支持）。",
      },
      {
        title: "2. 配置处理规则",
        description: "设置邮件分类规则和回复风格，系统即可开始自动处理。",
        code: `# config.json 示例
{
  "priority_keywords": ["报价", "合同", "紧急"],
  "auto_reply_style": "professional",
  "language": "zh-CN"
}`,
      },
      {
        title: "3. 审核和发送",
        description: "AI 起草回复后，您审核确认后一键发送，保持人工把关。",
      },
    ],
    cloudProviders: ["本地部署", "Vercel", "腾讯云"],
  },
];
