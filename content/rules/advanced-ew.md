---
title: Advanced Electronic Warfare
type: rule
tags: [ew, electronic-warfare, ewp, sigint, jamming, supplement]
sources: [EWAdvSupp_Rules.pdf, EWAdvSupp_PlayerAids7&8.pdf]
created: 2026-04-05
updated: 2026-04-05
---

# Advanced Electronic Warfare (replaces rule 2.3)

From the [[ew-adv-supp-rules|Advanced Rules Supplement]]. This **completely replaces** the base game's [[electronic-warfare|EW Chit]] system. There are no EW Chits. Instead, each side allocates **Electronic Warfare Points (EWP)** across 4 EW Types in a strategic plan decided during the [[preparation-phase|Preparation Phase]].

> [!important]
> [[electronic-warfare|Electronic Transmission (ETX)]] is still generated as in the base game. What changes is how ETX and [[electronic-warfare|Electronic Warfare (EW)]] are resolved.

## Overview

```
Preparation Phase: Roll for EWP → Produce EW Plan on Sync Matrix
                                         ↓
Each Turn Command Phase: EW Activity
  1. Flip ETX markers face-up
  2. Add ETX value to SIGINT (A)
  3. Both sides reveal their EW Plan for the Turn
  4. Resolve EW attacks (non-Initiative side first)
  5. Return ETX markers to pool
```

## Electronic Warfare Points (EWP)

Each side rolls for EWP in the [[preparation-phase|Preparation Phase]]:

| Scenario | [[nato|NATO]] EWP | [[russia|Russia]] EWP | Special Rules |
|----------|---------|------------|---------------|
| 1 | 2D6+3 | 3D6+6 | — |
| 2 | 3D6+3 | 4D6+6 | — |
| 3 | 3D6+3 | 4D6+6 | No Russian EWP in Turn 1 |
| 4 | 3D6+3 | 3D6+6 | No Russian EWP in Turn 1 |
| 5 | Per Theatre (A=Sc.4, B=Sc.3) | Per Theatre | No Russian EWP in Turn 1 |
| 6 | 3D6+3 | 4D6+3 | — |

> Russia consistently gets more EWP than NATO, reflecting their emphasis on electronic warfare.

## The 4 EW Types

Each EW Type has an **Attack (A)** and **Defend (D)** allocation. EWP can be assigned to both or just one per Turn.

### 1. SIGINT (Signals Intelligence)

**Purpose:** Locate enemy command and observation assets via their electronic emissions.

**Free EWP (from Turn 2):**
- [[nato|NATO]]: **2 EWP** per Turn for SIGINT (A) for free
- [[russia|Russia]]: **1 EWP** per Turn for SIGINT (A) for free
- Additionally boosted by intercepted [[electronic-warfare|ETX]] value each Turn

**Procedure:**
1. Add revealed [[electronic-warfare|ETX]] value to SIGINT (A) allocation for the Turn
2. Subtract opponent's SIGINT (D) value
3. If result < 1: no effect
4. Else: roll 1D6. If roll ≤ modified SIGINT (A) value → success

**Effect:** Place Target markers equal to the 1D6 result on any **identified** enemy [[force-elements|Headquarters (HQ)]] / [[force-elements|ISTAR]] [[force-elements|Force Element (FE)]].

**How [[force-elements|HQ]]/[[force-elements|ISTAR]] [[force-elements|FEs]] become "identified":**
- Provided [[force-elements|ISTAR]] [[line-of-sight|Line of Sight (LoS)]] for [[indirect-fire|Indirect Fire]] on the previous Turn
- [[force-elements|HQ]] is also identified if (previous Turn): [[support-assets|Unmanned Aerial Support drone (UAS)]] provided ISTAR LoS, or [[force-elements|HQ]] made a [[command-activation|Command Activation]], or a friendly [[force-elements|FE]] crossed a [[boundary-lines|Boundary Line]]
- [[force-elements|HQ]] is also identified (current Turn) if [[orders#New Orders|New Orders]] were issued

---

### 2. GNSS Jamming (GPS/GLONASS)

**Purpose:** Prevent the enemy from navigating to locations they can't see.

**Procedure:**
1. Subtract opponent's GNSS (D) from your GNSS (A)
2. If result < 1: no effect
3. Else: roll 1D6. If roll ≤ modified value → success

**Effect:** Affected side's [[force-elements|FEs]] may only **Move or [[assault|Assault]] to locations in [[line-of-sight|LoS]]** at the point of Activation. Column Move limited to **1,000m**.

> [!note] Design note
> GNSS uses known frequencies with faint signals, making selective jamming easier — so there's no self-jamming risk.

---

### 3. Drone Jamming

**Purpose:** Deny the enemy's [[support-assets|UAS]] surveillance.

> [!warning] Can self-jam!
> Drone Jamming can affect the attacker's own drones.

**Procedure:**
1. Roll 1D6 (note result — used for both checks below)
2. **Opponent check**: Subtract opponent's Drone (D) from your Drone (A). If result ≥ 1 and die roll ≤ modified value → opponent is jammed
3. **Self-jam check**: Subtract **twice** your own Drone (D) from your Drone (A). If result ≥ 1 and die roll ≤ modified value → you jammed your own drones

**Effect:** The affected side has **no [[support-assets|UAS]] [[line-of-sight|LoS]]** for the Turn.

> Example: NATO has Drone A5/D2. Russia has Drone A3/D2.
> NATO rolls 3. Opponent: A5 - Russia D2 = 3. Roll of 3 ≤ 3 → Russia jammed.
> Self-jam: A5 - (NATO D2 × 2 = 4) = 1. Roll of 3 > 1 → NATO NOT self-jammed.

---

### 4. Comms Jamming

**Purpose:** Disrupt the enemy's ability to coordinate actions.

> [!warning] Can self-jam!
> Same self-jam procedure as Drone Jamming.

**Procedure:** Same as Drone Jamming (roll 1D6, check opponent, check self).

**Effect:** Each time the affected side takes an Action that generates [[electronic-warfare|ETX]], it must first roll 1D6:
- **1-3**: The Action **has no effect** (but [[electronic-warfare|ETX]] is still generated)
  - [[indirect-fire|Indirect Fire]]: [[support-assets|Support Asset (SA)]] counts as Activated, but no Fire Mission spent, no fire resolved
  - [[orders#New Orders|New Orders]]: [[task-groups|Task Group (TGp)]] keeps its current Order
  - [[command-activation|Command Activation]]: additional [[task-groups|TGps]] remain Unactivated
  - [[replendem|REPLENDEM]]: no Ammo/[[atgm|Anti-Tank Guided Missile (ATGM)]] transfer
- **4-6**: Action proceeds normally

This effect persists **through to the New Orders step of the next Command Phase**.

> [!note]
> [[electronic-warfare|ETX]] from [[boundary-lines|Boundary Line]] crossing does NOT trigger the Comms Jamming roll.

---

## Target Markers (Revised)

In this supplement, Target markers work **differently** from the base game:

| Aspect | Base Game | Advanced EW Supplement |
|--------|-----------|----------------------|
| Source | From revealed [[electronic-warfare|ETX]] markers | From successful SIGINT rolls only |
| Placement | In player's area | On specific identified enemy [[force-elements|HQ]]/[[force-elements|ISTAR]] [[force-elements|FEs]] |
| Usable for | [[direct-fire|Direct Fire]] and [[indirect-fire|Indirect Fire]] [[glossary|Dice Roll Modifier (DRM)]] | [[indirect-fire|Indirect Fire]] [[glossary|DRM]] only (not Direct Fire) |
| Duration | Single use, removed after use | **Whole Turn** — usable on multiple Indirect Fires |
| ISTAR bypass | No | 3+ markers on a target allows Indirect Fire **without [[force-elements|ISTAR]] [[line-of-sight|LoS]]** (but no [[glossary|DRM]] bonus) |
| In [[stacking|Stack]] | N/A | Placed on [[stacking|Stack]] if [[force-elements|HQ]]/[[force-elements|ISTAR]] is [[stacking|Embedded]]; stays with [[stacking|Stack]] if [[force-elements|FE]] leaves |

### ISTAR Bypass (3+ Target Markers)

An [[force-elements|FE]]/[[stacking|Stack]] with **at least 3 Target markers** can be targeted by [[indirect-fire|Indirect Fire]] even without [[force-elements|ISTAR]] [[line-of-sight|LoS]]. In this case, the Target markers provide **no positive [[glossary|DRM]]** — but the fire is still possible.

> Mechanically: you can target purely based on electronic signature, but less accurately.

---

## Strategic Implications

- **EWP is a finite resource** — allocate it wisely across the whole game, not just Turn 1
- **Concentration vs distribution**: spend all EWP early to dominate, or drip-feed through the game?
- **GNSS Jamming** is devastating against forces that need to move to non-visible locations (e.g. through terrain they can't see through)
- **Drone Jamming** shuts down [[support-assets|UAS]]-directed fire but risks self-jamming — high Attack with low Defend is risky
- **Comms Jamming** creates 50% chance of action failure — crippling for a side relying on [[indirect-fire|Indirect Fire]] or [[command-activation|Command Activations]]
- **SIGINT** places Target markers that persist all Turn — stacking them on a key target enables devastating concentrated fire
- Russia gets more EWP but must plan it pre-game under [[red-doctrine|Red Doctrine]] — no adjustments possible
