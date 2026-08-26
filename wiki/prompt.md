---
brief: prompt 是向模型描述任务的输入文本，触发零样本与少样本学习的关键机制。
---

# Prompt

> Source(s): raw/ch-03-规模带来的零样本/少样本能力

Prompt 是向模型描述任务的输入文本，例如 "translate English to French"（将英语翻译为法语）。它是模型理解并执行任务的核心载体，尤其在零样本学习（zero-shot learning）和少样本学习（few-shot learning）中扮演关键角色。

随着模型规模增大（参见 [[scaling-laws]] 与 [[model-size-growth]]），模型不仅在各类自然语言基准和推理基准上持续改进，还逐渐具备了通过 prompt 直接完成任务的能力。在早期，针对特定领域需要微调模型；而通过 prompt，仅需给出任务描述或少量示例，模型便能遵循模板并以相同方式推理，从而极大简化了原型开发。

具体而言，当模型被给定一个任务描述（即 prompt），例如 “translate English to French”，并被要求翻译某个词（如 "cheese"）时，如果模型能够直接给出正确预测而无需针对该任务进行专门训练，这被称为 **零样本学习**（[[zero-shot-learning]]）。若在任务描述之外再额外提供几个示例（例如几组英法翻译对照），模型便能在示例的引导下完成翻译，这被称为 **少样本学习**（[[few-shot-learning]]）。

这种能力在 GPT-3、PaLM 等大型语言模型（[[large-language-models]]）中显著涌现，并成为后续推理能力相关创新的基础（参见 [[emergent-abilities]]）。Prompt 因此成为连接用户意图与模型能力的关键接口，也是当前大模型应用与评估的基本单元。

## See also
- [[few-shot-learning]]
- [[zero-shot-learning]]
- [[instruction-tuning]]
- [[chain-of-thought]]
- [[scaling-laws]]
- [[cs329a]]