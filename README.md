# Data Portfolio Hub

请检查以下提示词是否完全具备可行性：你是一个前端开发助手。请生成一个【完全独立】的静态展示网站，用途是【数据分析岗位求职作品集】。这是一个全新的项目，与任何其他网站没有任何关联。

【硬性约束，务必全部遵守】

1. 纯静态展示站：不需要任何后端、数据库、登录、服务器逻辑。

2. 绝对不要引用或链接任何外部网站。不要生成"返回首页""了解更多""查看其他作品""个人主页""博客""更多项目"之类的导航文字或按钮。

3. 不要引入任何第三方脚本或统计工具（包括 Google Analytics、百度统计、埋点 SDK 等）。

4. 不要添加任何"联系我"表单、邮件收集、订阅功能。

5. 页面内导航仅允许【站内锚点跳转】（点击平滑滚动到首页/项目/能力/方法/证据），不得跳转到站外。

6. 作者姓名（鲜芳慧）和学校（广东财经大学）使用真实信息；但不得出现任何队友、老师、第三方的真实姓名，不得出现学号、手机号、邮箱、课程群等隐私信息。

7. 单页滚动式（single-page scroll），无多页面路由。

8. 不要嵌入任何在线可视化看板（如 Tableau Public iframe），证据板块的图表一律使用本地图片/占位图，不使用外部嵌入链接。

9. 请在页脚移除或隐藏平台自带的"Made with Lovable"之类的角标/跳转链接；如果平台限制无法完全移除，请尽量将其做得不显眼。

10. 在页面 `<head>` 中添加 `<meta name="robots" content="noindex, nofollow">`，禁止搜索引擎收录本页面。

【页面排版结构（单页，从上到下）】

1. 顶部导航栏：极简，仅锚点（首页 / 项目 / 能力 / 方法 / 证据）；无 logo 外链、无社交图标、无"关于我"外链。

2. Hero 首屏：

   - 大标题："数据分析方向候选人"

   - 副标题：2–3 行个人简介，例如"数据科学与大数据技术专业本科生，擅长电商用户行为分析、指标体系搭建与数据可视化，熟悉 Python + Tableau 分析链路。"

   - 姓名与学校（替换为真实信息）

   - 右侧或底部放一个简洁的数据可视化装饰图（抽象风格，不要引用外部图）

3. 项目板块（Project）——重点展开这一个项目：

   - 项目标题：淘宝用户行为特征与转化链路深度分析

   - 一句话定位：基于 1 亿条公开脱敏淘宝用户行为数据，完成从流量、转化、留存到用户分层的完整分析。

   - 数据规模：UserBehavior 数据集，1 亿条记录，时间范围 2017/11/25–12/03（9 天），字段包含 user_id、item_id、category_id、behavior_type（pv/fav/cart/buy）、timestamp。

   - 技术栈：Python（pandas 数据清洗/采样/统计）+ Tableau（可视化看板，仅作为静态导出图使用，非在线嵌入）。

   - 分析模块：

     ① 流量与时段分析：累计 UV 6.8M、累计 PV 89.7M、人均浏览深度 13 页；识别出晚间 20–21 点为全天行为高峰。

     ② 核心转化漏斗：在 98.4 万独立访客中，74.77% 产生收藏或加购行为；从收藏/加购到购买的用户占比为 32.76%；9 天内 UV 购买转化率达到 56.6%。

     ③ 用户分层（RFM）：挽留用户 36.23%、发展用户 36.15%、价值用户 21.24%、保持用户 6.37%；价值用户人均购买 6.51 件。

     ④ 同期群留存（Cohort）：展示 9 天用户留存热力矩阵。

     ⑤ 品类/商品 Top 分析：识别热门类目与商品。

   - 项目贡献：独立完成数据清洗、指标体系设计、分析建模、Tableau 可视化看板与最终报告。

4. 能力板块（Skills）：

   - SQL —— 熟悉数据查询与表结构抽象

   - Python / Pandas —— 亿级数据清洗、采样、统计计算

   - 统计分析 —— 漏斗分析、留存分析、RFM 用户分层

   - 数据可视化 —— Tableau 看板 + 静态图表设计

   - 业务理解 —— 电商用户行为链路拆解、指标口径定义

5. 方法板块（Methods）：

   - 指标体系：UV/PV、人均浏览深度、UV 购买转化率

   - 漏斗分析：点击→收藏/加购→购买的转化链路拆解

   - 用户分层：RFM 模型识别高价值/挽留/发展/保持用户

   - 留存分析：Cohort 同期群矩阵观察用户回流

   - 复盘方法：从数据发现→业务假设→验证结论的完整闭环

6. 证据板块（Evidence）：

   - 展示 4 个关键图表占位位（先使用占位图，后续替换为本地文件）：

     ① DAU / 小时行为分布图

     ② 核心转化漏斗图

     ③ RFM 用户分层图

     ④ Cohort 留存热力图

   - 报告说明位：提示本分析产出了完整的《淘宝用户行为特征与转化链路深度分析报告》。

7. 关于/页脚：

   - 真实姓名、学校名（替换为真实信息）

   - 一句求职意向

   - 不放外链、不放社交账号入口、不放"返回顶部"以外的任何跳转

【视觉风格】

- 商务稳重 + 数据科技感的混合风格。

- 配色 token（具体色值，全站统一复用）：

  - 主色 accent：#ff5a3c（珊瑚橙，与已有报告图表的暖橙统一，用于强调、大号数字、hover 边框光）

  - 辅色 accent2：#ffb547（琥珀黄，用于标题渐变、次强调）

  - 底色：浅灰 #f5f5f4；卡片底：白 #ffffff；分隔线：极淡灰

  - 文字：主 #1f2329，次 #6b7280

- 浅色背景，卡片式布局，充足留白。

- 卡片交互（颜色层面）：默认 1px 极淡灰边框；hover 时边框转半透明橙 + 橙色柔光阴影，数据数字用 accent 色突出。

- 无衬线字体，标题加粗，数据数字用大号字体、accent 色突出。

- 响应式适配手机端。

【图片与占位说明】

- Hero 装饰图、项目分析流程图、证据板块图表先用占位图（placeholder），不要引用外部图床。

- 我会把占位图替换为本地分析图表：DAU.png、核心转化漏斗图、用户分层图、Cohort 留存图。

【技术要求】

- 现代前端方案（React + Tailwind 或等价），最终交付一个能直接预览/部署的网页，技术细节我不需要参与。

- 代码组件化、干净，便于我后续手动替换姓名、学校、占位图和少量文案。

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://xfh-gdufe-analysis.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/91e48f76-2bac-4d45-9e77-a39ea7102c95).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
