# NOTES — 教学偏好与工作笔记

## 用户偏好（2026-08-26 确认）

- 语言：简体中文
- 学习目标：全面建立知识框架（概念地图、关键方法、技术脉络）
- 学习形式：概念讲解 + 小练习（即时反馈）+ 动手作业 结合
- 已有基础：CS329A 全部 9 讲转录已整理为 wiki 知识页（59+ 页），做过一次深度查询（验证器驱动推理时扩展）
- 教学节奏：每课短小、可快速完成

## 工作笔记（2026-08-28 追加）

- **第 1 课已建**：`lessons/0001-what-is-a-self-improving-agent.html`（闭环 + 四问题 + 三标准），配套参考 `reference/0002-self-evolution-framework.html`。
- **三标准出处已核实**：Gao et al. 综述 v4（TMLR/OpenReview 版）§2.1 Operational definition——(i) 经验驱动 (ii) 持久策略改变 (iii) 自主探索。原文："modifies its internal parameters, contextual state, toolset, or architectural topology based on its own trajectories or feedback signals, with the explicit objective of improving future performance"。MISSION.md 中「三标准」提法成立。
- 第 1 课 quiz 答案分布：C/B/D/B/C，共 5 题（80% 通过线 = 4/5）。用户作答后须：记录得分、写 learning-record 0002、据结果决定第 2 课 ZPD。
## 工作笔记（2026-08-28 追加 2）

- **用户主动提问「辨析测试内/间时间演化」**（已在会话内讲解）：判据=学习相对任务执行的时序（§4 原文 intra=occurs during task execution / inter=occurs between task completions）；机制≠时序（ICL/SFT/RL 在 §4.1、§4.2 各有三子类）；测试时计算扩展≠测试内自进化（纯采样筛选不改变行为）。
- **第 1 课 Q4 已修正**：由 AlphaCode 改为 LATS（AlphaCode 推理时采样筛选属测试时计算扩展而非演化，原题面有概念瑕疵；其 GOLD 微调为 inter-test-time）。速查卡 0002 增设 §2.1「测试内 vs 测试间」对照小节点，并修正 AlphaCode 标签行。
## 工作笔记（2026-08-28 追加 3）

- **第 2 课已建**：`lessons/0002-generation-verification-gap.html`（生成-验证差距 + 验证器两位置 + ORM/PRM + Math-Shepherd + 可验证领域），配套参考 `reference/0003-verifier-choices.html`。
- 第 2 课 quiz 答案分布：B/A/C/B/A（5 题，80% 通过线 = 4/5）。
- 第 2 课开头加了 30 秒检索练习（回顾第 1 课闭环+when 判据，details 折叠）——spacing/retrieval 策略。
- 用户未完成第 1 课 quiz/作业即推进第 2 课：已温和提醒可回头补做；若持续跳过练习，下课后调成「quiz 优先」节奏。
- **第 3 课已建**：`lessons/0003-test-time-compute-scaling.html`（四指标 pass@k/10@k/best-of-n/SC + LLM Monkeys 对数线性律 + 多数投票饱和 + AlphaCode 语义聚类 + 选择器决策），配套参考 `reference/0004-test-time-scaling.html`。
- 第 3 课 quiz 答案分布：B/C/A/A/B（5 题，80% 通过线 = 4/5）。用户 **5/5** 通过；作业「瓶颈在哪」未交即推进。
- **课间迁移问答已答**（用户问 Claude Code/Codex/DSH/API 的测试时扩展实例）：判别卡=不动权重+多烧推理算力；CLAUDE.md 教训写回=跨任务演化非测试时扩展；reasoning_effort 为显式预算产品化；已下「迁移挑战」作业（找一处 TTCS 实例）。
- **第 4 课已建**：`lessons/0004-train-time-scaling.html`，配套 `reference/0005-train-time-scaling.html`。
- 第 4 课 quiz 答案分布：C/D/A/B/C（5 题）。题库模式：L1 C/B/D/B/C → L2 B/A/C/B/A → L3 B/C/A/A/B → L4 C/D/A/B/C。
- 用户第 2 课 quiz 5/5、第 3 课 quiz 5/5；第 1 课 quiz 仍未做。
- **第 3 课作业补交**（2026-08-31）：①「瓶颈在哪」✅ 满分（筛选能力 vs 生成能力判断链清晰）；②「两个改进方案」用户忘记，已补讲（语义聚类 + 增强验证器重排；加采样非主方向）。点评已入 learning-records/0004。
- **第 4 课小作业已交**（2026-09-01）：选型题答对一半（响应长度 ✓，缺「全对占比」指标）；辨真伪结论对（不能）但理由混淆「搜索空间内固化」≠「边界外创造」，已修正。点评同入 0004。第 4 课 quiz 仍待报分。
- **第 4 课 quiz 3/5 未通过**（2026-09-01，通过线 4/5）：已下发 5 题复习线索（不泄答案），等重答报分。learning-record 0005 待通过后写。
## 技术约定（2026-09-01）

- **公式渲染一律用 LaTeX + MathJax**：`assets/mathjax-config.js`（配置）+ `assets/vendor/mathjax/tex-svg.js`（本地化渲染器，2.1MB，勿删/勿改 CDN）。行内 `$...$`，块级 `$$...$$`。
- **禁止在正文/速查卡用 Unicode 符号冒充公式**（如 Σ、ℓ 的直接文本写法）——符号表、sidenote 里的自然语言符号说明除外（如「Π 智能体系统」）。
- 页面挂接模板（放在 `</head>` 前）：
  `<script src="../assets/mathjax-config.js"></script>` + `<script id="MathJax-script" src="../assets/vendor/mathjax/tex-svg.js" async></script>`
- **NOTE 卡片**用 `.callout.note`（蓝，`assets/shared.css` 已定义；与 `.callout.win`/`.callout.ask` 同构）：适合公式逐符号拆解、易混淆点警示。
- 验证方式：改完公式后用浏览器打开对应 html，检查 `mjx-container` 存在且无裸 Unicode 残留（TreeWalker 遍历非 mjx 文本）。
## 工作笔记（2026-09-01 追加 4）

- **第 5 课已建**：`lessons/0005-tools-and-code-feedback.html`（工具调用→环境反馈；执行反馈/单元测试/AI-as-a-Compiler；RLEF 执行信号做 RL；Agent Search；LATS 六阶段将 MCTS 引入 LLM），配套 `reference/0006-tools-and-code-feedback.html`。
- 第 5 课 quiz 答案分布：D/C/B/D/B（5 题）。L2 B/A/C/B/A → L3 B/C/A/A/B → L4 C/D/A/B/C → L5 D/A/C/B/D。
- **技术约定**（见上「技术约定」区块）：公式一律 LaTeX+MathJax（vendor 本地化）；NOTE 卡 `.callout.note`；禁止 Unicode 冒充公式。第 5 课已含公式载体（LATS 评估合成分数）——首次把 MathJax 用到 lesson 正文，已验证渲染。
- 用户跳过第 3 课作业、第 4 课 quiz 重答未报分——节奏提示已用；若第 5 课 quiz 完成后连续跳过两次，考虑在下一课开头加「先补前课」提示。
- 第 5 课开始，速查卡/课程模板已全量接入 MathJax head（0002/0005 迁移，0006 新建）；后续课程照抄 `assets/mathjax-config.js` + `tex-svg.js` 双行。
- **共享资源 insight 已入课**（2026-09-01）：用户问 LATS 在互斥设备环境的可行性 → 结论「环境可回放（可重置/无副作用）才是 LATS 地基假设，比可逆更强；原版未处理共享资源」。reference/0006 新增 §6.1（三问判别 + 三适配方向，锚点 lats-limits）；lesson 0005 §4 加 callout.note 指回。细节见 learning-records/0005 课后追加。
