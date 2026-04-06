---
title: Combat Effectiveness (Hits & Resilience)
type: rule
tags: [hits, resilience, elimination, damage]
sources: [Rulebook - FINAL.pdf]
created: 2026-04-05
updated: 2026-04-05
---

# Combat Effectiveness

## Hits

[[force-elements|Force Elements (FEs)]] receive Hits from [[direct-fire|Direct Fire]], [[indirect-fire|Indirect Fire]], and [[assault|Assaults]]. Each Hit reduces the [[force-elements|FE]]'s **Resilience** by 1.

## Resilience

| Force Element (FE) Size | Starting Resilience | Notes |
|---------|-------------------|-------|
| NATO [[force-elements|Platoon (PL)]] | 4 | Uses two counters (4/3 and 2/1) |
| Russia [[force-elements|PL]] | 3 | Reflects lower troop numbers and attrition |
| [[force-elements|Section (SECT)]] | 1-2 | Single counter |

When Resilience drops past **half** of starting value, **[[force-elements|Troop Quality (TQ)]] is reduced** (already shown on the replacement counter).

### Counter Management (PLs)

[[force-elements|PL]]-sized [[force-elements|FEs]] use **two physical counters**:
- **Primary counter**: front = full Resilience, back = Resilience - 1
- **Secondary counter**: front = Resilience - 2, back = Resilience - 3 (if applicable)

Example progression for NATO [[force-elements|PL]] (starting Resilience 4):
1. Full strength: Primary counter, front (Resilience 4, [[force-elements|TQ]] 6)
2. 1 Hit: Primary counter, flipped (Resilience 3, [[force-elements|TQ]] 6)
3. 2 Hits: Swap to secondary counter, front (Resilience 2, [[force-elements|TQ]] 5)
4. 3 Hits: Secondary counter, flipped (Resilience 1, [[force-elements|TQ]] 5)
5. 4 Hits: **Eliminated** — removed from game

## Elimination

An [[force-elements|FE]] is Eliminated when:
- Its Resilience reaches **0** (received one more Hit than its Resilience allows)
- It becomes **[[morale#Broken|Broken]]** (Disrupted [[force-elements|FE]] receives a Hit and fails Rally test)
- It **cannot meet Pull Back requirements** after an Assault

**Eliminated** means permanently removed from the game as combat ineffective.

## Morale Effect of Hits

In Standard/Advanced mode, receiving **at least 1 Hit** from Direct or Indirect Fire causes the [[force-elements|FE]] to **drop one [[morale|Morale]] level**:
- Good → Suppressed
- Suppressed → Disrupted
- Disrupted → must take immediate Rally test or become Broken

> [!important]
> Multiple Hits from a **single** Fire action only cause **one** Morale drop. The number of Hits doesn't matter for Morale — only that at least 1 was received.

> [!note]
> Hits from **Assaults** do NOT have a Morale effect.

## Hits on Stacks

When a Tracked [[force-elements|PL]] [[force-elements|FE]] in a [[stacking|Stack]] receives Hits:

### Embedded Section (SECT)
For **each Hit** the Tracked [[force-elements|PL]] receives, roll 1D6:
- On a **1**: that Hit goes to the **Embedded [[force-elements|SECT]]** instead of the Tracked [[force-elements|PL]]
- On 2-6: Hit stays on the Tracked [[force-elements|PL]]

If the [[force-elements|SECT]] takes the Hit, any Mounted [[force-elements|FE]] does **not** need to roll for that Hit.

### Mounted Foot Platoon (PL)
For **each Hit** the Tracked [[force-elements|PL]] receives, roll 1D6:
- On **4+**: the Mounted [[force-elements|FE]] receives an **additional Hit** (the Tracked [[force-elements|PL]] still takes its Hit)
- On 1-3: no additional effect

### Overflow Hits
If the Tracked [[force-elements|PL]] is Eliminated and Hits remain:
- Remaining Hits go to the **Embedded [[force-elements|SECT]]** automatically
- If no Embedded [[force-elements|SECT]], roll for Mounted [[force-elements|FE]] (4+ = Hit) for each overflow Hit

### Survivors
When the Tracked [[force-elements|PL]] is Eliminated:
- Surviving Embedded [[force-elements|SECT]] is placed at the location, may Reposition up to 250m
- Surviving Mounted [[force-elements|FE]] is placed at the location, may Reposition up to 250m
- If both remain, at least one must Reposition (cannot remain Stacked without the Tracked [[force-elements|PL]])

### Worked Example

> A Tracked [[force-elements|PL]] with Embedded [[force-elements|SECT]] and Mounted Foot [[force-elements|PL]] receives 3 Hits:
> 1. Roll 3D6 for Embedded [[force-elements|SECT]]: results are 5, 6, 1. The '1' means 1 Hit goes to [[force-elements|SECT]] (Eliminates it, Resilience 1). The other 2 Hits go to Tracked [[force-elements|PL]].
> 2. Roll 2D6 for Mounted Foot [[force-elements|PL]] (one roll per Hit on the Tracked [[force-elements|PL]]): results are 3, 4. The '4' means 1 additional Hit to Mounted [[force-elements|FE]].
> 3. Final: [[force-elements|SECT]] takes 1 Hit (Eliminated), Tracked [[force-elements|PL]] takes 2 Hits, Mounted Foot [[force-elements|PL]] takes 1 Hit.
