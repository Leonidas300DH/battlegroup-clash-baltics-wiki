---
title: Force Elements
type: concept
tags: [components, units, counters, stats]
sources: [Rulebook - FINAL.pdf]
created: 2026-04-05
updated: 2026-04-05
---

# Force Elements (FEs)

A **Force Element** is a military unit in the game. Its position on the map is represented by a counter. Grey counters = [[nato|NATO]], red counters = [[russia|Russia]].

## FE Stats (on the counter)

| Stat | Location | Description |
|------|----------|-------------|
| **Resilience** | White hexagon, bottom-left | Hits the FE can absorb before Elimination (1-4) |
| **Troop Quality (TQ)** | White number in black circle | Training, cohesion, will to fight (3-6). [[glossary|Dice Roll Modifier (DRM)]] for fires and assaults |
| **[[glossary|Command & Control (C2)]] Rating** | Black number in yellow circle | C2 rating ([[force-elements|HQ]] counters only) |
| **[[force-elements|Intelligence, Surveillance, Target Acquisition & Reconnaissance (ISTAR)]] Asset** | Red/blue star | Marks FE as an ISTAR Asset for [[line-of-sight|Line of Sight (LoS)]] |
| **Anti-Personnel (Apers) Value** | Green box, top-left | Anti-Personnel Firepower Value — targets Foot [[force-elements|FEs]] |
| **Anti-Tank (Atk) Value** | Purple or gold box, top-middle | Anti-Tank Firepower Value — targets vehicles |
| **Assault Value** | White box, top-right | Value used in [[assault|Assault]] ratio calculations |
| **Force Element (FE) Size** | Dots | 3 dots = Platoon (PL), 1 dot = Section (SECT) |
| **[[force-elements|FE]] Type** | Shape + color | Foot (F/diamond), Wheeled (W/circle), Tracked (T/square) |
| **[[force-elements|FE]] ID** | Text | Identifies the unit, typically Platoon-Company-Battalion |
| **NATO symbol** | Icon | Unit identification; also shows which Tracked [[force-elements|FEs]] can carry Mounted Foot |

## FE Types

| Type | Symbol | Represents | Background color meaning |
|------|--------|------------|-------------------------|
| **Foot (F)** | Green diamond | Infantry | Green = targetable by Apers |
| **Wheeled (W)** | Grey circle | Trucks, motorbikes | Grey = targetable by any Firepower |
| **Tracked (T)** | Purple square | [[force-elements|Armoured Personnel Carriers (APCs)]], [[force-elements|Infantry Fighting Vehicles (IFVs)]] | Purple = targetable by any Atk |
| **Tracked (T)** | Gold square | [[force-elements|Main Battle Tanks (MBTs)]] | Gold = targetable only by gold Atk or [[atgm|Anti-Tank Guided Missiles (ATGMs)]] |

## FE Sizes

| Size | Abbreviation | Dots | Typical Resilience | Real-world equivalent |
|------|-------------|------|-------------------|----------------------|
| **Platoon** | PL | 3 | 3-4 (NATO: 4, Russia: 3) | ~3 sections, 25-30 soldiers or 3-4 vehicles |
| **Section** | SECT | 1 | 1-2 | ~8-10 soldiers or 1-2 vehicles |

> [!note]
> All Foot PLs share an ID with a Tracked PL. They are separate FEs for game purposes but represent the same armoured infantry platoon (infantry component + vehicle component).

## Special FE Types

### HQs
Each side has two [[force-elements|Headquarters (HQ)]] FE counters: **Main** and **Tac (Tactical)**. HQs have a **[[glossary|C2]] Rating** that provides:
- [[glossary|DRM]] for [[initiative|Initiative]] tests
- [[glossary|DRM]] for [[assault|Assaults]]
- [[glossary|DRM]] for [[morale#Rally Tests|Rally tests]] (if within 250m)
- Enables [[command-activation|Command Activations]] (Standard/Advanced)

### A1 Echelons
Logistical units (trucks) used in **Advanced mode only**. Each side gets 1-2 A1 Echelon Task Groups containing 1-3 FEs. Russian equivalent is called "Sect" (not to be confused with SECT size).
- Can take Move, Hold, or [[replendem|REPLENDEM]] Actions
- Transport Ammo and [[atgm|ATGMs]] for resupply
- Targetable like any other FE — if Eliminated, all carried supplies are lost

### ISTAR Assets
FEs marked with a star (★) are [[force-elements|ISTAR]] Assets. These provide [[line-of-sight|LoS]] for [[indirect-fire|Indirect Fire]]. ISTAR Assets include:
- **Recce** (Reconnaissance) [[force-elements|SECTs]] — 4,000m [[line-of-sight|LoS]] range (vs standard 3,000m)
- **FST** (Fire Support Team) [[force-elements|SECTs]]
- **[[force-elements|HQ]]** [[force-elements|SECTs]]
- **[[support-assets|Unmanned Aerial Support drone (UAS)]]** (technically a [[support-assets|Support Asset]], not an FE)

> [!tip]
> ISTAR can be provided by [[force-elements|SECTs]] that are [[stacking|Embedded]] in a Stack — the Embedded [[force-elements|SECT]] is considered to occupy the same position as the Tracked FE.

## Hits and Elimination

Each Hit reduces Resilience by 1. [[force-elements|PL]]-sized FEs use two counters (front: 4/3 Resilience, back: 3/2; second counter: 2/1 Resilience). When Resilience drops past half, [[force-elements|TQ]] is reduced (already shown on the counter).

At Resilience 0 → **Eliminated** (removed from game permanently).

See [[combat-effectiveness]] for full details.

## Counter Flipping

FE counters are double-sided. The front shows full Resilience, the back shows Resilience minus 1 (with potentially reduced TQ). PLs need a second counter for Resilience values 2 and 1.
