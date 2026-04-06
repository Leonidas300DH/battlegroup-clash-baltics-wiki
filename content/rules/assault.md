---
title: Assault
type: rule
tags: [assault, close-combat, infantry, action]
sources: [Rulebook - FINAL.pdf, Errata_FAQ 1.2 - Battlegroup Clash_ Baltics.pdf]
created: 2026-04-05
updated: 2026-04-05
---

# Assault Action (4.5)

An Assault is close-quarters combat between infantry, potentially supported by vehicles. It is **decisive** — one side will always be forced to [[#Pull Back|Pull Back]].

## Prerequisites

- At least one Attacking [[force-elements|Force Element (FE)]] must be a **Foot [[force-elements|FE]]** (can begin [[stacking|Mounted]])
- The Assault Location must be within **1,000m** of all Attackers (or within Movement Allowance given terrain)
- Attackers do **not** require [[line-of-sight|Line of Sight (LoS)]] to the Assault Location
- [[morale|Disrupted]] [[force-elements|FEs]] **cannot** be Attackers
- The Assault Location must be in terrain the Attackers can enter (not No-Go)

## Resolution Sequence

### 1. Declare Assault Location and Attackers
- Place Attacking [[force-elements|FEs]] at the Assault Location (enemy [[force-elements|FEs]] en route do **not** block this placement)
- Multiple [[force-elements|FEs]] in the same [[task-groups|Task Group]] can Assault simultaneously
- If a [[command-activation|Command Activation]] is active, [[force-elements|FEs]] from different Task Groups can join the same Assault

### 2. Reactive Fire
- Non-activating side [[force-elements|FEs]] with [[overwatch|Overwatch]] markers may [[overwatch#Reactive Fire|Reactive Fire]] against any Attacker
- If this Disrupts or Eliminates the **only attacking Foot [[force-elements|Platoon (PL)]]**, the Assault ends — Attackers Pull Back

### 3. Pull Back or Engage
The non-activating side decides:
- **Must Pull Back** if it has **no Foot [[force-elements|FE]]** (Mounted or Dismounted) within 250m of the Assault Location
- **May choose** Pull Back or Engage if a Foot [[force-elements|FE]] is present

**If Pull Back:**
- All non-activating [[force-elements|FEs]] within 250m Pull Back (see [[#Pull Back]] below)
- Attackers may Reposition up to 250m
- All [[force-elements|FEs]] receive Moved + **Reorg** markers (not Assault Reorg — no engagement occurred)
- Assault ends here

**If Engage:** proceed to step 4.

> [!note]
> Exception: [[force-elements|FEs]] within 250m but on the **other side of a River** do not need to Pull Back or Engage (though they may).

### 4. Dismount Foot FEs
Any Mounted Foot [[force-elements|FE]] from either side must now Dismount and become Attackers or Defenders.

### 5. Determine Result

1. **Combine Assault Values** of all Attackers, and separately of all Defenders
   - If a [[force-elements|Platoon (PL)]]-sized [[force-elements|FE]] has **less than 2 [[ammo|Ammo]]** (Advanced), its Assault Value = 1
2. **Calculate ratio**: Attackers' Value ÷ Defenders' Value, **rounded down**
3. **Roll 2D6**, apply [[glossary|Dice Roll Modifiers (DRMs)]] from the Assault DRM Table (Player Aid 5)
4. Cross-reference on the **Assault Results Table** (Player Aid 5)

> Example: Attackers' Value = 23, Defenders' = 11 → ratio 2.09:1, rounded to **2:1** row.

### Key Assault DRMs

| Modifier | Dice Roll Modifier (DRM) | Notes |
|----------|-----|-------|
| Attacking/Defending [[force-elements|Headquarters (HQ)]] [[glossary|Command & Control (C2)]] Rating | +/- [[glossary|C2]] value | Embedded [[force-elements|HQ]] [[force-elements|Section (SECT)]] also provides this |
| Attacking/Defending [[force-elements|Troop Quality (TQ)]] | Per [[force-elements|TQ]] modifier | If applies to at least one Attacker/Defender |
| Defender in Urban/Dense Wood | Negative [[glossary\|DRM]] | Defensive terrain advantage |
| Defender has Shell Scrape/Digging | -1/-2 | Per Dig Shell Scrape markers |
| Smoke at Assault Location | Positive [[glossary\|DRM]] | Favors the Attacker |
| Defender has Reorg marker | Positive [[glossary\|DRM]] | More vulnerable |

> [!note]
> If a [[glossary|DRM]] applies to **at least one** Attacker or Defender, it applies to the roll.

### 6. Apply Result

The result shows two numbers (e.g. **1:1**) in a colored box:
- **First number**: total Hits to **Attackers**
- **Second number**: total Hits to **Defenders**
- First Hit must always go to a **Foot [[force-elements|FE]]**
- Remaining Hits distributed as evenly as possible

> [!important]
> Hits from Assaults apply to **all [[force-elements|FE]] Types/colors** (unlike Direct Fire targeting restrictions). Hits from Assaults **do not have a Morale effect**.

**Box color determines winner:**
- **Green box** → Defenders Pull Back; Attackers may Reposition 250m; Digging/Shell Scrape markers removed
- **Pink box** → Attackers Pull Back; Defenders may Reposition 250m; Digging/Shell Scrape markers stay (unless the [[force-elements|FE]] Repositions)

> [!warning] Errata 1.2 Addition
> If **all [[force-elements|FEs]] from one side** were Eliminated in the Assault, ignore the box color. Treat it as green if only Attackers remain, pink if only Defenders remain.

### 7. Reorg
All participating [[force-elements|FEs]] receive:
- **Moved marker**
- **Reorg marker** (Basic) or **Assault Reorg marker** (Standard/Advanced)

### 8. Reduce Ammo (Advanced)
All participating [[force-elements|PL]]-sized [[force-elements|FEs]] reduce Ammo by **2**.

## Pull Back

[[force-elements|FEs]] that Pull Back must:
- Move **500m to 1,000m** away (ignoring all terrain and movement penalties)
- Meet Movement Restrictions (4.1): no overlapping, 250m from enemies
- Fulfil priorities in order:
  1. In [[line-of-sight#Cover|Cover]] (if Foot [[force-elements|FE]])
  2. Out of [[line-of-sight|LoS]] of all enemy [[force-elements|FEs]]
  3. Towards their entry point on the map
- Must meet **at least one** priority plus all Movement Restrictions — if not, the [[force-elements|FE]] is **Eliminated**
- [[force-elements|FEs]] that Pull Back after Engaging receive a **Disrupted marker**
- [[force-elements|FEs]] that Pull Back before Engagement (step 3) do **not** receive Disrupted

## Embedded SECTs in Assaults

- Embedded [[force-elements|SECTs]] remain with their Tracked [[force-elements|PL]] during Assaults
- Can receive Hits per normal Embedded rules (1D6 per Hit, on a 1 → [[force-elements|SECT]] takes the Hit)
- An Embedded [[force-elements|HQ]] [[force-elements|SECT]] provides a positive [[glossary|C2]] [[glossary|DRM]] for its side

## Mounted FEs in Assaults

- Attacking Mounted [[force-elements|FEs]] can remain Mounted at the start
- They automatically Dismount after Reactive Fire is resolved (step 4)
- If the Activating side doesn't want Mounted [[force-elements|FEs]] involved, they must Dismount **before** the Assault
- Dismounted [[force-elements|FEs]] **cannot re-Mount** at the end of an Assault (Mounting only occurs at the end of Move or Move-Fire Actions)

## FAQ Clarifications

> [!note] Assault is NOT movement
> Attacking [[force-elements|FEs]] are **placed** at the Assault Location — normal Movement rules do not apply. The Assault Location can be within 250m of enemy [[force-elements|FEs]]. Morale effects from Reactive Fire do not affect this placement (except if the only attacking Foot [[force-elements|FE]] becomes Disrupted, ending the Assault).

> [!note] Reactive Fire during Assaults
> Reactive Fire follows normal rules: the reacting [[force-elements|FE]] must have an [[overwatch|Overwatch]] marker **and** [[line-of-sight|LoS]] to the declared firing point.

> [!note] Disrupted FEs and Assaults
> If a [[force-elements|FE]] becomes Disrupted via Reactive Fire during the Assault, and it is the **only attacking Foot [[force-elements|FE]]**, the Assault ends and the Attacking side Pulls Back. Otherwise, the Disrupted [[force-elements|FE]] still participates (with reduced [[force-elements|TQ]]).

> [!note] Reorg FEs in Assaults
> [[force-elements|FEs]] with a Reorg marker **can Pull Back** from an Assault (Pull Back is not an Activation). If they choose to Engage instead, the Attacker gains a **+2 [[glossary|DRM]]** as the Reorg'd [[force-elements|FEs]] are disorganized and unprepared.

> [!note] Assault Hits and Morale
> Hits from the Assault result itself do **not** cause Suppression/Morale effects. However, all participating [[force-elements|FEs]] on the losing side receive a **Disrupted marker** when they Pull Back after Engaging.
