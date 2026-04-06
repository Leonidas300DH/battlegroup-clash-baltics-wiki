---
title: Fire Plans
type: concept
tags: [fire-plans, sync-matrix, indirect-fire, etx, planning]
sources: [Rulebook - FINAL.pdf]
created: 2026-04-05
updated: 2026-04-05
---

# Fire Plans (Standard/Advanced Mode)

A **Fire Plan** is a Grid Intersection reference written on the [[sync-matrix|Sync Matrix]] for each [[support-assets|Artillery Support Asset (SA)]], [[support-assets|First Person View drone (FPV)]] [[support-assets|SA]], and Mortar [[force-elements|Force Element (FE)]]. It defines a **pre-planned target area** for that turn — the four Grid Squares adjacent to the Grid Intersection.

## Purpose

Firing within the Fire Plan area generates **less [[electronic-warfare|Electronic Transmission (ETX)]]** than firing outside it. This represents the reduced radio/electronic transmissions needed when firing on pre-planned targets versus ad-hoc targets.

## ETX Costs (Standard/Advanced)

| Support Asset (SA)/Force Element (FE) Type | In Fire Plan area | Not in Fire Plan area |
|------------|------------------|----------------------|
| Mortar | 1 [[electronic-warfare|Electronic Transmission (ETX)]] | 3 [[electronic-warfare|ETX]] |
| Artillery | 1 [[electronic-warfare|ETX]] | 3 [[electronic-warfare|ETX]] |
| [[support-assets|First Person View drone (FPV)]] | 0 [[electronic-warfare|ETX]] | 3 [[electronic-warfare|ETX]] |

## Key Rules

- A Fire Plan is written for **each turn** on the Sync Matrix, even if the SA won't fire that turn
- The Fire Plan only defines **where** — not whether HE or [[indirect-fire#Smoke|Smoke]] will be used
- Having a Fire Plan for a turn does not require firing on that turn
- Fire Plans can be changed via [[orders#New Orders|New Orders]] (generates 1 [[electronic-warfare|ETX]], [[support-assets|SA]] receives Reorg)
- In Advanced mode, [[red-doctrine|Red Doctrine]] prevents Russia from changing Fire Plans or targeting outside the Fire Plan area

## Mortar Task Groups

Mortar [[force-elements|FEs]] are unique: they receive **both** manoeuvre [[orders|Orders]] and a Fire Plan, since they move on the map. Once in position, the Fire Plan determines [[electronic-warfare|ETX]] costs for their [[indirect-fire|Indirect Fires]].

> Example: Mortar [[task-groups|Task Group (TGp)]] 6 gets "Manoeuvre to Wood E378/N487" for Turns 1-2, then "Fire Plan GI E31/N50" for Turn 3 onward.

## Practical Tip

> [!tip]
> Plan your Fire Plans around where you **expect** the enemy to be, not where they currently are. A well-placed Fire Plan lets you fire for minimal [[electronic-warfare|ETX]]; firing outside it costs 3 [[electronic-warfare|ETX]] — a significant electronic signature.
