---
title: Drones
type: concept
tags: [drones, fpv, uas, istar, indirect-fire, electronic-warfare, modern-warfare]
sources: [Rulebook - FINAL.pdf, EWAdvSupp_Rules.pdf]
created: 2026-04-06
updated: 2026-04-06
---

# Drones

> "Drones, drones, everywhere: Particularly for line of sight, but also for fires, drones have a massive impact on the modern battlefield, and they are front and centre of the game."
> — James Buckley, BC:B Design Notes

Drones are one of the defining features of BC:B. They shape every aspect of gameplay: **no position is truly hidden** (the [[support-assets|Unmanned Aerial Support drone (UAS)]] sees through all obstructions), **no target is out of reach** (the [[support-assets|First Person View drone (FPV)]] has unlimited range), and **concealment mechanics don't exist** because drone and satellite coverage is assumed to be ubiquitous.

The game features two types of drone, each represented as a [[support-assets|Support Asset (SA)]]:

---

## UAS — Unmanned Aerial Support Drone

The UAS is a **reconnaissance drone** that provides [[force-elements|Intelligence, Surveillance, Target Acquisition & Reconnaissance (ISTAR)]] — the ability to see enemy positions for [[indirect-fire|Indirect Fire]] targeting.

### How it works

| Attribute | Detail |
|-----------|--------|
| Placement | On the map, at a **Grid Intersection** |
| Movement | Can move to **any** Grid Intersection on the map (unlimited range) |
| [[line-of-sight|Line of Sight (LoS)]] | The **4 Grid Squares** adjacent to its position |
| Obstructions | **Ignored** — the UAS sees everything within its Grid Squares |
| Combat | **Cannot fire** — purely an observation asset |
| Targetable | **No** — it is a [[support-assets|Support Asset (SA)]] and cannot be directly attacked |
| Starting position | Off-map; placed at any Grid Intersection on its first Move Action |

### Why it matters

The UAS is the primary way to direct [[indirect-fire|Indirect Fire]] (Artillery and [[support-assets|FPV]]) onto targets. Without [[force-elements|ISTAR]] [[line-of-sight|LoS]], Artillery and FPV **cannot fire at all**. The UAS is the easiest way to provide this because:

- It sees **4 entire Grid Squares** at once (4,000m × 4,000m area)
- It **ignores all Obstructions** — Dense Woods, Urban terrain, hills don't block its view
- It can be **repositioned anywhere** on the map in a single Action
- It doesn't need to be near the front lines

The only alternatives for [[force-elements|ISTAR]] are ground-based assets: [[force-elements|Reconnaissance (Recce)]] [[force-elements|Sections (SECTs)]], Fire Support Team (FST) SECTs, and [[force-elements|Headquarters (HQ)]] SECTs — all of which have limited range (3,000–4,000m) and are blocked by terrain.

### Tactical implications

- **Positioning the UAS is one of the most important decisions each turn.** Its 4-Grid-Square coverage determines where your artillery and FPV can strike.
- **Moving the UAS generates no [[electronic-warfare|Electronic Transmission (ETX)]]** — it's a silent repositioning.
- **The UAS reveals your intent.** Your opponent sees where you place it and can deduce where you plan to fire. In the [[rulebook-final|example of play]], NATO delays placing its UAS to avoid revealing its fire plan to Russia.
- **Under the [[advanced-ew|Advanced Electronic Warfare (EW)]] rules**, the enemy can **jam your UAS** via Drone Jamming, eliminating your UAS [[line-of-sight|LoS]] for the entire turn. This can be devastating — without the UAS, you may have no way to direct Indirect Fire at all.

---

## FPV — First Person View Drone

The FPV is an **attack drone** — a one-way munition that flies to a target and detonates. In BC:B, "FPV" is a catch-all for any drone with offensive capability.

### How it works

| Attribute | Detail |
|-----------|--------|
| Placement | **Off-map** at all times |
| Range | **Unlimited** |
| Targeting | Requires [[force-elements|ISTAR]] [[line-of-sight|LoS]] to the target (typically from the UAS) |
| Danger Close | **None** — can fire right next to friendly [[force-elements|Force Elements (FEs)]] |
| Automatic Suppression | Dismounted Foot [[force-elements|FEs]] within 250m of the target only |
| [[indirect-fire#FPV Double-Tap|Double-Tap]] | Can fire **twice** at the same target in one Activation (uses 2 Fire Missions, but only 1 [[electronic-warfare|ETX]]) |
| Fire Missions | Limited (set by scenario [[glossary|Order of Battle (ORBAT)]]) |
| Targetable | **No** — cannot be attacked |

### FPV vs Artillery

| Aspect | FPV | Artillery (155mm / 152mm) |
|--------|-----|--------------------------|
| Range | Unlimited | Unlimited |
| Danger Close | **None** | 500m (250m for Recce) |
| Automatic Suppression | Foot FEs within 250m | **All FE types** within 250m |
| Double-Tap | **Yes** | No |
| [[electronic-warfare|ETX]] generated (in [[fire-plans|Fire Plan]]) | **0** | 1 |
| ETX generated (outside Fire Plan) | 3 | 3 |
| Smoke capability | Yes | Yes |

The FPV's key advantages over Artillery are **no Danger Close** (can fire right next to friendlies), **zero ETX in the Fire Plan** (electronically silent), and the **Double-Tap** (two strikes for the price of one Activation). Its disadvantage is weaker Automatic Suppression (only Foot FEs, not vehicles).

### Tactical implications

- **Double-Tap is extremely powerful.** Two fire rolls against the same target, using one Activation and generating only one [[electronic-warfare|ETX]] charge. Use it against priority targets.
- **Zero ETX in the Fire Plan** means FPV strikes don't give the enemy intelligence. This makes the FPV the ideal "silent" fire support.
- **No Danger Close** means the FPV can support infantry in close contact with the enemy — something Artillery cannot do safely.
- **FPV is vulnerable to EW.** Under [[advanced-ew|Advanced EW rules]], both FPV jamming (via the [[electronic-warfare|EW]] Chit "FPV Jamming" in the base game) and Drone Jamming (in the supplement) can reduce or nullify FPV effectiveness.

---

## Drones and the "No Concealment" Design

The designer made a deliberate choice to remove all concealment mechanics from BC:B:

> "No concealment: The ubiquity of drone and satellite coverage means very little on the modern battlefield remains concealed; given this, and to minimise the rules overhead, there are no concealment mechanics."

This means:
- **All [[force-elements|Force Element (FE)]] positions are visible** to both players at all times (except [[force-elements|FEs]] hidden inside [[stacking|Stacks]])
- There is **no Fog of War for unit positions** — you can see where all enemy counters are
- The only hidden information is: what's inside a Stack, each side's [[sync-matrix|Sync Matrix]] / Orders, the Secondary Objective roll, and ETX marker values

This is a direct consequence of drone proliferation on the modern battlefield, drawn from the experience of the Ukraine conflict.

---

## Drones and Electronic Warfare

Drones are deeply connected to the [[electronic-warfare|Electronic Warfare (EW)]] system. Key interactions:

### Base game (EW Chits)

| EW Chit | Effect on drones |
|---------|-----------------|
| **4A — FPV Signal Boost** | Your FPV gains **1 extra Fire Mission** (Immediate) |
| **4B — FPV Jamming** | Opponent's FPV attack: roll 1D6, apply that number as a **negative [[glossary|Dice Roll Modifier (DRM)]]** |

### [[advanced-ew|Advanced EW Supplement]] (Drone Jamming)

Under the Advanced EW rules, **Drone Jamming** is one of the 4 [[electronic-warfare|Electronic Warfare Points (EWP)]] types. A successful Drone Jamming attack **removes the target's UAS [[line-of-sight|LoS]] for the entire turn**. This means:
- The jammed side **cannot use its UAS for ISTAR**
- Without alternative ISTAR assets (Recce, FST, HQ), it **cannot fire Artillery or FPV at all**
- Drone Jamming **can self-jam** — the attacker risks losing their own UAS LoS if they don't allocate enough defensive EWP

This makes the Drone Jamming attack/defend allocation one of the most critical decisions in the EW Plan.

---

## Russia vs NATO: Drone Asymmetry

| Aspect | [[nato|NATO]] | [[russia|Russia]] |
|--------|------|--------|
| FPV Fire Missions (Scenario 1) | 4 | **6** (+2 bonus) |
| UAS | 1 | 1 |
| EW Chit draw (Advanced) | 1 | **2** (keep 1) — better chance of getting FPV-related Chits |
| [[advanced-ew|EWP]] allocation (Advanced) | Lower total | **Higher total** — can invest more in Drone Jamming |

Russia's advantage in drone warfare reflects the design assumption that *"the Russians have greater numbers and are better at drone and electronic warfare."* Russia gets more FPV ammunition and stronger EW capabilities to jam NATO's drones, compensating for their lower [[force-elements|Troop Quality (TQ)]] and [[combat-effectiveness|Resilience]].
