# 节气手帖 · 大学计算机基础综合设计网站

主题：二十四节气（资讯/博客类）。网站文件夹：`WebStation-G1/`，双击 `index.html` 即可离线浏览。

## 文件结构

```
WebStation-G1/
├── index.html          首页（组长）
├── page/               8 张子网页，每人 2 张
│   ├── spring.html  qingming.html   张三（春）
│   ├── summer.html  xiazhi.html     李四（夏）
│   ├── autumn.html  qiufen.html     王五（秋）
│   └── winter.html  dongzhi.html    赵六（冬）
├── css/style.css       公共外部样式
├── js/main.js          显示日期/当前节气、表单提示（约 80 行）
├── image/              9 张 SVG 插画
├── audio/sishi.wav     首页背景小曲
├── video/              （空，可自行添加）
└── document/           个人报告 PDF（目前为占位文件）
```

## 交作业前必须替换的内容（全部是占位信息）

| 要改的 | 位置 |
|---|---|
| 小组编号 `G1` | 文件夹名 `WebStation-G1`、所有页面页脚、首页“关于我们” |
| 组名“拾光小组”、专业班级 | 所有页面页脚、首页“关于我们” |
| 学号 `202500000X` 与姓名 张三/李四/王五/赵六 | 每页的 `<title>`、“本页制作人”表格、页脚、报告下载链接、首页成员表 |
| 报告 PDF | 用自己的报告替换 `document/学号姓名.pdf`，文件名要与链接一致 |

建议用 VSCode 的“在文件夹中替换”（Ctrl+Shift+H）批量替换。

## 每页都满足的要求清单

标题区 `<header>` · 导航区 `<nav>` · 内容区 `<main>` · 页脚区 `<footer>` · 外部/内部/行内 CSS · 列表 · 超链接 · 段落 · 表单 · 图片 · 报告下载 · 制作人表格（学号、姓名分两格）· 返回首页 · 标题为“学号姓名”。

## 写报告时可以引用的代码

- **外部 CSS**：每页 `<head>` 中的 `<link rel="stylesheet" ... href="../css/style.css">`
- **内部 CSS**：每页 `<head>` 中的 `<style>`（每人的页面各不相同）
- **行内 CSS**：例如 `<p style="margin-top: 14px;">`、首页 `<p style="text-indent: 2em;">`
- **选择器**：元素选择器 `body`、类选择器 `.card`、id 选择器 `#current-term` / `#day`、后代选择器 `.site-nav a`、伪类 `a:hover`、伪元素 `.custom-list li::before`
- **额外技术（加分项）**：CSS 变量与季节主题色、Flex/Grid 布局、`transition` 悬停动画、`position: sticky` 吸顶导航、`@media` 手机适配、CSS 计数器、JS 显示日期与当前节气、小测验判分
