---
brief: 自洽性既指思维链多数投票，也指 LATS 中按行动采样频率给状态打分并与 LM 分数相加。
---

# self-consistency

> Source(s): raw/ch-02-训练验证器解决数学问题（OpenAI 2021）, raw/ch-03-LATS 核心直觉与六个阶段

self-consistency（SC，自洽性）是一种推理时的解码策略：对同一个问题采样多条思维链（chain-of-thought）解答，然后对这些解答进行多数投票，将出现最多的答案作为最终结果。课程材料中明确指出，self-consistency 就是多数投票（majority voting）的另一个名字。

## 在 Math-Shepherd 中的对比

在 Math-Shepherd（验证并强化 LLM 的逐步推理，无需人工标注）的实验中，self-consistency 被用作基线方法之一。实验对比了：

- **SC**：自洽性 / 多数投票，对应图中红色结果；
- **ORM**：结果奖励模型，对应图中蓝色结果；
- **SHEPHERD**：该论文提出的 PRM（过程奖励模型）方法，对应图中绿色结果。

该比较的意义在于：整个过程中没有使用人工标注，所有标注要么由模型生成，要么通过论文引入的自动标注机制获得。self-consistency 作为不依赖过程监督的强基线，用于衡量 PRM 验证器在推理测试时扩展中的增益。

## 与验证器的关系

与逐步为过程评分的过程奖励模型（PRM）不同，self-consistency 只利用最终答案的一致程度。它不显式评估中间步骤是否正确，而是通过多次采样和投票来聚合推理结果。这种简单性使其成为许多验证器研究（如 Math-Shepherd）中的常见对比方法。

## 在 LATS 评估中的自洽性分数

LATS（Language Agent Tree Search）的评估（evaluation）阶段使用了一种与上述多数投票略有不同的 self-consistency 分数。LATS 的六个阶段包括 selection、expansion、evaluation、simulation、back propagation、reflection，而 self-consistency 分数正是在 evaluation 阶段被引入的。

具体做法是：在当前节点大量采样行动，例如不是只采样 3 个行动，而是采样 50 个行动，然后将这些行动按类型归类。某个行动被采样得越多，其 self-consistency 分数就越高——也就是说，以该行动被采样的频率/比例作为分数。随后，这一分数与 LM-as-a-Judge 给出的 0 到 1 分相加，共同构成新状态的价值：

\[
\text{state score} = \text{LM score} + \text{self-consistency score}
\]

例如在“navigate through a maze to reach an exit”的提示中，初始节点采样出 open left door、open right door、inspect room for clues 等行动；如果 open left door 在 50 次采样中出现了 75% 的比例，那么它对应的 self-consistency 分数就会较高。

与标准 self-consistency 相比，这里的“投票”对象不是最终答案，而是行动类型；其作用也不是直接选出最终结果，而是作为 LATS 中评估状态价值的一部分。

## See also
- [[chain-of-thought]]
- [[lats]]
- [[lats]]