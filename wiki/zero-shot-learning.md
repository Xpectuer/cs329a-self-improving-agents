---
brief: 模型仅凭任务描述（prompt）即可直接预测答案，无需针对特定任务训练或提供示例的能力，是大型语言模型的涌现能力。
---

# Zero-shot Learning

> Source(s): raw/ch-03-规模带来的零样本/少样本能力

Zero-shot learning 是大规模语言模型的重要能力之一：仅凭任务描述（prompt）而无需针对该特定任务进行训练或提供任何示例，模型即可直接预测出答案。例如，给模型一个任务描述"Translate English to French"，然后要求它将 "cheese" 翻译成法语，如果模型能够给出正确答案，而不需要专门在该翻译任务上经过训练，这就是 zero-shot learning。

## 背景与动机

随着模型规模不断增大，模型在自然语言基准、推理基准等多种任务上的性能持续提升。除此之外，规模扩大还带来了另外两个关键变化：

1. **少样本学习能力（few-shot learning）**：此前的做法需要针对特定领域对模型进行微调（fine-tuning），但大模型仅通过给出少数几个示例，就能遵循模板、以同样的方式推理，极大降低了原型的构建难度。
2. **涌现行为（emergent behavior）**：部分能力（如推理）只在模型规模足够大时才出现，而非随规模线性增强。

## 与 Few-shot Learning 的关系

Few-shot learning 与 zero-shot learning 的区别在于是否提供示例：

- **Zero-shot learning**：只给任务描述，不给示例，模型直接预测。
- **Few-shot learning**：在任务描述之外，额外提供几个输入输出对作为示例，模型基于这些示例"照猫画虎"地完成新输入。

两者都基于 prompt 驱动的方式，不需要修改模型参数，是大规模语言模型（如 GPT-3、PaLM）所开启的关键能力方向，后续的众多推理能力创新也建立在这两者之上。

## See also
- [[few-shot-learning]]
- [[prompt]]
- [[emergent-abilities]]
- [[model-size-growth]]
- [[scaling-laws]]
- [[cs329a]]