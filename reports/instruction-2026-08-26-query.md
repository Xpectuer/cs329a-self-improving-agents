# Query-Generated Page Suggestion (2026-08-26)

**回答**:

在 CS329A（Self-Improving AI Agents）课程中，验证器（verifier）是驱动推理时（测试时）计算扩展的核心组件，贯穿了课程的自我改进基本环路：**生成候选 → 验证器评分 → 反馈转化为奖励 → 强化学习更新策略 → 推理时用搜索探索更好候选**，形成"生成 → 验证 → 学习 → 搜索"的闭环（[[self-improving-ai-agents]]）。

### 1. 验证器如何提升推理时计算扩展

- **重复采样 + 验证器筛选（best-of-n）**：对同一问题让模型生成 n 个候选答案，再用验证器（训练好的奖励模型、规则检查器或另一个模型）评分排序并选出最优。这被称为 **large-language-monkeys** 范式——"以量取胜"，不改变参数、不重新训练，通过推理阶段投入更多算力来提升可靠性。实验显示求解率随采样预算大致呈**对数线性增长**（[[large-language-monkeys]], [[inference-scaling]]）。
- **生成-验证差距（generation-verification gap）**：在可验证领域（数学、代码等），重复采样配合验证器可显著提升正确率；但在没有可靠验证器的不可验证领域，多数投票在采样 10~50 个后便饱和，与"完美验证器"能达成的覆盖上限之间存在巨大差距，即使改用奖励模型排序也依然存在——这决定了验证器质量是整个系统性能上限的关键（[[generation-verification-gap]], [[inference-scaling]]）。
- **受限提交指标 10@k 与 pass@k**：当只能提交少量答案时，筛选/聚类阶段成为瓶颈（10@M 约 30% vs pass@M 超过 40%），聚类可以缓解这一问题（[[generation-verification-gap]], [[large-language-monkeys]]）。
- **可验证领域的天然验证器**：数学用形式化证明、编程用单元测试/执行反馈、语言间转换用输入输出等价性（如 AI-as-a-Compiler 生成 CUDA 代码，具备"完美验证器"），这些机制比生成任务本身更简单，从而能大规模自动筛选正确样本（[[verifiable-domains]]）。

### 2. 提到的代表性系统

| 系统/方法 | 验证器作用 |
|---|---|
| **OpenAI 2021《训练验证器解决数学问题》** | 第 3 讲核心主题：训练验证器为数学问题挑选/引导正确答案，衔接测试时与训练时扩展（[[verification]]） |
| **PRM800K（Let's Verify Step by Step）** | OpenAI 人类标注的 80 万条步骤级数据集，用于训练**过程奖励模型（PRM）**（[[prm800k]], [[process-reward-model]]） |
| **Math-Shepherd** | 自动化 PRM 步骤标注（硬/软估计），用 PRM 做 best-of-n 测试时选择并作为奖励模型强化生成器，无需人工标注即超越 SC、ORM 及 PRM800K 基线（[[math-shepherd]], [[process-reward-model]]） |
| **AlphaCode / AlphaCode 2** | 代码领域搜索范式代表：为每题生成约 100 万个候选解，经样例测试过滤、语义聚类、测试输入筛选后仅提交 10 个，竞赛排名进入前 54%（[[alphacode]], [[agent-search]]） |
| **Large Language Monkeys** | 大规模并行采样 + 验证器选择，验证 10@k 随采样预算对数线性增长、更大模型斜率更陡（[[large-language-monkeys]]） |
| **LATS（Language Agent Tree Search）** | 将 MCTS 引入 LLM 推理，用 LLM-as-a-Judge 打分 + 自洽性分数合成评估，配合反思实现测试时搜索，无需微调（[[lats]], [[agent-search]]） |
| **STaR（Self-Taught Reasoner）** | 自生成推理过程 + 筛选正确结果 + 迭代微调，属于验证驱动的自我改进起点（[[star]], [[verifiable-domains]]） |
| **DeepSeekMath** | 大规模数学语料预训练 + GRPO 训练时扩展，7B 模型在 AIME 达 51.7%（[[deepseek-math]], [[verifiable-domains]]） |
| **DAPO** | 长链推理 RL 稳定化（token 级损失、动态采样等），在 Qwen-32B 上 AIME 约 50%，依赖可验证领域提供奖励信号（[[dapo]], [[verifiable-domains]]） |
| **SPRINT** | 后训练将推理模型转化为"规划器 + 并行执行器"，利用推理步骤独立性加速（[[sprint]]） |
| **RLEF / KernelBench** | 执行反馈作为代码验证器；CUDA 代码生成具备完美验证器，覆盖率随采样线性提升（[[verifiable-domains]], [[rlef]]） |

此外，课程还提及 **o1**（AIME 上增加测试时/训练时计算均提升 pass@1）、**GPT-3.5、Gemini** 等前沿模型作为对比（[[verifiable-domains]], [[dapo]]）。

**引用**:
- [[self-improving-ai-agents]] — 自我改进环路：验证器→奖励→强化学习→搜索，生成→验证→学习→搜索闭环
- [[inference-scaling]] — 推理时扩展定义、可验证领域中重复采样+验证器提升正确率、生成-验证差距、智能体工作流视角
- [[large-language-monkeys]] — 大量并行采样与验证器筛选、10@k/pass@k、求解率随采样预算对数线性增长
- [[generation-verification-gap]] — 多数投票饱和、完美验证器上限、10@M 约 30% vs pass@M 超 40%、聚类缓解
- [[verification]] — 验证为第 3 讲主题，连接生成-验证差距与测试时/训练时扩展
- [[verifiable-domains]] — 形式化证明、单元测试、输出等价性等可验证机制，AIME 上 DeepSeekMath/DAPO 表现
- [[math-shepherd]] — 自动 PRM 标注、best-of-n 测试时选择、PRM 作为奖励模型
- [[process-reward-model]] — PRM 逐步打分、硬/软估计、与 ORM 对比
- [[prm800k]] — OpenAI 人类标注步骤级数据集
- [[alphacode]] — 百万级采样 + 过滤/聚类/筛选的搜索范式
- [[lats]] — MCTS + LLM-as-a-Judge 评估 + 反思的测试时搜索
- [[star]] — 自生成推理 + 筛选 + 迭代微调
- [[deepseek-math]] — 数学预训练 + GRPO，7B 在 AIME 51.7%
- [[dapo]] — 长链推理 RL 稳定化技术、AIME 50%
- [[sprint]] — 规划器+并行执行器的推理加速
- [[agent-search]] — 两类搜索：代码模型搜索（AlphaCode）与深度研究式智能体搜索（LATS）
- [[cs329a]] — 课程概况
- raw/ch-01-引言：从预训练到推理时计算扩展、raw/ch-02-Large Language Monkeys：重复采样与验证器选择、raw/ch-02-训练验证器解决数学问题（OpenAI 2021）、raw/ch-03-推理时计算缩放定律、raw/ch-07-不可验证领域中的选择方法、raw/ch-05-工程范式转变、raw/ch-01-课程引言：通过搜索实现自我改进、raw/ch-02-LATS 论文背景与问题定义、raw/ch-04-论文三：DAPO、raw/ch-05-总结：闭环自我改进与可验证领域、raw/ch-06-自动化验证的必要性与可验证领域

**建议新页面**: `verifier-driven-inference-scaling`（验证器驱动的推理时扩展）— 内容摘要：系统梳理"验证器如何支撑推理时计算扩展"这一主题，汇总 best-of-n 重复采样、10@k/pass@k 指标、生成-验证差距，并对比代表性系统（OpenAI Verifier、PRM800K、Math-Shepherd、AlphaCode、Large Language Monkeys、LATS、STaR、DeepSeekMath、DAPO、SPRINT）在"验证器类型、测试时/训练时用途、适用领域"上的异同，可作为 [[inference-scaling]]、[[verification]]、[[verifiable-domains]] 的交叉索引页。

## Action Required
- Review the suggested new page above
- If valuable, create the wiki page using `wiki convert` or manually
