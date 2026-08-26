---
brief: GOLD 是 AlphaCode 微调阶段按 token 似然加权 next-token 损失的正则化技术，用于提升精度并赋予高概率给有意义模式。
---

# gold-loss

> Source(s): raw/ch-03-AlphaCode 流水线：预训练与微调

**GOLD** (a regularization technique used in AlphaCode fine-tuning) modifies the standard next-token prediction loss by adding a weighting mechanism based on token likelihood. In each training step, tokens with higher predicted likelihood receive **higher weight**, while tokens with lower likelihood receive **lower weight**. This encourages the model to assign high probability to more meaningful patterns, improving the precision of the fine-tuned model.

## Role in the AlphaCode pipeline

1. **Pre-training**: AlphaCode initially trains a model on about **700 GB of GitHub code** using next-token prediction. The original setup used a masked language model loss, and decoder-only variants were also explored.
2. **Fine-tuning**: During fine-tuning, two notable tricks are applied:
   - **GOLD regularization** — dynamically weighting the next-token prediction loss by token likelihood, as described above.
   - **Value conditioning and prediction** — an additional technique used to guide the model toward better solutions.
3. **Model architecture**: The original AlphaCode used an encoder-decoder model; AlphaCode 2 tried decoder-only models.

## How GOLD works

In a standard fine-tuning loss, every token contributes equally to the next-token prediction loss. GOLD instead multiplies the per-token loss by a weight that depends on the token's probability under the model:

- If the model already assigns a **high likelihood** to a token, the loss weight is increased.
- If the model assigns a **low likelihood** to a token, the loss weight is decreased.

This weighting scheme makes the model focus on reinforcing high-confidence predictions, thereby improving precision and steering probability mass toward structurally meaningful token patterns, particularly useful for code generation tasks.

## Relationship to AlphaCode

GOLD is part of the fine-tuning phase that transforms the pre-trained code model into a competitive programming solver. The same pipeline later extends to AlphaCode 2, where decoder-only models replace the original encoder-decoder architecture while retaining similar training strategies.

## See also
- [[alphacode]]
- [[fine-tuning]]
- [[large-language-models]]
- [[pre-training]]
- [[competitive-programming-problem]]
- [[large-language-models]]