---
title: Units
type: concept
tags: [units, force-elements, counters, stats, targeting]
sources: [Rulebook - FINAL.pdf]
created: 2026-04-06
updated: 2026-04-06
---

# Units

Every military unit on the map in BC:B is a **[[force-elements|Force Element (FE)]]** — a counter representing a platoon or section of soldiers, vehicles, or both. This page explains the universal mechanics that apply to all units regardless of faction. For faction-specific details, see:

- **[[nato-units|NATO Unit Catalog]]** — all NATO unit types with stats, real-world equipment, and gameplay analysis
- **[[russia-units|Russia Unit Catalog]]** — all Russian unit types with stats, real-world equipment, and the critical NATO/Russia asymmetries

---

## Reading a Counter

Every [[force-elements|Force Element (FE)]] counter contains the following information:

```
┌─────────────────────────────┐
│  [Apers] [Atk] [Assault]   │  ← Firepower and Assault values (top)
│                             │
│       [NATO Symbol]         │  ← Unit type icon (center)
│                             │
│  [Res]          [TQ]        │  ← Resilience (left) and Troop Quality (right)
│  [FE Type]   [FE ID]        │  ← Type icon + unit identifier (bottom)
└─────────────────────────────┘
```

| Element | Location | What it means |
|---------|----------|---------------|
| **Anti-Personnel (Apers)** | Green box, top-left | Firepower against infantry. The number = the column used on the Direct Fire Results Table. |
| **Anti-Tank (Atk)** | Purple or gold box, top-middle | Firepower against vehicles. Purple targets [[force-elements|Armoured Personnel Carriers (APCs)]]/[[force-elements|Infantry Fighting Vehicles (IFVs)]]. Gold targets everything including [[force-elements|Main Battle Tanks (MBTs)]]. |
| **Assault** | White box, top-right | Value used in [[assault|Assault]] ratio calculations (Attacker total ÷ Defender total). |
| **[[force-elements|Troop Quality (TQ)]]** | White number in black circle | Training, cohesion, will to fight. Determines [[glossary|Dice Roll Modifier (DRM)]] on fires, assaults, and [[morale#Rally Tests|Rally tests]]. |
| **Resilience** | White hexagon | How many Hits the unit can absorb before being Eliminated. |
| **[[force-elements|FE]] Type** | Shape + color at bottom | Foot (green diamond), Wheeled (grey circle), or Tracked (purple/gold square). |
| **[[force-elements|FE]] ID** | Text at bottom | Unit identifier, typically Platoon-Company-Battalion (e.g., "1-A-1"). |
| **NATO Symbol** | Icon at center | Identifies the unit type (infantry, mechanised, armour, recce, HQ, etc.). Also shows which Tracked FEs can carry [[stacking|Mounted]] infantry. |
| **[[glossary|Command & Control (C2)]] Rating** | Yellow circle (HQ only) | [[force-elements|Headquarters (HQ)]] command capability. |
| **[[force-elements|ISTAR]] star** | Red/blue star | Marks the unit as an [[force-elements|Intelligence, Surveillance, Target Acquisition & Reconnaissance (ISTAR)]] Asset for [[indirect-fire|Indirect Fire]] targeting. |

---

## Unit Types

Every [[force-elements|FE]] has a type that determines what can target it and where it can move:

| Type | Symbol | Represents | Targeted by | Terrain restriction |
|------|--------|------------|-------------|---------------------|
| **Foot (F)** | Green diamond | Infantry on foot | Anti-Personnel (Apers) only | Can enter Dense Wood freely |
| **Wheeled (W)** | Grey circle | Trucks, motorbikes | Any firepower value | Dense Wood = No-Go (except on Roads) |
| **Tracked (T)** | Purple square | [[force-elements|APCs]], [[force-elements|IFVs]] | Any Anti-Tank (Atk) | Dense Wood = No-Go (except on Roads) |
| **Tracked (T)** | Gold square | [[force-elements|Main Battle Tanks (MBTs)]] | Gold Anti-Tank (Atk) only, or [[atgm|Anti-Tank Guided Missiles (ATGMs)]] | Dense Wood = No-Go (except on Roads) |

> [!important]
> The colour of the FE Type icon on the **target** determines what firepower colour the **attacker** needs. A gold MBT can only be hit by gold Atk or ATGMs — this is one of the most important rules in the game.

---

## Unit Sizes

| Size | Abbreviation | Dots on counter | Typical Resilience | Real-world equivalent |
|------|-------------|-----------------|--------------------|-----------------------|
| **[[force-elements|Platoon (PL)]]** | PL | 3 dots | 3–4 | 25–30 soldiers or 3–4 vehicles |
| **[[force-elements|Section (SECT)]]** | SECT | 1 dot | 1–2 | 8–10 soldiers or 1–2 vehicles |

[[force-elements|Platoons (PLs)]] use **two physical counters** because they have higher Resilience:
- **Counter 1** front: full Resilience → flip to back: Resilience - 1
- **Counter 2** front: Resilience - 2 (with reduced [[force-elements|TQ]]) → flip to back: Resilience - 3

When a [[force-elements|PL]] loses over half its Resilience, its [[force-elements|TQ]] drops — this is already printed on the second counter.

---

## The Targeting Colour System

This is the core of the Direct Fire system. The colour of the **Atk box** on the firing unit must match or exceed the colour of the **FE Type** on the target:

| Attacker has... | Can target... |
|-----------------|---------------|
| Anti-Personnel (Apers) — green | Foot (green) and Wheeled (grey) |
| Anti-Tank (Atk) — purple | Wheeled (grey) and Tracked-purple (APCs/IFVs) |
| Anti-Tank (Atk) — gold | **Everything**: Wheeled, Tracked-purple, and Tracked-gold (MBTs) |
| [[atgm|Anti-Tank Guided Missile (ATGM)]] | Functions as gold Anti-Tank (Atk) regardless of the firing unit's printed stats |

**What this means in practice:**
- Infantry (Foot) **cannot** shoot at vehicles — they need ATGMs
- [[force-elements|APCs]]/[[force-elements|IFVs]] (purple Atk) can kill other APCs/IFVs but **not** MBTs
- Only MBTs (gold Atk) and ATGMs can kill MBTs
- This creates the critical [[russia|Russia]] problem: Russian MBTs have gold **armour** but only purple **guns** — they can't kill [[nato|NATO]] MBTs without [[atgm|Stabber ATGMs]]

---

## Troop Quality (TQ) and the DRM System

[[force-elements|Troop Quality (TQ)]] is the most important stat in the game. It provides a [[glossary|Dice Roll Modifier (DRM)]] on [[direct-fire|Direct Fire]], [[assault|Assaults]], and [[morale#Rally Tests|Rally tests]]:

| Troop Quality (TQ) | Dice Roll Modifier (DRM) | Typical units |
|-----|------|---------------|
| 6 | **+2** | [[nato|NATO]] [[force-elements|Platoons (PLs)]] at full strength |
| 5 | **+1** | NATO PLs at half Resilience |
| 4 | **0** | [[russia|Russian]] PLs at full strength |
| 3 | **-1** | Russian PLs at half Resilience |

The TQ difference between NATO (6) and Russia (4) means a **net 2-point swing** on every fire roll, every assault, every Rally test. Over the course of a game, this compounds massively.

**[[morale|Morale]] reduces TQ further:**
- [[morale|Suppressed]]: TQ - 1
- [[morale|Disrupted]]: TQ - 2

A Disrupted Russian PL has effective TQ 2 (DRM -2) — it will struggle to hit anything or pass Rally tests.

---

## Resilience and Elimination

Each Hit reduces Resilience by 1. When Resilience reaches 0, the unit is **Eliminated** (permanently removed from the game).

| Faction | Typical PL Resilience | Hits to Eliminate |
|---------|----------------------|-------------------|
| [[nato|NATO]] | 4 | 4 Hits |
| [[russia|Russia]] | 3 | 3 Hits |

This one-Hit difference is significant: NATO units survive 33% more punishment than their Russian equivalents.

**In [[morale|Standard/Advanced mode]]**, receiving at least 1 Hit also drops [[morale|Morale]] by one level (Good → Suppressed → Disrupted). A Disrupted unit that takes another Hit must pass an immediate Rally test or become **Broken** (= immediately Eliminated).

---

## Stacking

Units can combine into **[[stacking|Stacks]]** — a Tracked PL carrying infantry and/or a smaller vehicle section:

| Position in Stack | What | Rules |
|-------------------|------|-------|
| **Top** (visible) | Tracked [[force-elements|PL]] (must have APC/IFV icon) | Takes Actions normally |
| **Middle** (hidden) | [[stacking|Embedded]] [[force-elements|Section (SECT)]] | Takes same Actions as the Tracked PL, or Detaches |
| **Bottom** (hidden) | [[stacking|Mounted]] Foot [[force-elements|PL]] | Cannot take Actions except Move (to Dismount) or Assault |

The opponent **cannot see** what's inside a Stack — only the top counter is visible. This creates uncertainty about whether a vehicle is carrying infantry.

---

## Anti-Tank Guided Missiles (ATGMs)

[[atgm|ATGMs]] give any unit the ability to target gold-type (MBT) enemies. They function as **gold Anti-Tank (Atk)** regardless of the firing unit's printed stats.

| ATGM | Faction | Range | Notes |
|------|---------|-------|-------|
| **NLAW** | [[nato|NATO]] | 1,000m | Short range, infantry standard |
| **Javelin** | [[nato|NATO]] | 3,000m | Long range, fire-and-forget |
| **RPG** | [[russia|Russia]] | Short | Universal infantry issue |
| **Stabber** | [[russia|Russia]] | 3,000m | Only for Russian Tracked FEs |

ATGMs are **limited** — markers are double-sided (Full → Depleted → Removed). Once used, they're gone unless resupplied via [[replendem|REPLENDEM]].

> [!warning]
> Firing an ATGM counts as the unit's **entire** [[direct-fire|Direct Fire]] Action for the turn. A unit cannot fire its main weapon AND an ATGM in the same activation.

---

## Support Assets

[[support-assets|Support Assets (SAs)]] are off-map units that **cannot be targeted**:

| Support Asset | Role | Key mechanic |
|---------------|------|--------------|
| **Artillery** (155mm / 152mm) | [[indirect-fire|Indirect Fire]] | Requires [[force-elements|ISTAR]] [[line-of-sight|Line of Sight (LoS)]]; 500m Danger Close |
| **[[support-assets|First Person View drone (FPV)]]** | [[indirect-fire|Indirect Fire]] | No Danger Close; can [[indirect-fire#FPV Double-Tap|Double-Tap]]; 0 [[electronic-warfare|ETX]] in Fire Plan |
| **[[support-assets|Unmanned Aerial Support drone (UAS)]]** | Reconnaissance | On-map; sees 4 Grid Squares ignoring obstructions |

See [[drones]] for a detailed page on drone mechanics.

---

## Faction Differences at a Glance

| Attribute | [[nato|NATO]] | [[russia|Russia]] |
|-----------|------|--------|
| Troop Quality (TQ) | 6 (+2 DRM) | 4 (0 DRM) |
| Platoon (PL) Resilience | 4 | 3 |
| [[move-fire|Move-Fire]] penalty | -1 DRM | -2 DRM |
| MBT Anti-Tank (Atk) | **Gold** (kills everything) | **Purple** (can't kill NATO MBTs) |
| Number of units | Fewer | More |
| Artillery Fire Missions | Fewer | More |
| FPV Fire Missions | Fewer | More |
| [[electronic-warfare|EW]] Chit draw | 1 | 2 (keep 1) |
| Doctrine | [[mission-command|Mission Command]] (flexible) | [[red-doctrine|Red Doctrine]] (rigid) |

For complete faction details: **[[nato-units]]** | **[[russia-units]]**
