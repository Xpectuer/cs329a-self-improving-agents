---
brief: CS329A核心概念，指通过验证器、奖励、强化学习与搜索闭环自主提升能力的AI智能体，并展望开放探索与未来研究方向。
---

# Self-Improving AI Agents

> Source(s): raw/ch-01-欢迎、课程团队与课程概要, raw/ch-01-课程内容回顾, raw/ch-01-课程引言：通过搜索实现自我改进, raw/ch-02-Self-Improving Agents 的概念与工作流, raw/ch-03-未来研究方向概览

**Self-Improving AI Agents** is the central research theme of Stanford CS329A, a graduate-level course focused on agents that can learn, iterate, and improve their own capabilities autonomously.

## Course Introduction

The course was opened by instructor **Akansha** (adjunct professor at Stanford, researcher at Reflection AI, with extensive experience in large language models) and **Azalia Mirhoseini** (assistant professor in the CS Department, previously at Google Brain and Google DeepMind, having worked on Claude at Anthropic and Gemini at Google DeepMind). Both met during their time at Google Brain.

This is the second offering of the course, with updates to both lectures and course logistics. The course website (mentioned in the lecture as `cs239a.stanford.edu`) provides lecture materials, reading papers, homework schedules, project proposal details, and project structures.

During the first lecture, instructors plan to:
- Give an overview of large language models and how scaling trends evolved over the past five years.
- Introduce the topics covered in the class.
- Present course logistics in detail—students are advised to pay close attention to this section, as it influences their grades.

## Course Coverage: From Self-Improvement Loops to Agentic Workflows

A central focus of the course introduction was improving models through **search**. The instructors distinguished two kinds of search: one in code models, where the model samples extensively and then searches or filters based on those samples (illustrated by AlphaCode and AlphaCode 2, and directly relevant to Homework 2); the other a deep-research-style agent search, which is closer to what students will encounter in Homework 3. The broad idea is that solutions often already lie within the model's search space—the key question is how to curate the correct answer out of that space.

The course began with an overview of LLMs and how, over the past year, **test-time scaling** and **train-time scaling** using self-improvement techniques have become central. The fundamental loop is driven by **verifiers**, feedback from running those verifiers, and rewards; reinforcement learning and even search algorithms then help models improve on domains such as **math and coding**. This verification-driven self-improvement was a major focus of the first part of the class.

Lecture 2 formalized the concept behind this loop: a **self-improving agent** is an agent that autonomously enhances its own capabilities through a closed loop of **verifiers**, **rewards**, **reinforcement learning**, and **search**. In this workflow, the model first generates candidate solutions; a verifier scores each candidate, turning feedback into a reward signal; reinforcement learning uses those rewards to update the policy; and search is applied at inference time to explore better candidates. The closed loop — generation → verification → learning → search — drives continuous improvement and is a core concept of CS329A.

From there, the course moved to **evolutionary strategies**. A full lecture on **open-endedness** explored a broader paradigm: instead of only driving an agent toward a fixed reward, open-endedness emphasizes the continuous discovery of novel behaviors, especially when the exploration space can be defined. Techniques such as AlphaEvolve (alpha evolve) and similar approaches were discussed.

The course then turned to **end-to-end agentic workflows using tool use**. As models interact with environments and tools, workflows can be driven end-to-end. For tasks that require multiple steps, agents need the ability to consult knowledge bases, which in turn requires **retrieval and memory**. As the course moved toward real-world workflows, the instructors emphasized the need for better **planning and multi-step reasoning**, discussed relevant research, and considered how to evaluate next-generation models and which capabilities should drive those evaluations. Several guest lectures covered **post-training**, **multimodal agents**, **robotics**, **reasoning**, and **symbolic techniques**—the latter falling under the tool-use umbrella and contributing to the growing trend of **synthetic data**.

The final lecture also returned to the core definition behind the course title. The class is named

## See also
- [[verification]]
- [[train-time-scaling]]
- [[meta-verification]]
- [[cross-domain-self-improvement]]
- [[open-endedness]]
- [[cross-domain-self-improvement]]