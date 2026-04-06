---
title: Support Assets
type: concept
tags: [components, artillery, fpv, uas, drones, indirect-fire]
sources: [Rulebook - FINAL.pdf]
created: 2026-04-05
updated: 2026-04-05
---

# Support Assets (SAs)

A **Support Asset** represents artillery and drone assets. SAs **cannot be targeted** and have no Stats. They are activated instead of a [[task-groups|Task Group]].

> [!note] Design note
> SAs represent units supporting the force from outside the immediate battlespace. In reality these could be targeted, but this is abstracted for simplicity.

## Types of Support Assets

| Support Asset (SA) | NATO | Russia | On Map? | Actions |
|----|------|--------|---------|---------|
| **Artillery** | 155mm | 152mm | No | Hold, [[indirect-fire\|Indirect Fire]] |
| **FPV** | FPV A/B | FPV A/B | No | Hold, [[indirect-fire\|Indirect Fire]] (with [[indirect-fire#FPV Double-Tap\|Double-Tap]]) |
| **UAS** | UAS | UAS | Yes (at Grid Intersections) | Hold, [[move\|Move]] |

## Artillery (155mm / 152mm)

- **Off-map** at all times
- Fires [[indirect-fire|Indirect Fire]] using the Artillery row on the Fire Results Table
- Requires an **[[force-elements#ISTAR Assets|Intelligence, Surveillance, Target Acquisition & Reconnaissance (ISTAR) Asset]]** to have [[line-of-sight|Line of Sight (LoS)]] to the target
- **No range limit**
- **[[indirect-fire#Danger Close|Danger Close]]**: cannot target enemies within **500m** of friendly [[force-elements|Force Elements (FEs)]] (250m for friendly Recce)
- **[[indirect-fire#Automatic Suppression|Automatic Suppression]]**: applies to all [[force-elements|FE]] types within 250m of target
- Can fire **[[indirect-fire#Smoke|Smoke]]** instead of HE
- Limited by **Fire Missions** (set by scenario [[glossary|Order of Battle (ORBAT)]])
- Generates [[electronic-warfare|Electronic Transmission (ETX)]]: 1 marker (in Fire Plan area) or 3 markers (outside Fire Plan) in Standard/Advanced

## FPV (First-Person View Drone)

- **Off-map** at all times
- Represents any drone with offensive capability
- Requires an **[[force-elements#ISTAR Assets|ISTAR]] Asset** to have [[line-of-sight|LoS]] to the target
- **No range limit**
- **No Danger Close restriction**
- **[[indirect-fire#Automatic Suppression|Automatic Suppression]]**: applies to Dismounted Foot [[force-elements|FEs]] within 250m
- **[[indirect-fire#FPV Double-Tap|Double-Tap Strike]]**: can fire a second time immediately at the same target (uses an additional Fire Mission, no additional [[electronic-warfare|ETX]])
- Generates [[electronic-warfare|ETX]]: 0 markers (in Fire Plan area) or 3 markers (outside Fire Plan) in Standard/Advanced
- Can fire Smoke

## UAS (Unmanned Aerial Support Drone)

- **On-map** — placed at a **Grid Intersection**
- Begins off-map by default; placed on first Move Action at any Grid Intersection
- When given a Move Action, can be moved to **any** Grid Intersection on the map
- **[[line-of-sight|LoS]]**: covers the **4 adjacent Grid Squares** — ignores all Obstructions within those squares
- Cannot fire — exists solely for **[[force-elements#ISTAR Assets|ISTAR]]** (providing [[line-of-sight|LoS]] for Indirect Fire)
- Can coexist at the same Grid Intersection as an enemy UAS

## Fire Missions

Each [[support-assets|SA]]/Mortar [[force-elements|FE]] starts with a number of Fire Missions set by the scenario [[glossary|Order of Battle (ORBAT)]]. Each Indirect Fire action reduces available Fire Missions by 1. At 0 Fire Missions, the SA/[[force-elements|FE]] cannot Indirect Fire.

**Tracking:**
- **Basic/Standard mode**: Fire Mission markers (double-sided tokens) placed next to the SA
- **Advanced mode**: Fire Mission / Ammo Card with dedicated trackers per SA/FE

## Activation

SAs are activated **instead of** a Task Group during the [[execution-phase#Action Round|Action Round]]. The only Actions an SA can take:
- **Hold** — do nothing
- **Move** (UAS only) — move to any Grid Intersection
- **[[indirect-fire|Indirect Fire]]** (Artillery/FPV only) — fire at a target

## Fire Plans (Standard/Advanced)

In Standard/Advanced mode, Artillery, [[support-assets|FPV]], and Mortar [[force-elements|FEs]] are given a **[[fire-plans|Fire Plan]]** on the [[sync-matrix|Sync Matrix]] — a Grid Intersection defining a pre-planned target area (the 4 adjacent Grid Squares). Firing within the Fire Plan area generates **less [[electronic-warfare|ETX]]**.
