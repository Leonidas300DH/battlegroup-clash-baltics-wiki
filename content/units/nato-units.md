---
title: NATO Unit Catalog
type: unit
tags: [nato, units, counters, orbat, stats]
sources: [Rulebook - FINAL.pdf, NATO SCENARIO 1.pdf, counter-scans]
created: 2026-04-05
updated: 2026-04-05
---

# NATO Unit Catalog

All [[nato|NATO]] [[force-elements|Force Element (FE)]] and [[support-assets|Support Asset (SA)]] types. NATO counters are **grey**. NATO generally has higher [[morale|Troop Quality (TQ)]] and [[combat-effectiveness|Resilience]] than [[russia|Russia]], but fewer units.

---

## Platoon-Sized Force Elements ([[force-elements|Platoon (PL)]] — 3 dots)

### Infantry Platoon (Foot Platoon (PL))

The backbone of NATO ground forces. Required for [[assault|Assaults]]. Cannot target vehicles with [[direct-fire|Direct Fire]] — needs [[atgm|Anti-Tank Guided Missiles (ATGMs)]] (NLAW or Javelin) to engage armour.

| Stat | Full | Half Resilience |
|------|------|----------------|
| **[[glossary\|Anti-Personnel (Apers)]]** | 3 (green) | 3 |
| **[[glossary\|Anti-Tank (Atk)]]** | — | — |
| **Assault** | 3 | 3 |
| **[[force-elements\|Troop Quality (TQ)]]** | 6 | 5 |
| **Resilience** | 4 → 3 | 2 → 1 |

| Attribute | Value |
|-----------|-------|
| [[force-elements\|Force Element (FE)]] Type | **F** (green diamond — Foot) |
| NATO symbol | Infantry (☒ crossed rifles) |
| Range (Anti-Personnel (Apers)) | 2,000m |
| Size | [[force-elements\|Platoon (PL)]] (3 dots) |
| Can target | Foot (green), Wheeled (grey) |
| Targeted by | Anti-Personnel (Apers) (green) only |

**Key traits:**
- Can enter Dense Wood freely (vehicles cannot)
- Can [[dig-shell-scrape|Dig Shell Scrapes]] for -1/-2 [[glossary|Dice Roll Modifier (DRM)]] protection
- Benefits from [[line-of-sight#Cover|Cover]] in non-Open terrain
- Gets +2 [[glossary|Dice Roll Modifier (DRM)]] [[line-of-sight#Vehicle Vulnerability|Vehicle Vulnerability]] bonus when firing at vehicles in Urban/Dense Wood
- Shares an ID with a Tracked [[force-elements|Platoon (PL)]] (same armoured infantry platoon — vehicle and dismounted components)
- When [[stacking|Mounted]], rides inside the paired [[force-elements|Infantry Fighting Vehicle (IFV)]]/[[force-elements|Armoured Personnel Carrier (APC)]]

**Scenario 1 examples:** 1-A-1 F, 2-A-1 F, 1-B-1 F, 2-B-1 F, 3-A-1 F (all start at Resilience 3 in Scenario 1)

---

### [[force-elements|Infantry Fighting Vehicle (IFV)]]/[[force-elements|Armoured Personnel Carrier (APC)]] Tracked Platoon (Mechanised Infantry)

[[force-elements|IFV]]/[[force-elements|APC]] platoon. Carries a [[stacking|Mounted]] Foot [[force-elements|Platoon (PL)]]. Provides anti-vehicle firepower that infantry lacks.

| Stat | Full | Half Resilience |
|------|------|----------------|
| **[[glossary\|Anti-Personnel (Apers)]]** | 2 (green) | 2 |
| **[[glossary\|Anti-Tank (Atk)]]** | 1 (purple) | 1 |
| **Assault** | 1 | 1 |
| **[[force-elements\|Troop Quality (TQ)]]** | 6 | 5 |
| **Resilience** | 4 → 3 | 2 → 1 |

| Attribute | Value |
|-----------|-------|
| [[force-elements\|Force Element (FE)]] Type | **T** (purple square — Tracked) |
| NATO symbol | Mechanised Infantry (☒ with tracks) |
| Range (Anti-Personnel (Apers)) | 2,000m |
| Range (Anti-Tank (Atk)) | 2,000m |
| Size | [[force-elements\|Platoon (PL)]] (3 dots) |
| Can target | Foot (green), Wheeled (grey), Tracked-purple ([[force-elements|APCs]]/[[force-elements|IFVs]]) |
| Targeted by | Any Anti-Tank (Atk) (purple or gold) |
| Can carry | 1× Mounted Foot [[force-elements\|Platoon (PL)]] + 1× Embedded [[force-elements\|Section (SECT)]] |

**Key traits:**
- Has the [[force-elements|APC]]/[[force-elements|IFV]] NATO icon — can carry [[stacking|Mounted]] Foot [[force-elements|Platoons (PLs)]] and [[stacking|Embedded]] [[force-elements|Sections (SECTs)]]
- Purple Anti-Tank (Atk) means it can engage other [[force-elements|APCs]]/[[force-elements|IFVs]] but **not** [[force-elements|Main Battle Tanks (MBTs)]] (gold type)
- Dense Wood is **No-Go** except on Roads
- [[move-fire|Move-Fire]] penalty: **-1 [[glossary|Dice Roll Modifier (DRM)]]** (better than Russia's -2)
- Paired with a Foot [[force-elements|Platoon (PL)]] (same ID) representing the mounted infantry

**Scenario 1 example:** 3-A-1 T (the only NATO Tracked [[force-elements|Platoon (PL)]] in Scenario 1)

---

### Main Battle Tank Platoon ([[force-elements|MBT]])

The most powerful ground unit. Gold Atk allows it to engage any vehicle type, including enemy [[force-elements|MBTs]]. Gold armour type means only other [[force-elements|MBTs]] (with gold Atk) or [[atgm|ATGMs]] can target it.

| Stat | Full | Half Resilience |
|------|------|----------------|
| **[[glossary\|Anti-Personnel (Apers)]]** | 2 (green) | 2 |
| **[[glossary\|Anti-Tank (Atk)]]** | 4 (gold) | 4 |
| **Assault** | 1 | 1 |
| **[[force-elements\|Troop Quality (TQ)]]** | 6 | 5 |
| **Resilience** | 4 → 3 | 2 → 1 |

| Attribute | Value |
|-----------|-------|
| [[force-elements\|Force Element (FE)]] Type | **T** (gold square — Tracked, [[force-elements\|Main Battle Tank (MBT)]] armour) |
| NATO symbol | Armour (rectangle with diagonal line) |
| Range (Anti-Personnel (Apers)) | 2,000m |
| Range (Anti-Tank (Atk)) | 3,000m (small '3' on counter) |
| Size | [[force-elements\|Platoon (PL)]] (3 dots) |
| Can target | **Everything** — Foot, Wheeled, Tracked (purple and gold) |
| Targeted by | Gold Anti-Tank (Atk) only (or [[atgm\|ATGMs]]) |

> [!note] Design note
> Gold [[force-elements|Force Element (FE)]] Type represents a main battle tank with reactive armour. In the game, all [[force-elements|Main Battle Tanks (MBTs)]] are assumed to have this armour type.

**Key traits:**
- **King of the battlefield** — can target any [[force-elements|Force Element (FE)]] type and is very hard to kill
- Only NATO [[force-elements|MBTs]] and [[atgm|ATGMs]] can engage gold-type enemies
- 3,000m Anti-Tank (Atk) range outranges most other units (standard is 2,000m)
- Dense Wood is **No-Go** except on Roads
- Does **not** carry Mounted Foot [[force-elements|Platoons (PLs)]] (no [[force-elements|Armoured Personnel Carrier (APC)]] icon) — pure armour
- Not paired with a Foot [[force-elements|Platoon (PL)]] (standalone armour platoon)

**Identified IDs:** 1-A-2 (referenced in rulebook examples for larger scenarios)

---

## Section-Sized Force Elements ([[force-elements|Section (SECT)]] — 1 dot)

### [[force-elements|Headquarters (HQ)]] Section (Main [[force-elements|HQ]] / Tac [[force-elements|HQ]])

Command elements. Each side has one **Main [[force-elements|HQ]]** and one **Tac [[force-elements|HQ]]**. The [[glossary|Command & Control (C2)]] Rating is critical for [[initiative|Initiative]], [[assault|Assaults]], [[morale#Rally Tests|Rally tests]], and [[command-activation|Command Activations]].

| Stat | Value |
|------|-------|
| **[[glossary\|Command & Control (C2)]] Rating** | 3 (yellow circle) |
| **[[glossary\|Anti-Personnel (Apers)]]** | 2 (green) |
| **[[glossary\|Anti-Tank (Atk)]]** | 2 (purple) |
| **Assault** | 1 |
| **[[force-elements\|Troop Quality (TQ)]]** | 6 |
| **Resilience** | 1 |

| Attribute | Value |
|-----------|-------|
| [[force-elements\|Force Element (FE)]] Type | T (purple square) |
| NATO symbol | [[force-elements\|Headquarters (HQ)]] flag |
| Size | [[force-elements\|Section (SECT)]] (1 dot) |
| [[force-elements\|Intelligence, Surveillance, Target Acquisition & Reconnaissance (ISTAR)]] | **Yes** (★) |

**Main [[force-elements|Headquarters (HQ)]] vs Tac [[force-elements|HQ]]:**

| | Main [[force-elements\|Headquarters (HQ)]] | Tac [[force-elements\|HQ]] |
|-|---------|--------|
| [[command-activation\|Command Activation]] range | **Any** Task Group on map | Task Groups with [[force-elements\|Force Element (FE)]] **within 1,000m** |
| Typical use | Strategic flexibility | Close support to front-line [[task-groups\|TGps]] |

**Key traits:**
- **[[force-elements|Intelligence, Surveillance, Target Acquisition & Reconnaissance (ISTAR)]] Asset** — provides [[line-of-sight|Line of Sight (LoS)]] for [[indirect-fire|Indirect Fire]]
- [[glossary|Command & Control (C2)]] Rating as [[glossary|Dice Roll Modifier (DRM)]]: +3 for Initiative rolls, Assault rolls, and Rally tests (if within 250m)
- Can [[stacking|Embed]] in a Tracked [[force-elements|Platoon (PL)]] for protection (recommended — Resilience 1 is fragile)
- Embedded [[force-elements|HQ]] provides [[glossary|C2]] [[glossary|Dice Roll Modifier (DRM)]] to Assaults involving its Stack
- Very vulnerable if caught alone (Resilience 1 = one Hit and it's Eliminated)

**Scenario 1:** Tac/[[force-elements|Headquarters (HQ)]] 1 Embedded in 3-A-1 T [[force-elements|Platoon (PL)]]

---

### Reconnaissance Section (Recce [[force-elements|Section (SECT)]])

The eyes of the force. Extended [[line-of-sight|Line of Sight (LoS)]] range and special [[force-elements|ISTAR]] abilities make Recce invaluable for calling in [[indirect-fire|Indirect Fire]].

| Stat | Full | Half Resilience |
|------|------|----------------|
| **[[glossary\|Anti-Personnel (Apers)]]** | 2 (green) |  2 |
| **[[glossary\|Anti-Tank (Atk)]]** | 2 (purple) | 2 |
| **Assault** | 1 | 1 |
| **[[force-elements\|Troop Quality (TQ)]]** | 6 | 5 |
| **Resilience** | 2 | 1 |

| Attribute | Value |
|-----------|-------|
| [[force-elements\|Force Element (FE)]] Type | T (purple square) |
| NATO symbol | Reconnaissance (diagonal slash) |
| Size | [[force-elements\|Section (SECT)]] (1 dot) |
| [[force-elements\|Intelligence, Surveillance, Target Acquisition & Reconnaissance (ISTAR)]] | **Yes** (★) |
| [[line-of-sight\|Line of Sight (LoS)]] range | **4,000m** (vs standard 3,000m) |
| [[force-elements\|ISTAR]] exception | 500m in Dense Wood/Urban (doesn't need [[line-of-sight\|LoS]] back) |
| Danger Close (Artillery) | **250m** (vs standard 500m for other [[force-elements\|Force Elements (FEs)]]) |

**Key traits:**
- 4,000m [[line-of-sight|LoS]] — sees further than anything except [[support-assets|Unmanned Aerial Support drone (UAS)]]
- Can call Indirect Fire on targets in Urban/Dense Wood from 500m away, without the target having [[line-of-sight|LoS]] back to the Recce
- Reduced Artillery Danger Close (250m instead of 500m) — can direct fire closer to itself
- Can [[stacking|Embed]] in a Tracked [[force-elements|Platoon (PL)]]
- Fragile (Resilience 2) — use for observation, not combat

---

### Fire Support Team Section (FST [[force-elements|Section (SECT)]])

Forward observation unit providing [[force-elements|Intelligence, Surveillance, Target Acquisition & Reconnaissance (ISTAR)]] for Indirect Fire targeting.

| Stat | Value |
|------|-------|
| **[[force-elements\|Troop Quality (TQ)]]** | ~5-6 |
| **Resilience** | 1 |

| Attribute | Value |
|-----------|-------|
| Size | [[force-elements\|Section (SECT)]] (1 dot) |
| [[force-elements\|Intelligence, Surveillance, Target Acquisition & Reconnaissance (ISTAR)]] | **Yes** (★) |

**Key traits:**
- [[force-elements|ISTAR]] Asset — provides [[line-of-sight|Line of Sight (LoS)]] for Indirect Fire
- Minimal combat capability
- Can Embed in a Tracked [[force-elements|Platoon (PL)]] for protection
- Very fragile (Resilience 1)

---

### A1 Echelon Section (Logistics — Advanced Mode)

Supply trucks used for [[replendem|REPLENDEM]] (resupply) in Advanced mode.

| Stat | Value |
|------|-------|
| **[[glossary\|Anti-Personnel (Apers)]]** | — |
| **[[glossary\|Anti-Tank (Atk)]]** | — |
| **Assault** | — |
| **[[force-elements\|Troop Quality (TQ)]]** | 5 |
| **Resilience** | 1 |

| Attribute | Value |
|-----------|-------|
| [[force-elements\|Force Element (FE)]] Type | **W** (grey circle — Wheeled) |
| NATO symbol | Supply/Logistics |
| Size | [[force-elements\|Section (SECT)]] (1 dot) |

**Key traits:**
- **Cannot fire** — not a combat unit (cannot even fire [[atgm|ATGMs]] it carries)
- Carries [[ammo|Ammo]] and [[atgm|ATGMs]] for resupply via [[replendem|REPLENDEM]] Action
- If Eliminated, all carried supplies are **lost**
- Wheeled: affected by Dense Wood (No-Go) and terrain penalties
- 1-3 A1 Echelon [[force-elements|Force Elements (FEs)]] per Task Group in Advanced mode [[glossary|Order of Battle (ORBAT)]]s

---

## Mortar Force Element

### Mortar Platoon (Mor)

On-map Indirect Fire unit. Always has its own [[task-groups|Task Group (TGp)]]. Receives both manoeuvre [[orders|Orders]] and [[fire-plans|Fire Plans]] on the [[sync-matrix|Sync Matrix]].

| Attribute | Value |
|-----------|-------|
| Fire type | Mortar ([[indirect-fire|Indirect Fire]]) |
| Max range | 8,000m |
| Danger Close | 250m |
| Auto Suppression | Dismounted Foot [[force-elements\|Force Elements (FEs)]] within 250m |
| [[indirect-fire\|Fire Missions (FM)]] | Set by scenario [[glossary\|Order of Battle (ORBAT)]] (typically 5) |

**Key traits:**
- **On the map** — must be positioned, can be targeted
- Can fire using its **own [[line-of-sight|Line of Sight (LoS)]]** or an **[[force-elements|ISTAR]] Asset's** [[line-of-sight|LoS]]
- Can fire [[indirect-fire#Smoke|Smoke]]
- Once in position, is given a Fire Plan for ETX-efficient Indirect Fire
- Has its own [[task-groups|TGp]] — receives both Orders (for movement) and Fire Plans (for firing)

**Scenario 1:** Mor-1 (TGp 4), 5 [[indirect-fire|Fire Missions (FM)]], starts at GS E202/N235

---

## Support Assets (off-map, cannot be targeted)

### 155mm Artillery [[support-assets|Support Asset (SA)]]

| Attribute | Value |
|-----------|-------|
| Range | **Unlimited** |
| Danger Close | 500m (250m for friendly Recce) |
| Auto Suppression | **All [[force-elements\|Force Element (FE)]] types** within 250m |
| [[force-elements\|Intelligence, Surveillance, Target Acquisition & Reconnaissance (ISTAR)]] required | **Always** |
| [[indirect-fire\|Fire Missions (FM)]] | Set by [[glossary\|Order of Battle (ORBAT)]] |

**Note:** NATO does **not** have Artillery in Scenario 1 (deployed elsewhere per briefing).

### [[support-assets|First Person View drone (FPV)]] Drone [[support-assets|Support Asset (SA)]]

| Attribute | Value |
|-----------|-------|
| Range | **Unlimited** |
| Danger Close | **None** |
| Auto Suppression | Dismounted Foot [[force-elements\|Force Elements (FEs)]] within 250m |
| [[force-elements\|Intelligence, Surveillance, Target Acquisition & Reconnaissance (ISTAR)]] required | **Always** |
| [[indirect-fire#FPV Double-Tap\|Double-Tap]] | Can fire twice at same target |
| [[indirect-fire\|Fire Missions (FM)]] | Set by [[glossary\|Order of Battle (ORBAT)]] |

**Scenario 1:** [[support-assets|First Person View drone (FPV)]] A, 4 [[indirect-fire|Fire Missions (FM)]]

### [[support-assets|Unmanned Aerial Support drone (UAS)]] Drone [[support-assets|Support Asset (SA)]]

| Attribute | Value |
|-----------|-------|
| [[line-of-sight|Line of Sight (LoS)]] | 4 adjacent Grid Squares (ignores all Obstructions) |
| Movement | Any Grid Intersection on the map |
| Begins | Off-map (placed on first Move) |

**Scenario 1:** [[support-assets|Unmanned Aerial Support drone (UAS)]] A

---

## NATO [[atgm|Anti-Tank Guided Missiles (ATGMs)]]

| [[atgm\|Anti-Tank Guided Missile (ATGM)]] | Range | Font | Notes |
|------|-------|------|-------|
| **NLAW** | 1,000m | Blue | Short range, infantry standard |
| **Javelin** | 3,000m | Blue | Long range, devastating vs [[force-elements|Main Battle Tanks (MBTs)]] |

Both function as **gold Anti-Tank (Atk)** when fired (can target any vehicle type including [[force-elements|Main Battle Tanks (MBTs)]]). See [[atgm]] for full mechanics.
