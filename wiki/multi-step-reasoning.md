---
brief: 多步推理指模型需经多个逻辑步骤得出答案的能力，是规划与复杂问题求解的基础，也是CS329A第五讲核心主题。
---

# Multi-step Reasoning

> Source(s): raw/ch-01-课程总览与主题引入, raw/ch-01-课程内容回顾

多步推理（Multi-Step Reasoning）指模型在得出最终答案前，需要经过多个逻辑步骤的推理过程。与单步预测不同，多步推理要求模型能够分解复杂问题、按顺序应用规则或中间结论，并最终综合得到答案。这种能力是智能体规划与复杂问题求解的基础，也是当前大语言模型研究中的核心方向之一。

在 Stanford CS329A "Self-Improving AI Agents" 课程的第五讲中，主题正是 "Planning and Multi-Step Reasoning"。该讲围绕多步推理与规划，介绍了三篇相关研究论文，重点关注如何让模型在多个推理步骤中保持一致性、准确性，以及如何通过推理过程中的验证与搜索来提升最终表现。

在课程回顾中，讲师进一步将多步推理置于整个课程脉络里：课程从 LLM 概述与测试时／训练时扩展（test-time / train-time scaling）出发，讨论了由 verifier 驱动、结合强化学习和搜索算法的自我提升循环；随后进入进化策略与开放世界探索，强调在可定义的探索空间中让模型自主探索；再过渡到基于工具使用的端到端 agent workflow，模型通过与环境和工具交互来驱动完整流程。在此过程中，随着任务需要在多个步骤中查询知识库并与环境交互，模型愈发依赖检索与记忆能力，因此更强大的规划与多步推理成为走向真实世界工作流的关键。此外，多位客座讲师围绕后训练（post-training）、多模态 agent、机器人以及推理等主题进行了分享，其中还特别提到符号化技术（symbolic techniques）可归入工具使用范畴，并有助于合成数据（synthetic data）这一趋势的推进。

多步推理与多个关键概念密切相关，如 [[chain-of-thought]] 提示方法、[[inference-scaling]]（推理时扩展法则）、[[self-consistency]] 技术，以及 [[process-reward-model]]（过程奖励模型）等。

## See also
- [[planning]]
- [[chain-of-thought]]
- [[mathematical-reasoning]]
- [[hotpotqa]]
- [[self-consistency]]
- [[synthetic-data]]