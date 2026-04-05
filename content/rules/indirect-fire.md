---
title: Indirect Fire
type: rule
tags: [indirect-fire, artillery, mortar, fpv, action]
sources: [Rulebook - FINAL.pdf]
created: 2026-04-05
updated: 2026-04-05
---

# Indirect Fire Action (4.4)

Indirect Fire allows mortars, artillery, and [[support-assets|First Person View drone (FPV)]] drones to attack targets they cannot directly see, using [[force-elements#ISTAR Assets|Intelligence, Surveillance, Target Acquisition & Reconnaissance (ISTAR) Assets]] for targeting.

## Types of Indirect Fire

| Type | Unit | On Map? | Range | ISTAR Required? | Danger Close |
|------|------|---------|-------|-----------------|--------------|
| **Mortar** | Mortar [[force-elements|Force Element (FE)]] | Yes | 8,000m max | Own [[line-of-sight|Line of Sight (LoS)]] or [[force-elements|ISTAR]] | 250m |
| **Artillery** | 155mm/152mm [[support-assets|Support Asset (SA)]] | No | Unlimited | Always | 500m (250m for Recce) |
| **[[support-assets|FPV]]** | [[support-assets|FPV]] [[support-assets|SA]] | No | Unlimited | Always | None |

## Resolution Sequence

1. **Declare target** — must be within [[line-of-sight|LoS]] of the firing Mortar or a friendly [[force-elements|ISTAR]] Asset; within Range (if Mortar); no Danger Close violation
2. **Play** [[electronic-warfare#Target Markers|Target marker]] (if available/desired)
3. **Play** [[electronic-warfare#EW Chits|EW Chit]] effect (if relevant/desired)
4. **Roll 2D6**, apply DRMs from the Indirect Fire DRM Table (Player Aid 4)
5. **Apply result** from the Indirect Fire Results Table (Player Aid 4)
6. **Reduce Fire Missions** by 1
7. **Opponent draws ETX** markers (see [[electronic-warfare]])

## ISTAR Assets

Indirect Fire (except Mortar using own [[line-of-sight|LoS]]) requires an [[force-elements|ISTAR]] Asset with [[line-of-sight|LoS]] to the target:
- **[[support-assets|Unmanned Aerial Support drone (UAS)]]** — sees the 4 Grid Squares adjacent to it, ignoring all Obstructions
- **Recce** [[force-elements|FE]] — 4,000m [[line-of-sight|LoS]], 500m exception rule
- **FST** (Fire Support Team) [[force-elements|Section (SECT)]]
- **[[force-elements|Headquarters (HQ)]]** [[force-elements|SECT]]
- **Embedded [[force-elements|ISTAR]] [[force-elements|SECT]]** — provides [[force-elements|ISTAR]] from within a [[stacking|Stack]]

## Danger Close

Prevents targeting enemies too close to friendly FEs:

| Fire Type | Danger Close Distance | Exception |
|-----------|----------------------|-----------|
| Mortar | 250m | — |
| Artillery | 500m | 250m for friendly Recce FEs |
| FPV | None | — |

Danger Close does **not** apply when firing [[#Smoke|Smoke]].

## Automatic Suppression

**Regardless of whether the Indirect Fire scores Hits**, it applies a Suppression marker to qualifying [[force-elements|FE]] types within range of the target:

| Fire Type | Affected [[force-elements|FE]] Types | Suppression Range |
|-----------|-------------------|-------------------|
| Artillery | **All** [[force-elements|FE]] types | 250m of target |
| Mortar | Dismounted Foot [[force-elements|FEs]] only | 250m of target |
| [[support-assets|FPV]] | Dismounted Foot [[force-elements|FEs]] only | 250m of target |

If the FE already has a Suppression marker, there is no additional effect.

## FPV Double-Tap Strike

The FPV can fire a **second time immediately** after the first Fire is resolved:
- Must target the **same** enemy FE
- Uses an **additional Fire Mission**
- Resolved as a separate Action but part of the same Activation
- **No additional ETX** generated
- Any DRM effects from EW Chits continue to apply

## Smoke

Artillery and Mortar can use a Fire Mission to place a **Smoke marker** on a target location:
- Requires [[force-elements|ISTAR]] [[line-of-sight|LoS]] (or Mortar's own [[line-of-sight|LoS]]) to the target location
- Target can be **any location** with LoS (including on top of an FE/Stack)
- Smoke is a **Partial Obstruction** (-3 DRM for LoS through it)
- Provides a DRM bonus for the Attacker in [[assault|Assaults]]
- **No roll required** — Smoke is automatically placed
- **No Danger Close** restriction
- **No Automatic Suppression**
- Uses 1 Fire Mission
- Smoke markers are removed in the Clean-up step

## Key DRMs (from rulebook examples)

| Modifier | DRM |
|----------|-----|
| UAS has LoS to target | +2 |
| Firing at Tracked FE with Moved marker | -5 (varies by fire type) |
| Cover (Foot FE in terrain) | Varies |
| Shell Scrape | -2 |
| EW Chit effects | Varies |

## ETX Generation

See [[electronic-warfare#ETX Generation]] for full tables. Summary for Standard/Advanced:

| Type | In Fire Plan | Not in Fire Plan |
|------|-------------|-----------------|
| Mortar | 1 [[electronic-warfare|Electronic Transmission (ETX)]] | 3 [[electronic-warfare|ETX]] |
| Artillery | 1 [[electronic-warfare|ETX]] | 3 [[electronic-warfare|ETX]] |
| [[support-assets|FPV]] | 0 [[electronic-warfare|ETX]] | 3 [[electronic-warfare|ETX]] |

## Fire Missions

Each [[support-assets|SA]]/Mortar starts with a set number of Fire Missions (per [[glossary|Order of Battle (ORBAT)]]). At 0 Fire Missions, the [[support-assets|SA]]/[[force-elements|FE]] **cannot Indirect Fire**.
