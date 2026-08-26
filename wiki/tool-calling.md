---
brief: 符号技术属于工具使用范畴，可促进合成数据生成，是工具调用与智能体工作流的重要方向。
---

# Tool Calling

> Source(s): raw/ch-01-课程内容回顾, raw/ch-03-未来研究方向概览

Tool calling refers to the ability of LLM-based agents to interact with environments and external tools in order to complete multi-step workflows. In the course recap, tool use is positioned as a key paradigm that follows earlier work on self-improvement and open-endedness: after models are trained to improve via verifiers, rewards, reinforcement learning, and search, the next step is to build end-to-end agent workflows grounded in tool interactions.

## From self-improvement to tool use

The course began with an overview of LLMs and the role of test-time and train-time scaling. A central loop is driven by verifiers: models receive feedback from verifiers, obtain rewards, and improve through reinforcement learning and search algorithms, especially for math and coding.

From there, the focus moved to evolutionary strategies and open-endedness. Instead of only optimizing rewards, models are allowed to explore within a defined exploration space. This was discussed through approaches such as AlphaEvolve and similar techniques.

Tool calling then becomes the next layer: as models interact with environments and tools, they can drive workflows end to end. Real-world tasks often require multiple steps, access to knowledge bases, retrieval, and memory. This creates a need for better planning and multi-step reasoning in models.

## Symbolic techniques and synthetic data

The course also noted that symbolic techniques fall under the umbrella of tool use. One of the guest speakers explicitly highlighted this connection, explaining that such symbolic techniques can contribute to the generation of synthetic data, which is another emerging trend in training and evaluating next-generation models.

## Agentic workflows and self-improvement

The course is named *self-improving agents* and focuses not just on LLMs but on the agentic aspect. An agent is a generalization of an LLM: it has a goal, interacts with the environment, collects feedback, and uses that feedback to correct its steps. These systems can direct their own processes, use tools, and accomplish a goal.

In the current paradigm, LLMs by themselves are often not powerful enough to drive a full goal, so these systems are frequently hand-written as workflows that orchestrate LLMs and tools. However, in certain scenarios such as coding agents, agentic workflows are increasingly being driven by the models themselves. Constructing these workflows means orchestrating LLMs, verifiers (for reward), LLM judges, tool calls, and search algorithms—sometimes with parallel LLM calls performing search. Overall, an agentic workflow needs the capability to plan, reason over multiple steps, correct itself when going in the wrong direction, and keep improving its capabilities—which is where self-improvement comes in.

## Future research directions

Looking ahead, several research areas were outlined for advancing self-improving agents:

- **Generalization across domains**: Test-time scaling (e.g., multiple samples, majority voting) and train-time scaling (using feedback in the inference loop) have so far been limited to narrow domains like math and coding. Getting reasoning chains to be diverse enough to drive continued self-improvement across domains remains an open problem.
- **Robust verification**: Building robust verification or meta-verification techniques—verifying what goes into the reasoning chain—is valuable for the self-improvement loop.
- **Breaking data barriers**: The prompts used to train these models are often selected statically and require human selection. Enabling the self-improvement loop to pick the right data automatically is a key direction.
- **Efficiency for intelligence**: Understanding what drives efficiency for intelligence and how to achieve more intelligence per unit of resource is considered extremely important for the next generation of systems.

## Broader context

Additional guest lectures covered post-training, multimodal agents, robotics, and reasoning. Evaluations were also discussed in terms of what capabilities will drive future generations of models.

## See also
- [[agentic-workflows]]
- [[synthetic-data]]
- [[retrieval-and-memory]]
- [[verifiable-domains]]
- [[multi-step-reasoning]]
- [[multi-step-reasoning]]