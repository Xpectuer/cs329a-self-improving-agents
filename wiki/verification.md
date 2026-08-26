---
brief: 验证：借助验证器/奖励模型自动挑选或引导正确答案以弥合生成-验证差距，衔接测试时与训练时扩展。
---

# 验证（Verification）

> Source(s): raw/ch-01-引言：验证问题与讲座概览, raw/ch-02-训练验证器解决数学问题（OpenAI 2021）, raw/ch-01-引言：训练时扩展（Train-Time Scaling）

验证是第 3 讲的核心主题。在此前的课程中，我们已经围绕测试时扩展（inference-time scaling）、基于工具和代码的反馈，以及鲁棒验证（robust verification）展开了讨论。在第六讲中，讲师回顾了这些已覆盖的主题，并指出今天将进入**训练时扩展（train-time scaling / scaling RL）**，从而“闭环”进一步改进模型。这也说明了验证在课程脉络中的位置：它不仅是一个独立的主题，更是连接测试时扩展与训练时扩展的桥梁。

上一讲讨论了“生成-验证差距”（generation-verification gap）：语言模型很多时候“知道”许多难题的答案，也能通过重复采样等测试时扩展技术生成候选答案。但关键问题是：**如何自动选择哪个答案是正确的，或者在生成过程中引导模型走向正确解答**。这正是验证（verification）要解决的问题。

验证方法可以连接多个相关概念：生成-验证差距、可验证领域（verifiable domains）、验证器（verifier）与奖励模型（reward model）。在可验证领域，例如数学题，最终答案可以通过客观规则判断是否正确，因此更适合训练和使用验证器。

## 动机

语言模型会“幻觉”（hallucinate），并且会自信地向

## See also
- [[generation-verification-gap]]
- [[process-reward-model]]
- [[meta-verification]]
- [[llm-as-a-judge]]
- [[train-time-scaling]]
