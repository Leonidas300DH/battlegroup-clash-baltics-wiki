---
title: Morale
type: concept
tags: [morale, suppression, disruption, rally, standard-mode]
sources: [Rulebook - FINAL.pdf]
created: 2026-04-05
updated: 2026-04-05
---

# Morale (Standard/Advanced Mode)

Morale represents a [[force-elements|Force Element (FE)]]'s psychological state under fire. It is a **Standard/Advanced mode** mechanic — ignored in Basic mode.

## Morale Status Levels

| Level | Marker | Troop Quality (TQ) Modifier | Movement | Other |
|-------|--------|-------------|----------|-------|
| **Good** | None | 0 | Full | — |
| **Suppressed** | Yellow "S" | -1 [[force-elements|TQ]] | 50% | — |
| **Disrupted** | Purple "D" | -2 [[force-elements|TQ]] | 50%, may not move toward visible enemy | May not [[assault\|Assault]] |
| **Broken** | — | — | — | Immediately **Eliminated** |

## How Morale Drops

An [[force-elements|FE]] drops one Morale level from:
- Receiving an **'S' result** from Direct Fire or Automatic Suppression from Indirect Fire (only if currently at Good; no further effect if already Suppressed/Disrupted)
- Receiving **at least 1 Hit** from Direct or Indirect Fire (drops one level regardless of current status)
- Being forced to **Pull Back** after Engaging in an [[assault|Assault]] (receives a Disrupted marker)

> [!important]
> Multiple Hits from a **single** Fire action only lower Morale by **one level** — the number of Hits doesn't matter for Morale, only that at least 1 Hit was received.

## Broken

An [[force-elements|FE]] becomes **Broken** if it:
1. Is currently **Disrupted**
2. Receives a Hit
3. **Fails** the immediate Rally test

A Broken [[force-elements|FE]] is **immediately Eliminated** — removed from the game.

## Effects of Morale

### On TQ
The -1 (Suppressed) or -2 (Disrupted) modifier affects **all** uses of [[force-elements|Troop Quality (TQ)]]:
- Direct Fire [[glossary|Dice Roll Modifier (DRM)]] (firing [[force-elements|FE]]'s [[force-elements|TQ]])
- Assault [[glossary|DRM]]
- Rally Tests

### On Movement
Both Suppressed and Disrupted reduce Movement Allowance to **50%** (does not apply for Assaults).

A Disrupted [[force-elements|FE]] additionally **may not move toward** any enemy [[force-elements|FE]] it has [[line-of-sight|Line of Sight (LoS)]] to.

### On Actions
A Disrupted [[force-elements|FE]] **may not be given an Assault Action** (as Attacker).

## Morale in Stacks

While in a [[stacking|Stack]]:
- The Embedded/Mounted [[force-elements|FE]] automatically has the **same Morale Status** as the Tracked [[force-elements|PL]]
- Rally test results apply to the **entire Stack**
- An [[force-elements|FE]] joining a Stack gains the Stack's current Morale Status, regardless of its previous status
- An [[force-elements|FE]] leaving a Stack (Detaching/Dismounting) takes the Stack's current Morale Status with it

## Rally Tests

Rally Tests occur in two situations:

### 1. Rally Step (Command Phase)
At the start of each turn, both sides simultaneously test each Suppressed or Disrupted [[force-elements|FE]]/Stack:

**Roll 1D6**, apply modifiers from the Morale Test table (Player Aid 1):
- **Pass** (roll ≤ modified [[force-elements|TQ]]): improve Morale by one level
  - Disrupted → Suppressed (flip marker)
  - Suppressed → Good (remove marker)
- **Fail**: nothing happens, marker stays
- **Roll of 1**: always a pass
- **Roll of 6**: always a fail

**Key modifier:** If a **Tac or Main [[force-elements|Headquarters (HQ)]]** is within 250m, add its **[[glossary|Command & Control (C2)]] Rating** as a positive [[glossary|DRM]].

Other modifiers are on Player Aid 1 (e.g., +1 if no enemy in [[line-of-sight|LoS]]).

### 2. Immediate Rally (After Hit on Disrupted [[force-elements|FE]])
When a Disrupted [[force-elements|FE]] receives a Hit:
- **Pass**: Disrupted marker remains ([[force-elements|FE]] survives)
- **Fail**: [[force-elements|FE]] becomes **Broken** → immediately **Eliminated**

## Assault Reorg and Rally

[[force-elements|FEs]] that Engaged in an [[assault|Assault]] receive an **Assault Reorg** marker. During Clean-up:
- Take a Rally test
- **Pass**: remove the Assault Reorg marker
- **Fail**: flip to regular Reorg marker ([[force-elements|FE]] cannot activate next turn)
