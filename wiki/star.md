---
brief: STaR（Self-Taught Reasoner）是斯坦福大学提出的通过自生成推理过程迭代微调提升模型推理能力的方法。
---

# STaR（Self-Taught Reasoner）

> Source(s): raw/ch-02-论文一：STaR（Self-Taught Reasoner）

**STaR（Self-Taught Reasoner）** 是斯坦福大学研究者提出的一篇论文，核心思想是通过在问题中加入模型**自生成的推理过程（rationales）** 来提升模型的推理能力，并采用迭代微调的方式持续增强模型的推理表现。

## 核心思路

- 不依赖人工标注的思维链，而是让模型自己生成解决问题的推理过程。
- 将自生成的 rationales 添加到训练样本中，作为监督信号进行微调。
- 通过**迭代**方式重复“生成推理 → 筛选正确结果 → 微调模型”的流程，使模型逐步学会更复杂的推理。

## 意义

STaR 属于**自我改进**类方法，展示了模型可以借助自身输出作为训练数据，在**少人工标注**的情况下不断提升**多步推理**能力。它与 **chain-of-thought**、**self-consistency** 等方法有紧密联系，也对后续的推理训练与**强化学习**类对齐方法有启发意义。

## See also
- [[reasoning-training-techniques]]
- [[chain-of-thought]]
- [[dapo]]
- [[mathematical-reasoning]]
- [[gsm8k]]
- [[rlef]]