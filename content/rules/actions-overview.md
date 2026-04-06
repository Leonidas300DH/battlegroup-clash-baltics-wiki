---
title: Actions Overview
type: rule
tags: [actions, activation, core-rules]
sources: [Rulebook - FINAL.pdf]
created: 2026-04-05
updated: 2026-04-05
---

# Actions Overview

There are **8 Actions** in Basic/Standard mode and a **9th in Advanced mode**. When a [[task-groups|Task Group]] is activated, each [[force-elements|Force Element (FE)]] in it takes one Action. [[force-elements|FEs]] in the same Task Group can take different Actions.

## Action Summary

| # | Action | What it does | Force Element (FE) Types | Marker placed |
|---|--------|-------------|----------|---------------|
| 4.1 | **[[move\|Move]]** | Move up to Movement Allowance | All | Moved |
| 4.2 | **[[move-fire\|Move-Fire]]** | Move + Direct Fire during movement | All | Moved |
| 4.3 | **[[direct-fire\|Direct Fire]]** | Shoot at a visible enemy | All [[force-elements\|FEs]] with Firepower | Activated |
| 4.4 | **[[indirect-fire\|Indirect Fire]]** | Mortar/Artillery/[[support-assets\|First Person View drone (FPV)]] strike | Mortar [[force-elements\|FE]], Artillery [[support-assets\|Support Asset (SA)]], [[support-assets\|FPV]] [[support-assets\|SA]] | Activated |
| 4.5 | **[[assault\|Assault]]** | Close-quarters combat | Must include Foot [[force-elements\|FE]] | Moved + Reorg/Assault Reorg |
| 4.6 | **[[hold\|Hold]]** | Stay in place (reposition up to 250m) | All | Activated |
| 4.7 | **[[overwatch\|Overwatch]]** | Hold + ability to Reactive Fire | All [[force-elements\|FEs]] | Overwatch |
| 4.8 | **[[dig-shell-scrape\|Dig Shell Scrape]]** | Create defensive earthwork | Foot only | Digging/Shell Scrape |
| 4.9 | **[[replendem\|REPLENDEM]]** | Resupply Ammo/[[atgm\|Anti-Tank Guided Missiles (ATGMs)]] (Advanced) | A1 Echelon only | Reorg |

## Support Asset Actions

[[support-assets|Support Assets (SAs)]] can only take:
- **Hold** — do nothing
- **Move** — [[support-assets|Unmanned Aerial Support drone (UAS)]] only (move to any Grid Intersection)
- **[[indirect-fire|Indirect Fire]]** — Artillery or [[support-assets|FPV]] only

## Key Rules

- **[[orders|Orders]] adherence** (Standard/Advanced): Actions must correspond with the Task Group's current Order
- **Reorg**: [[force-elements|FEs]] with a Reorg marker **cannot be activated** that turn
- **[[stacking#Mounting|Mounted]] Foot [[force-elements|FEs]]**: can only take Move (to Dismount) or Assault
- **[[stacking#Embedding|Embedded]] [[force-elements|Sections (SECTs)]]**: take the same Action as the Tracked [[force-elements|Platoon (PL)]], unless Detaching
- **[[overwatch#Reactive Fire|Reactive Fire]]**: the non-activating side may Direct Fire against moving/assaulting enemies (requires Overwatch marker)
