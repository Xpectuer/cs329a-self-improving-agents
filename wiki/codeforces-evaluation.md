---
brief: AlphaCode 在 Codeforces 真实竞赛上的在线评测：10 场约 5000 人比赛，平均排名 54.3，与 28% 参赛者相当
---

# codeforces-evaluation

> Source(s): raw/ch-05-AlphaCode 过滤、聚类与评估

codeforces-evaluation 指 AlphaCode 在 Codeforces 真实竞赛平台上进行在线评测的方式与结果。与在作者自建测试集上评估不同，Codeforces 是实际竞赛平台，提交后系统会检查程序正确性，并根据解决方案的效率与正确性对所有参赛者进行排名。

## 背景：过滤与聚类

AlphaCode 可以生成约 100 万份候选解决方案，但不可能把全部候选都提交到 Codeforces 平台。因此需要先进行过滤与聚类，从而选择一组足够多样、具有代表性的解决方案子集来提交评测。

聚类在这个流程中的核心作用是提供一种筛选机制：从海量生成样本中挑选出差异足够大的解，以便在真实平台上进行有限次数的提交。此外，训练所用的 code contest 数据保留了一个 held-out 测试集，可以用来离线估计模型在这些竞赛题目上的表现。

## 在线评测过程

在 Codeforces 平台评测时，AlphaCode 被实时运行并生成样本，然后经过示例测试过滤，再进行聚类，最后将筛选后的解提交到平台。

具体设置如下：

- 提交到 10 场 Codeforces 比赛，每场约 5000 名参赛者
- 每道题提交 10 次，而非生成的全部约 100 万次
- 最终平均排名为 54.3

结果表明，AlphaCode 的解与近六个月内 28% 的参赛者水平相当。评测中会记录每个竞赛 ID 对应的 AlphaCode 百分比排名、最佳排名、估计排名和最差排名，用于分析模型在不同竞赛中的相对位置。

## 排名依据

Codeforces 的排名基于已提交解决方案的效率与正确性。因此该指标反映的是在真实编程竞赛约束下，模型生成代码的实用性和竞争力，而不仅仅是在离线测试集上的正确率。

## See also
- [[alphacode]]
- [[competitive-programming-problem]]
- [[10-at-k]]
- [[generation-verification-gap]]