---
brief: CS329A 对大语言模型及扩展趋势的概述，涵盖课程团队、安排与季度内容回顾。
---

# Large Language Models

> Source(s): raw/ch-01-欢迎、课程团队与课程概要, raw/ch-01-课程内容回顾

CS329A 是 Stanford 开设的课程，主题为 **self-improving AI agents**。课程由 Akansha 与 Azalia Mirhoseini 共同讲授，这是第二次开课；两位老师对讲义内容和课程组织方式都进行了更新。

第一讲从大语言模型（Large Language Models, LLMs）的概述开始，重点回顾过去五年中 scaling 趋势的演变。随后进入课程安排说明，包括课程网站上的讲义材料、阅读论文、作业时间表、项目 proposal 与项目结构等信息。

## 课程团队

- **Akansha**：长期从事大语言模型研究，Stanford 兼职教授，同时在 Reflection AI 从事研究。
- **Azalia Mirhoseini**：Stanford CS 系助理教授；与 Akansha 在 Google Brain 时期相识，后共事于 Google DeepMind；曾参与 Anthropic 的 Claude 和 Google DeepMind 的 Gemini。

## 季度内容回顾

课程在回顾整个季度时，首先回到开篇对 LLM 的概述，强调过去一年中 **test-time scaling** 与 **train-time scaling** 的重要性。这些扩展由自我改进技术驱动，其基本循环是：通过 verifier 及其反馈来获取 reward，再利用强化学习和搜索算法，帮助模型在数学、编程等任务上不断提升。

从这一基础出发，课程转向**进化策略**。专门有一讲讨论开放式的开放性（open-endedness）：不仅用 reward 驱动自我改进，如果探索空间可定义，也允许模型自由探索，其中讨论了 AlphaEvolve 及类似技术。

随后，课程进入另一种范式：利用**工具使用**（tool-use）构建端到端的 agent 工作流。当模型与环境及工具交互时，可以端到端地驱动工作流。对于需要多步完成的任务，模型需要具备查看知识库的能力，因此引出了**检索与记忆**。随着走向真实世界的工作流，需要更好的**规划**和**多步推理**。课程围绕这些方向讨论了一些工作，并探讨了如何对下一代模型进行评估、哪些能力将驱动评估。

课程还安排了多次 guest lectures，涵盖后训练（post-training）、多模态 agent、机器人、推理等主题。Azalia 补充提到，其中一位嘉宾还讨论了**符号技术**（属于工具使用的范畴），以及它如何为**合成数据**这一趋势做出贡献。

## 与扩展趋势的关系

课程将 LLM 的近期发展放在规模扩展（scaling）的背景下讨论，涵盖模型规模增长、测试损失等相关主题。具体机制可参见 [[scaling-laws]]、[[model-size-growth]] 与 [[test-loss]]。

## 课程组织

讲座后半部分说明课程 logistics，包括影响成绩的注意事项。课堂与项目安排详见 [[cs329a]]。

## See also
- [[scaling-laws]]
- [[model-size-growth]]
- [[emergent-abilities]]
- [[pre-training]]
- [[fine-tuning]]
- [[cs329a]]