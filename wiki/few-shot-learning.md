---
brief: 通过在提示中附加少量示例，模型无需微调即可完成新任务；该能力随模型规模增大而涌现。
---

# Few-shot Learning

> Source(s): raw/ch-03-规模带来的零样本/少样本能力

Few-shot learning（少样本学习）是指：在任务描述之外，再额外给出少量示例，模型即可模仿这些示例的模板和推理方式来完成新任务，而无需针对特定领域进行微调。

在模型规模不断增大的过程中，出现了几个重要结果：

- 模型越大，在自然语言及各类推理基准上的表现持续提升。
- 模型学会了如何做 few-shot learning。过去需要对特定领域进行微调，现在只要给出几个示例，模型就能跟随该模板并以同样的方式推理，这让原型开发变得极其便捷。
- 更大的模型还会出现涌现行为（emergent behavior），例如推理能力只在更大的模型中才会出现。

## 零样本与少样本

- **Zero-shot learning（零样本学习）**：给模型一个任务描述，例如 "translate English to French"，然后要求它把 "cheese" 翻译成法语。如果模型在没有针对该任务训练过的情况下就能预测出答案，这就是零样本学习。
- **Few-shot learning（少样本学习）**：在任务描述之外，再给模型几个示例。例如给出 "translate English to French" 以及若干英文到法文的翻译样例，然后要求翻译 "cheese"，模型能够完成翻译。

这种少样本能力出现在大规模语言模型的许多任务上，是 GPT-3、PaLM 等模型带来的关键能力之一，也推动了后续围绕推理能力的诸多创新。

## See also
- [[prompt]]
- [[zero-shot-learning]]
- [[emergent-abilities]]
- [[chain-of-thought]]
- [[model-size-growth]]
- [[self-improving-ai-agents]]