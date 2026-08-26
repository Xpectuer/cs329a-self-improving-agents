---
brief: 数据瓶颈：训练模型的提示与数据目前由人工静态选择，如何让自我改进循环自主挑选正确数据以突破数据壁垒是未来研究重点。
---

# Data Barriers (数据壁垒)

> Source(s): raw/ch-03-未来研究方向概览

## 概述

在自我改进智能体（self-improving agents）的研究中，**数据壁垒**是一个关键挑战：当前用于训练模型（尤其是训练时扩展，train-time scaling）的提示（prompt）与数据仍由人工静态选择。如何让自我改进循环自主挑选正确数据，从而突破这一壁垒，是未来研究的重要方向。

## 背景：自我改进循环

课程中反复强调，自我改进循环的核心是由验证器（verifiers）驱动，通过运行验证器获得反馈与奖励，再利用强化学习和搜索算法让模型在数学、编程等领域不断进步。这种范式包括：

- **测试时扩展（test-time scaling）**：通过多样本采样与少数服从多数投票提升性能。
- **训练时扩展（train-time scaling）**：将推理循环中的反馈转化为奖励，驱动自我提升。

然而，目前这些方法仍局限于数学、编程等窄领域（narrow domains）。实现跨领域泛化，并让推理链足够多样化以持续驱动自我改进，仍是重要的研究课题。

## 数据壁垒的含义

尽管训练时扩展很重要，但进入训练模型的提示和数据往往以静态方式被选择，且依赖人工挑选。原始材料明确指出：

> the prompts that go into training these models gets selected very statically and require humans to select them. So how do you break through the data barriers so that the self-improvement loop can pick the right set of data that drives that loop?

也就是说，数据壁垒的核心问题是：自我改进循环本身应该如何“自主”选取合适的数据，而不是由研究者预先静态指定。这涉及到如何度量数据对改进过程的贡献，以及如何在不依赖人工的前提下不断产生和筛选高质量训练数据。

## 与其他研究方向的关系

- **验证（Verification）**：构建健壮的验证技术或元验证（meta-verification）技术，检查推理链中输入的内容是否合理，是自我改进循环的重要支撑，也与数据选择密切相关。
- **开放性与探索（Open-endedness）**：允许模型在定义的探索空间中自由探索，可能为数据提升提供新的途径。
- **合成数据（Synthetic data）**：工具使用下的符号技术可能为合成数据提供新的来源，从而帮助突破数据壁垒。

## 未来研究展望

后续工作可能需要回答：如何让智能体自动选择数据？如何将数据壁垒的突破与验证、规划、多步推理等能力结合？随着领域快速演进，这些方向可能成为下一代自我改进系统的重要组成部分。

## See also
- [[synthetic-data]]
- [[self-improving-ai-agents]]
- [[cross-domain-self-improvement]]
- [[meta-verification]]
- [[agentic-workflows]]