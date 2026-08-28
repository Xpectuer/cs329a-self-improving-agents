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
