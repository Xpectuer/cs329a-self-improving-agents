---
brief: DeepScholar-Bench是斯坦福大学提出的实时基准，通过让模型撰写相关工作章节来评估深度研究能力。
---

# DeepScholar-Bench

> Source(s): raw/ch-01-引言：Agentic Evaluations 与 Long Horizon Tasks 概述, raw/ch-04-DeepScholar-Bench：深度研究综合任务

## 概述

DeepScholar-Bench 是斯坦福大学提出的**实时基准（live benchmark）**，用于评估语言模型在**深度研究（deep research）**风格任务上的表现。它的核心任务是**生成式研究综述（generative research synthesis）**：给定一组论文，模型需要撰写对应的**相关工作（related work）**章节——也就是自动完成研究者通常需要花费数小时完成的文献综述写作。通过这样的任务设置，DeepScholar-Bench 直接衡量了模型从大量文献中提取、综合并组织信息的能力。

在课程对 Agentic Evaluations 的讨论中，DeepScholar-Bench 被定位为一个深度研究导向的基准，考察模型在多步骤、长时程任务上的完成能力。

## 背景与动机

评估 AI 进步的关键在于“衡量真正重要的东西”（measure what matters）。四、五年前，模型能够生成任何解释本身就是重大突破；而如今，我们需要从**能力（capability）**和**经济影响（economic impact）**两个维度来判断模型的进展。传统的聊天机器人、问答或单轮“上下文内作答”基准正在快速饱和，难以区分模型的真实能力变化。

DeepScholar-Bench 正属于这类新的评估方向：通过“撰写 related work”这种真实科研工作流中的典型任务，考察模型能否完成人类专业研究人员需要数小时才能完成的工作。与该方向互补的还有 METR（以人类专业完成时间校准的时间跨度指标）和 GDPVal（以模型对专家任务的胜率衡量经济价值），两者共同提供了对 agentic systems 在真实世界任务中表现的评估视角。

## 核心要点

- 由斯坦福大学提出，属于**实时（live）更新**的基准，避免静态数据过时。
- 聚焦**生成式研究综述**，输入多篇论文，输出对应的 **Related Work** 章节。
- 属于深度研究风格任务，衡量模型在长时程、多文档、复杂知识综合上的能力。
- 直接与科研写作场景挂钩：文献综述通常需要专业人员数小时才能完成，因此适合衡量模型完成真实世界任务的能力。
- 与 GDPVal、METR 等指标或基准一起，构成对 agentic systems 在真实任务中表现的评估工具。

## See also
- [[agentic-evaluations]]
- [[agent-search]]
- [[lats]]
- [[large-language-models]]