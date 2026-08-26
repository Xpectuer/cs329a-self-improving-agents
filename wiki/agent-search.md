---
brief: 智能体搜索指在深度研究式多步任务的智能体动作/轨迹搜索空间中搜索以改进模型。
---

# Agent Search（智能体搜索）

> Source(s): raw/ch-01-课程引言：通过搜索实现自我改进

**智能体搜索（agent search）** 指在深度研究式、长时程多步任务中，在智能体的动作/轨迹搜索空间中进行搜索，从而改进模型表现的过程。它与课程作业三（Homework 3）对应，区别于代码模型搜索，LATS 等算法是其具体实现。

## 核心思想

本讲的核心是**通过搜索改进模型**。大模型的解已经存在于模型的搜索空间中，关键问题是如何从模型输出的搜索空间中“策展”出最终答案。智能体搜索正是针对这一问题的思路之一：不局限于单步生成，而是在智能体随时间展开的动作与轨迹空间中进行系统化搜索。

## 两类搜索

课程中区分了两种搜索：

1. **代码模型搜索**：针对代码生成问题，大量采样候选代码，然后基于采样结果进行搜索。AlphaCode 和 AlphaCode 2 中的搜索模式即属于此类，相关模式也会在作业中用到。
2. **深度研究式搜索（deep research style search）**：面向更复杂的长期任务，对应作业三。智能体搜索更接近这类深度研究式搜索。

## 与课程作业的关系

- 作业二聚焦于 HumanEval，覆盖较简单的问题，为理解代码模型搜索提供基础。
- 作业三则涉及更复杂的问题，重点落在智能体搜索上。

## 实现与关联

智能体搜索的具体算法实现包括 LATS（Language Agent Tree Search）等工作。它通常与以下主题密切相关：

- 推理时的搜索与扩展（inference scaling）
- 智能体工作流（agentic workflows）
- 长时程多步推理
- 规划（planning）
- 自改进智能体（self-improving AI agents）

## See also
- [[lats]]
- [[planning]]
- [[agentic-workflows]]
- [[self-improving-ai-agents]]
- [[inference-scaling]]
- [[verification]]