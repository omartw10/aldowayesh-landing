---
name: context-optimization
description: This skill should be used when the user asks to "optimize context", "reduce token costs", "improve context efficiency", "implement KV-cache optimization", "partition context", or mentions context limits, observation masking, context budgeting, or extending effective context capacity.
---

# Context Optimization Techniques

Context optimization extends the effective capacity of limited context windows through strategic compression, masking, caching, and partitioning. Effective optimization can double or triple effective context capacity without requiring larger models or longer windows -- but only when applied with discipline. The techniques below are ordered by impact and risk.

## When to Activate

Activate this skill when:
- Context limits constrain task complexity
- Optimizing for cost reduction (fewer tokens = lower costs)
- Reducing latency for long conversations
- Implementing long-running agent systems
- Needing to handle larger documents or conversations
- Building production systems at scale

## Core Concepts

Apply four primary strategies in this priority order:

1. **KV-cache optimization** -- Reorder and stabilize prompt structure so the inference engine reuses cached Key/Value tensors. This is the cheapest optimization: zero quality risk, immediate cost and latency savings. Apply it first and unconditionally.

2. **Observation masking** -- Replace verbose tool outputs with compact references once their purpose has been served. Tool outputs consume 80%+ of tokens in typical agent trajectories, so masking them yields the largest capacity gains. The original content remains retrievable if needed downstream.

3. **Compaction** -- Summarize accumulated context when utilization exceeds 70%, then reinitialize with the summary. This distills the window's contents while preserving task-critical state. Compaction is lossy -- apply it after masking has already removed the low-value bulk.

4. **Context partitioning** -- Split work across sub-agents with isolated contexts when a single window cannot hold the full problem. Each sub-agent operates in a clean context focused on its subtask. Reserve this for tasks where estimated context exceeds 60% of the window limit, because coordination overhead is real.

The governing principle: context quality matters more than quantity. Every optimization preserves signal while reducing noise. Measure before optimizing, then measure the optimization's effect.