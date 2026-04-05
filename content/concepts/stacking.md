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

A Stack always has a **Tracked PL FE** on top, plus one or both of:
- A **Mounted Foot PL FE** (infantry riding inside the vehicle)
- An **Embedded SECT FE** (smaller vehicle section operating with the platoon)

**Maximum Stack:** Tracked [[force-elements|Platoon (PL)]] + Mounted Foot [[force-elements|PL]] + Embedded [[force-elements|Section (SECT)]] (plus any [[atgm|Anti-Tank Guided Missiles (ATGMs)]] these [[force-elements|FEs]] carry).

> [!important]
> An [[force-elements|FE]] can only Mount/Embed in a Tracked [[force-elements|FE]] with the [[force-elements|Armoured Personnel Carrier (APC)]]/[[force-elements|Infantry Fighting Vehicle (IFV)]] NATO icon. Not all Tracked [[force-elements|FEs]] can carry passengers.

## Mounting (Foot PL FEs)

**What it represents:** Infantry inside armoured personnel carriers / infantry fighting vehicles.

**How to Mount:**
- During the **Preparation Phase** (1.1.3), or
- At the **end** of the Foot PL's Move or Move-Fire Action, ending in contact with a Tracked PL FE in the same [[task-groups|Task Group]]

**Rules:**
- The Tracked PL must not already have another FE Mounted
- The Foot PL counter is placed **under** the Tracked PL counter
- A **Reorg marker** is placed on the Tracked PL (cannot activate this turn)
- The Tracked and Foot PL do not need to share the same Platoon ID

**While Mounted:**
- The Foot PL **cannot be activated** for any action except **Move (to Dismount)** or **[[assault|Assault]]**
- Otherwise treated as having a Hold action
- **Cannot be directly targeted** by enemy fire
- For each Hit the Tracked PL receives, roll 1D6: on **4+**, the Mounted FE also receives a Hit

**Dismounting:**
- Activated and given a Move Action (can include Move-Fire) or Assault Action
- **Cannot Dismount if the Tracked PL has already activated** (exception: automatic Dismount during Assaults)
- The Dismounting FE gains the same [[morale|Morale Status]] as the Stack

## Embedding (SECT FEs)

**What it represents:** A smaller vehicle section becoming part of a larger vehicle platoon.

**How to Embed:**
- During the **Preparation Phase** (1.1.3), or
- At the **end** of the SECT's Move or Move-Fire Action, ending in contact with a Tracked PL in the same Task Group

**Rules:**
- The Tracked PL must not already have another SECT Embedded
- The SECT counter is placed **under** the Tracked PL counter
- A **Reorg marker** is placed on the Tracked PL
- When Embedding during play, a Reorg marker is placed on the Stack

**While Embedded:**
- The SECT takes the **same Actions** as the Tracked PL, unless Detaching
- The [[force-elements|SECT]] is considered to **occupy the same position** as the Tracked [[force-elements|PL]] — critical for [[force-elements|Intelligence, Surveillance, Target Acquisition & Reconnaissance (ISTAR)]] Embedded [[force-elements|SECTs]]
- **Cannot be directly targeted** by enemy fire
- For each Hit the Tracked PL receives, roll 1D6: on **1**, the Embedded SECT receives that Hit instead

**Detaching:**
- Activated and given a Move Action (can include Move-Fire)
- **Cannot Detach if the Tracked PL has already activated**
- The Detaching SECT gains the same Morale Status as the Stack

## Information Hiding

Only the **top counter** of a Stack (and its [[atgm|ATGM]]) is open information. The opponent **cannot examine** which [[force-elements|FEs]] are underneath. This creates uncertainty about whether a Tracked [[force-elements|FE]] is carrying infantry.

## Morale in Stacks

- While Stacked, the Embedded/Mounted FE has the **same Morale Status** as the Tracked PL
- Rally test results apply to the **whole Stack**
- An FE joining a Stack gains the Stack's current Morale Status (regardless of its previous status)

> [!tip]
> This can be used tactically: a Disrupted FE can Mount/Embed into a Good-status Stack to instantly recover its Morale. But the opportunities to do this will be limited.

## Hits on Stacks

See [[combat-effectiveness#Hits on Stacks]] for the full resolution process. Summary:

| FE in Stack | Hit roll | Effect |
|-------------|----------|--------|
| Embedded [[force-elements|SECT]] | 1D6 per Hit on Tracked [[force-elements|PL]] — on **1** | Hit goes to [[force-elements|SECT]] instead |
| Mounted Foot [[force-elements|PL]] | 1D6 per Hit on Tracked [[force-elements|PL]] — on **4+** | Mounted [[force-elements|FE]] receives **additional** Hit |

If the Tracked PL is Eliminated:
- Remaining Hits overflow to the Embedded SECT
- The Mounted FE is placed at the location, may Reposition up to 250m
- If both Mounted and Embedded FEs remain, at least one must Reposition (cannot remain Stacked without the Tracked PL)
