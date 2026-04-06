---
title: Stacking (Mounting & Embedding)
type: concept
tags: [stacking, mounting, embedding, apcs, ifvs]
sources: [Rulebook - FINAL.pdf]
created: 2026-04-05
updated: 2026-04-05
---

# Stacking

A **Stack** combines multiple [[force-elements|Force Element (FE)]] counters into a single unit on the map. Stacking represents infantry riding in armoured vehicles or smaller vehicle sections operating as part of a larger vehicle platoon.

## Stack Composition

A Stack always has a **Tracked [[force-elements|Platoon (PL)]] [[force-elements|FE]]** on top, plus one or both of:
- A **Mounted Foot [[force-elements|PL]] [[force-elements|FE]]** (infantry riding inside the vehicle)
- An **Embedded [[force-elements|Section (SECT)]] [[force-elements|FE]]** (smaller vehicle section operating with the platoon)

**Maximum Stack:** Tracked [[force-elements|PL]] + Mounted Foot [[force-elements|PL]] + Embedded [[force-elements|SECT]] (plus any [[atgm|Anti-Tank Guided Missiles (ATGMs)]] these [[force-elements|FEs]] carry).

> [!important]
> An [[force-elements|FE]] can only Mount/Embed in a Tracked [[force-elements|FE]] with the [[force-elements|Armoured Personnel Carrier (APC)]]/[[force-elements|Infantry Fighting Vehicle (IFV)]] NATO icon. Not all Tracked [[force-elements|FEs]] can carry passengers.

## Mounting (Foot [[force-elements|PL]] [[force-elements|FEs]])

**What it represents:** Infantry inside armoured personnel carriers / infantry fighting vehicles.

**How to Mount:**
- During the **Preparation Phase** (1.1.3), or
- At the **end** of the Foot [[force-elements|PL]]'s Move or Move-Fire Action, ending in contact with a Tracked [[force-elements|PL]] [[force-elements|FE]] in the same [[task-groups|Task Group]]

**Rules:**
- The Tracked [[force-elements|PL]] must not already have another [[force-elements|FE]] Mounted
- The Foot [[force-elements|PL]] counter is placed **under** the Tracked [[force-elements|PL]] counter
- A **Reorg marker** is placed on the Tracked [[force-elements|PL]] (cannot activate this turn)
- The Tracked and Foot [[force-elements|PL]] do not need to share the same Platoon ID

**While Mounted:**
- The Foot [[force-elements|PL]] **cannot be activated** for any action except **Move (to Dismount)** or **[[assault|Assault]]**
- Otherwise treated as having a Hold action
- **Cannot be directly targeted** by enemy fire
- For each Hit the Tracked [[force-elements|PL]] receives, roll 1D6: on **4+**, the Mounted [[force-elements|FE]] also receives a Hit

**Dismounting:**
- Activated and given a Move Action (can include Move-Fire) or Assault Action
- **Cannot Dismount if the Tracked [[force-elements|PL]] has already activated** (exception: automatic Dismount during Assaults)
- The Dismounting [[force-elements|FE]] gains the same [[morale|Morale Status]] as the Stack

## Embedding ([[force-elements|SECT]] [[force-elements|FEs]])

**What it represents:** A smaller vehicle section becoming part of a larger vehicle platoon.

**How to Embed:**
- During the **Preparation Phase** (1.1.3), or
- At the **end** of the [[force-elements|SECT]]'s Move or Move-Fire Action, ending in contact with a Tracked [[force-elements|PL]] in the same Task Group

**Rules:**
- The Tracked [[force-elements|PL]] must not already have another [[force-elements|SECT]] Embedded
- The [[force-elements|SECT]] counter is placed **under** the Tracked [[force-elements|PL]] counter
- A **Reorg marker** is placed on the Tracked [[force-elements|PL]]
- When Embedding during play, a Reorg marker is placed on the Stack

**While Embedded:**
- The [[force-elements|SECT]] takes the **same Actions** as the Tracked [[force-elements|PL]], unless Detaching
- The [[force-elements|SECT]] is considered to **occupy the same position** as the Tracked [[force-elements|PL]] — critical for [[force-elements|Intelligence, Surveillance, Target Acquisition & Reconnaissance (ISTAR)]] Embedded [[force-elements|SECTs]]
- **Cannot be directly targeted** by enemy fire
- For each Hit the Tracked [[force-elements|PL]] receives, roll 1D6: on **1**, the Embedded [[force-elements|SECT]] receives that Hit instead

**Detaching:**
- Activated and given a Move Action (can include Move-Fire)
- **Cannot Detach if the Tracked [[force-elements|PL]] has already activated**
- The Detaching [[force-elements|SECT]] gains the same Morale Status as the Stack

## Information Hiding

Only the **top counter** of a Stack (and its [[atgm|ATGM]]) is open information. The opponent **cannot examine** which [[force-elements|FEs]] are underneath. This creates uncertainty about whether a Tracked [[force-elements|FE]] is carrying infantry.

## Morale in Stacks

- While Stacked, the Embedded/Mounted [[force-elements|FE]] has the **same Morale Status** as the Tracked [[force-elements|PL]]
- Rally test results apply to the **whole Stack**
- An [[force-elements|FE]] joining a Stack gains the Stack's current Morale Status (regardless of its previous status)

> [!tip]
> This can be used tactically: a Disrupted [[force-elements|FE]] can Mount/Embed into a Good-status Stack to instantly recover its Morale. But the opportunities to do this will be limited.

## Hits on Stacks

See [[combat-effectiveness#Hits on Stacks]] for the full resolution process. Summary:

| Force Element (FE) in Stack | Hit roll | Effect |
|-------------|----------|--------|
| Embedded [[force-elements|SECT]] | 1D6 per Hit on Tracked [[force-elements|PL]] — on **1** | Hit goes to [[force-elements|SECT]] instead |
| Mounted Foot [[force-elements|PL]] | 1D6 per Hit on Tracked [[force-elements|PL]] — on **4+** | Mounted [[force-elements|FE]] receives **additional** Hit |

If the Tracked [[force-elements|PL]] is Eliminated:
- Remaining Hits overflow to the Embedded [[force-elements|SECT]]
- The Mounted [[force-elements|FE]] is placed at the location, may Reposition up to 250m
- If both Mounted and Embedded [[force-elements|FEs]] remain, at least one must Reposition (cannot remain Stacked without the Tracked [[force-elements|PL]])
