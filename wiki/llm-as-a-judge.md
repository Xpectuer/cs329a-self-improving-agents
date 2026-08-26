---
brief: LLM-as-a-Judge 是一种用提示词让大语言模型打分的机制，用于 LATS 评估阶段及更广泛的智能体工作流中的验证与奖励信号。
---

# LLM-as-a-Judge

> Source(s): raw/ch-03-LATS, raw/ch-03-未来研究方向概览

**LLM-as-a-Judge**（大语言模型作为裁判）是一种无需额外训练、仅通过提示词（prompt）让大语言模型直接对某个状态或行动的前景进行评分（LM score）的方法。该方法被用在 LATS（Language Agent Tree Search）框架的**评估（evaluation）阶段**，作为衡量一个状态或行动是否有希望的依据之一。

## 在 LATS 中的角色

LATS 包含六个阶段：选择（selection）、扩展（expansion）、评估（evaluation）、模拟（simulation）、反向传播（back propagation）和反思（reflection）。在评估阶段，系统需要对当前行动所进入的新状态进行打分，以便后续选择更优的扩展路径。

LLM-as-a-Judge 正是其中一种评分来源。具体做法是：将当前行动和观察到的结果放入提示词中，要求模型针对该状态的前景（promising）给出一个 **0 到 1 之间的分数**。

## 与 Self-Consistency 分数结合

在 LATS 中，最终用于评估一个状态的分数是由两个分数相加得到的：

1. **LM score**：由 LLM-as-a-Judge 直接打分，即上述提示词方法。
2. **Self-consistency score**：根据采样频率计算。例如扩展阶段从当前节点采样了 50 个行动，并将其按类型归类；某个行动（如“打开左门”）被采样的比例越高，该状态的 self-consistency 分数就越高。

两者相加后得到该行动对应状态的综合评分。LATS 是采用这种**平均或相加**的方式融合多个信号，而不是单独依赖 LLM-as-a-Judge。

## 示例：迷宫导航

在一个迷宫导航任务中，初始观察是“你在一个光线昏暗的房间，左右各有一扇门”。模型采样三个行动：打开左门、打开右门、检查房间线索。每个行动执行后，观察被追加到上下文中。

在评估阶段，对于“打开左门”这个行动，LLM-as-a-Judge 会根据新观察（如“昏暗的走廊，挂满画”）给出一个 LM score，同时结合 self-consistency score（例如该行动在大量采样中占 75% 频率），相加后形成该状态的评分。之后 LATS 会基于这些评分运行模拟和反向传播。

## 在更广泛智能体工作流中的验证器角色

LLM-as-a-Judge 的价值并不局限于 LATS。在**智能体工作流（agentic workflows）**中，自我改进（self-improvement）的基本循环通常由验证器（verifier）驱动：系统从环境中收集反馈，计算奖励，并据此调整策略。LLM-as-a-Judge 正是这类验证器的一种灵活实现——通过提示词让 LLM 对某个步骤或状态打分，从而为强化学习或搜索算法提供**奖励信号（reward signal）**。这类工作流通常需要同时编排 LLM、验证器、工具调用和搜索算法，而 LLM-as-a-Judge 可以嵌入其中，成为评判行动质量的关键组件。

与此同时，未来研究的一个重要方向是提升这种验证方式的**鲁棒性和泛化能力**。当前自我改进循环多局限于数学、代码等窄领域，如何使 LLM-as-a-Judge 在不同领域之间泛化、如何设计元验证（meta-verification）技术来检查推理链中的每一步，以及如何打破依赖人工选择提示词的数据壁垒，都是值得探索的问题。这也意味着 LLM-as-a-Judge 本身也将随着模型能力的提升而变得更加强大。

## 特点

- 无需训练：仅使用提示词调用 LLM。
- 灵活性高：适用于任意状态或行动描述。
- 依赖模型能力：评分质量受限于 LLM 的判断能力和提示词设计。
- 可组合性：可与 self-consistency 等分数结合，也可嵌入更大的智能体工作流中作为奖励信号源。

## See also
- [[lats]]
- [[verification]]
- [[self-consistency]]
- [[agentic-workflows]]
- [[process-reward-model]]
- [[self-improving-ai-agents]]