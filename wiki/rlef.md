---
brief: RLEF通过执行反馈引导代码LLM，是训练时扩展课程中利用执行信号进行强化学习的论文。
---

# RLEF: 利用执行反馈引导代码 LLM

> Source(s): raw/ch-01-引言：训练时扩展（Train-Time Scaling）, raw/ch-02-RLEF: 利用执行反馈引导代码LLM

在 CS320A 第六讲“训练时扩展（Train-Time Scaling）/ Scaling RL”中，我们回顾了此前涉及的多项主题：测试时扩展（test-time scaling）、利用工具与代码获取反馈、以及鲁棒验证（robust verification）。这一讲的目标是“闭环”——通过训练时的扩展来进一步改进模型。RLEF 正是本讲介绍的三篇论文之一（本文是第二篇），它展示了如何在可验证领域利用执行信号来驱动模型改进。

RLEF（Reinforcement Learning from Execution Feedback）的核心思想是利用执行反馈来指导代码 LLM 的代码生成过程。

与仅依赖静态文本训练的方法不同，RLEF 强调通过实际运行生成代码或运行代码所对应的单元测试来获取执行反馈，并以此作为强化学习的信号，引导模型生成更可靠、更可运行的代码。该方法将代码生成从“看起来合理”推向“真正能运行、测试通过”的目标。

主要特点包括：

- **执行反馈**：通过运行生成的代码或其单元测试获取反馈。
- **强化学习**：将执行结果（如是否运行成功、测试是否通过）作为奖励信号来优化模型。
- **核心目标**：利用执行反馈引导代码 LLM 在多轮生成中不断改进，最终产生正确性更高的代码。

这种方法为代码生成任务提供了一条结合验证与强化学习的路径，也体现了在可验证领域中使用执行信号来驱动模型学习的重要思路。

## See also
- [[train-time-scaling]]
- [[verifiable-domains]]
- [[reasoning-training-techniques]]
- [[dapo]]
- [[inference-scaling]]
- [[inference-scaling]]