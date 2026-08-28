# 自进化 Agent 资源清单

## Knowledge

### 课程（主线）

- [CS329A: Self-Improving AI Agents — 课程官网](https://cs329a.stanford.edu/)
  斯坦福研究生研讨课（Aakanksha Chowdhery & Azalia Mirhoseini），官方 syllabus 按讲次链接必读论文，是天然的阅读地图。用于：课程知识的主干。
- [Stanford Online 公开录像（YouTube 播放列表）](https://www.youtube.com/playlist?list=PLangBM27OtEA)
  2025 秋季学期完整公开录像。用于：对照本地转录核对细节、听原讲者表述。
- 本地材料：`raw/cs329a/transcripts/`（9 讲中文转录）+ `wiki/`（59+ 知识页，Obsidian 可读）
  用于：本工作区所有课程的知识底座，lesson 中的引用优先指向这些本地材料。

### 综述（领域地图）

- [Gao et al., "A Survey of Self-Evolving Agents: What, When, How, and Where to Evolve on the Path to Artificial Super Intelligence" (arXiv:2507.21046)](https://arxiv.org/abs/2507.21046)
  领域第一份系统综述（TMLR 2026，在线全文版 https://arxiv.org/html/2507.21046v4 含 §2.1 操作性定义）。给出自进化三判定标准（经验驱动、持久策略改变、自主探索）与四问题分类法（what/when/how/where）。用于：领域框架的权威依据。
- [Fang et al., "A Comprehensive Survey of Self-Evolving AI Agents" (arXiv:2508.07407)](https://arxiv.org/abs/2508.07407)
  提出 I-A-E-O 框架（输入-智能体-环境-优化器）与自进化三定律（Endure/Excel/Evolve）。用于：补充系统视角与安全约束。
- [Jiang et al., "Adaptation of Agentic AI: A Survey of Post-Training, Memory, and Skills" (arXiv:2512.16301)](https://arxiv.org/abs/2512.16301)
  从「适配」角度给出 2×2 分类（A1/A2/T1/T2），含冻结 agent 监督搜索子代理的数据效率发现。用于：工具/技能适配主题。

### 关键论文（与课程配套，均已在本 wiki 中整理）

- STaR（自生成推理迭代微调）— `wiki/star.md`
- DeepSeekMath + GRPO（数学预训练 + 训练时 RL）— `wiki/deepseek-math.md`
- DAPO（长链推理 RL 稳定化）— `wiki/dapo.md`
- AlphaCode / AlphaCode 2（百万采样 + 验证筛选 + 聚类提交）— `wiki/alphacode.md`
- Math-Shepherd / PRM800K（过程奖励模型）— `wiki/math-shepherd.md`, `wiki/prm800k.md`
- Large Language Monkeys（推理时采样扩展）— `wiki/large-language-monkeys.md`
- LATS（MCTS 树搜索 + LLM-as-a-Judge）— `wiki/lats.md`
- SPRINT（推理模型转规划器 + 并行执行）— `wiki/sprint.md`
- ReAct / RLEF / Constitutional AI（工具反馈学习）— `wiki/tool-calling.md`, `wiki/rlef.md`, `wiki/alignment.md`
- METR / GDPval / DeepScholar-Bench（长时程评估）— `wiki/metr.md`, `wiki/gdpval.md`, `wiki/deepscholar-bench.md`

## Wisdom (Communities)

- [r/MachineLearning](https://reddit.com/r/MachineLearning) — 论文讨论区，[Research] 标签下的讨论质量高。用于：追踪新方法评价、提问验证理解。
- [Hugging Face 论坛（Agents 板块）](https://discuss.huggingface.co/) — 工程实践问答活跃。用于：RL 训练、智能体框架的实操问题。
- [Hugging Face Daily Papers](https://huggingface.co/papers) — 每天抓取最新 arXiv 论文。用于：保持领域前沿感知（每周扫一次即可）。
- 本地社区偏好：尚未确认，后续会话中询问用户是否愿意加入线上社区。

## Gaps

- 无重大缺口。现有课程 + 三篇综述覆盖了领域框架；缺的是用户自己的动手系统（可在课程后期补充为项目课）。
