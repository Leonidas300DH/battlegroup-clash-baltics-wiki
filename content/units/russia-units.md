---
title: Russia Unit Catalog
type: unit
tags: [russia, units, counters, orbat, stats]
sources: [Rulebook - FINAL.pdf, RUSSIA SCENARIO 1.pdf, counter-scans]
created: 2026-04-05
updated: 2026-04-05
---

# Russia Unit Catalog

All [[russia|Russian]] [[force-elements|Force Element (FE)]] and [[support-assets|Support Asset (SA)]] types. Russian counters are **red/salmon**. Russia generally has more units but lower [[morale|Troop Quality (TQ)]] and [[combat-effectiveness|Resilience]] than [[nato|NATO]].

---

## Platoon-Sized Force Elements ([[force-elements|PL]] — 3 dots)

### Infantry Platoon (Foot PL)

Russian infantry. Like NATO infantry, required for [[assault|Assaults]] and cannot target vehicles without [[atgm|Anti-Tank Guided Missiles (ATGMs)]] (RPG or Stabber).

| Stat | Full | Half Resilience |
|------|------|----------------|
| **Apers** | 3 (green) | 3 |
| **Atk** | — | — |
| **Assault** | 3 | 3 |
| **TQ** | 4 | 3 |
| **Resilience** | 3 → 2 | 1 |

| Attribute | Value |
|-----------|-------|
| FE Type | **F** (green diamond — Foot) |
| NATO symbol | Infantry (☒ crossed rifles) |
| Range (Apers) | 2,000m |
| Size | PL (3 dots) |
| Can target | Foot (green), Wheeled (grey) |
| Targeted by | Apers (green) only |

**vs NATO Foot PL:**
- [[force-elements|Troop Quality (TQ)]] 4 vs NATO 6 — significantly worse firing and Rally [[glossary|Dice Roll Modifiers (DRMs)]]
- Resilience 3 vs NATO 4 — Eliminated after 3 Hits instead of 4
- Same Firepower and Assault values

**Key traits:**
- Same terrain advantages as NATO Foot (Dense Wood access, Cover, Shell Scrapes, Vehicle Vulnerability bonus)
- Lower [[force-elements|TQ]] means worse [[glossary|DRMs]] on everything — fires, assaults, Rally tests
- Lower Resilience means one fewer Hit before Elimination
- Shares an ID with a Tracked PL (same mechanised infantry platoon)

**Scenario 1 examples:** 1-A-1 F, 2-A-1 F, 1-B-1 F, 2-B-1 F, 3-A-1 F, 3-B-1 F (all have RPG ATGMs)

---

### [[force-elements|Infantry Fighting Vehicle (IFV)]]/[[force-elements|Armoured Personnel Carrier (APC)]] Tracked Platoon (Mechanised Infantry)

Russian [[force-elements|IFV]]/[[force-elements|APC]] platoon. Carries a [[stacking|Mounted]] Foot [[force-elements|Platoon (PL)]].

| Stat | Full | Half Resilience |
|------|------|----------------|
| **Apers** | 2 (green) | 2 |
| **Atk** | 1 (purple) | 1 |
| **Assault** | 1 | 1 |
| **TQ** | 4 | 3 |
| **Resilience** | 3 → 2 | 1 |

| Attribute | Value |
|-----------|-------|
| FE Type | **T** (purple square — Tracked) |
| NATO symbol | Mechanised Infantry (☒ with tracks) |
| Range (Apers/Atk) | 2,000m |
| Size | PL (3 dots) |
| Can target | Foot, Wheeled, Tracked-purple (APCs/IFVs) |
| Targeted by | Any Atk (purple or gold) |
| Can carry | 1× Mounted Foot [[force-elements|PL]] + 1× Embedded [[force-elements|Section (SECT)]] |

**vs NATO [[force-elements|IFV]]/[[force-elements|APC]] [[force-elements|PL]]:**
- [[force-elements|TQ]] 4 vs NATO 6
- Resilience 3 vs NATO 4
- [[move-fire|Move-Fire]] penalty: **-2 [[glossary|DRM]]** (worse than NATO's -1)
- Same Firepower values

**Scenario 1 examples:** 1-A-1 T, 2-A-1 T, 1-B-1 T, 2-B-1 T, 3-A-1 T, 3-B-1 T (all have Stabber depleted ATGMs)

---

### Main Battle Tank Platoon ([[force-elements|MBT]])

Russian [[force-elements|MBT]] with reactive armour (gold type — hard to kill). However, its main gun has **purple Atk** (not gold) — it can destroy [[force-elements|APCs]]/[[force-elements|IFVs]] but **cannot penetrate NATO [[force-elements|MBT]] armour** with direct fire alone. Needs [[atgm|Stabber ATGMs]] to engage NATO [[force-elements|MBTs]].

| Stat | Full | Half Resilience |
|------|------|----------------|
| **Apers** | 2 (green) | 2 |
| **Atk** | 3 (purple) | 3 |
| **Assault** | 1 | 1 |
| **TQ** | 4 | 3 |
| **Resilience** | 3 → 2 | 1 |

| Attribute | Value |
|-----------|-------|
| FE Type | **T** (gold square — MBT armour) |
| NATO symbol | Armour (rectangle with diagonal line) |
| Range (Atk) | 2,000m |
| Size | PL (3 dots) |
| Can target | Foot, Wheeled, Tracked-purple — but **NOT** gold-type (NATO [[force-elements|MBTs]]) |
| Targeted by | Gold Atk only (or ATGMs) |

> [!warning] Critical asymmetry
> Russian [[force-elements|MBTs]] have **gold armour** (hard to kill — only NATO gold Atk or [[atgm|ATGMs]] can hit them) but only **purple Atk** (cannot penetrate NATO [[force-elements|MBT]] armour). This means:
> - Russian [[force-elements|MBTs]] are **immune** to NATO [[force-elements|IFV]]/[[force-elements|APC]] fire
> - Russian [[force-elements|MBTs]] **cannot** kill NATO [[force-elements|MBTs]] with their main gun
> - Stabber [[atgm|ATGMs]] are **essential** for engaging NATO [[force-elements|MBTs]]
> - NATO [[force-elements|MBTs]] with gold Atk 4 are the primary counter to Russian [[force-elements|MBTs]]

**Key traits:**
- Does not carry Mounted Foot PLs (no APC icon) — pure armour
- Standalone platoon (no paired Foot PL)
- Atk 3 on the purple column is still powerful against non-MBT targets
- In larger scenario ORBATs (not Scenario 1 starter)

**Identified IDs:** 1-A-2 (from rulebook ORBAT examples)

---

## Section-Sized Force Elements ([[force-elements|SECT]] — 1 dot)

### [[force-elements|Headquarters (HQ)]] Section (Main [[force-elements|HQ]] / Tac [[force-elements|HQ]])

Russian command elements. Same [[glossary|Command & Control (C2)]] Rating mechanics as NATO.

| Stat | Value |
|------|-------|
| **[[glossary|C2]] Rating** | 3 (yellow circle) |
| **TQ** | 4-5 |
| **Resilience** | 1 |

| Attribute | Value |
|-----------|-------|
| Size | SECT (1 dot) |
| [[force-elements|ISTAR]] | **Yes** (★) |

**Key traits:**
- Same [[glossary|C2]] functions as NATO [[force-elements|HQ]] (Initiative [[glossary|DRM]], Assault [[glossary|DRM]], Rally [[glossary|DRM]], Command Activations)
- Lower [[force-elements|TQ]] than NATO [[force-elements|HQ]]
- [[force-elements|ISTAR]] Asset
- Can [[stacking|Embed]] for protection
- Under [[red-doctrine|Red Doctrine]] (Advanced), cannot issue New Orders — [[glossary|C2]] flexibility is limited to Initiative, Assaults, and Rally tests

**Scenario 1:** Tac/HQ 1 Embedded in 1-B-1 T PL (TGp 2)

---

### Reconnaissance Section (Recce SECT)

Russian reconnaissance element. Same special [[line-of-sight|Line of Sight (LoS)]] rules as NATO Recce.

| Stat | Full | Half Resilience |
|------|------|----------------|
| **Apers** | 2 (green) | 2 |
| **Atk** | 2 (purple) | 2 |
| **Assault** | 1 | 1 |
| **TQ** | 4 | 3 |
| **Resilience** | 2 | 1 |

| Attribute | Value |
|-----------|-------|
| FE Type | T (purple square) |
| Size | SECT (1 dot) |
| ISTAR | **Yes** (★) |
| LoS range | **4,000m** |
| ISTAR exception | 500m in Dense Wood/Urban |
| Danger Close (Artillery) | **250m** |

**vs NATO Recce:** Lower [[force-elements|TQ]] (4 vs 6). Otherwise same special rules.

**Scenario 1:** 1-Recce (TGp 4) — screens ahead of the main force advance

---

### Anti-Tank Section (Atk SECT)

Dedicated anti-tank unit. Provides additional AT capability beyond what the IFV/APC PLs offer.

| Stat | Value |
|------|-------|
| **Atk** | 1 (purple) |
| **TQ** | ~4 |
| **Resilience** | 1-2 |

| Attribute | Value |
|-----------|-------|
| Size | SECT (1 dot) |

**Key traits:**
- Specialised anti-vehicle unit
- Typically carries a [[atgm|Stabber ATGM]] (sometimes depleted) for engaging [[force-elements|MBTs]]
- Can [[stacking|Embed]] in a Tracked PL
- Fragile (SECT-sized Resilience)

**Identified IDs:** 1-Atk-1 (from rulebook ORBAT example)

---

### Fire Support Team Section (FST SECT)

Forward observation unit.

| Attribute | Value |
|-----------|-------|
| Size | SECT (1 dot) |
| ISTAR | **Yes** (★) |
| Resilience | 1 |

**Identified IDs:** FST 1 (from rulebook ORBAT example)

---

### A1 Echelon "Sect" (Logistics — Advanced Mode)

Russian supply unit. Called **"Sect"** (not to be confused with SECT, the FE size).

| Stat | Value |
|------|-------|
| **TQ** | 5 |
| **Resilience** | 1 |

| Attribute | Value |
|-----------|-------|
| FE Type | **W** (grey circle — Wheeled) |
| Size | SECT (1 dot) |

Same function as NATO A1 Echelon — [[replendem|REPLENDEM]] resupply. Cannot fire (not even [[atgm|ATGMs]] it carries).

---

## Mortar Force Element

### Mortar Platoon (Mor)

On-map [[indirect-fire|Indirect Fire]] unit, same mechanics as NATO Mortar.

| Attribute | Value |
|-----------|-------|
| Fire type | Mortar |
| Max range | 8,000m |
| Danger Close | 250m |
| Auto Suppression | Dismounted Foot [[force-elements|FEs]] within 250m |

**Scenario 1:** Not in Russia's Scenario 1 [[glossary|Order of Battle (ORBAT)]] (uses 152mm Artillery [[support-assets|SA]] instead)

---

## Support Assets (off-map, cannot be targeted)

### 152mm Artillery [[support-assets|SA]]

| Attribute | Value |
|-----------|-------|
| Range | **Unlimited** |
| Danger Close | 500m (250m for Recce) |
| Auto Suppression | **All [[force-elements|FE]] types** within 250m |
| [[force-elements|ISTAR]] required | **Always** |
| Advanced mode bonus | Additional Fire Missions in [[glossary|Order of Battle (ORBAT)]]s |

**Scenario 1:** 152mm, 4+1 = **5** Fire Missions

### [[support-assets|First Person View drone (FPV)]] Drone [[support-assets|SA]]

| Attribute | Value |
|-----------|-------|
| Range | **Unlimited** |
| Danger Close | **None** |
| Auto Suppression | Dismounted Foot [[force-elements|FEs]] within 250m |
| [[indirect-fire#FPV Double-Tap\|Double-Tap]] | Can fire twice at same target |
| Advanced mode bonus | Additional Fire Missions in [[glossary|ORBATs]] |

**Scenario 1:** FPV A, 4+2 = **6** Fire Missions

### UAS Drone SA

Same as NATO UAS.

**Scenario 1:** UAS A

---

## Russian [[atgm|Anti-Tank Guided Missiles (ATGMs)]]

| [[atgm|ATGM]] | Range | Font | Restriction |
|------|-------|------|-------------|
| **RPG** | Short (1,000m) | Red | Any Foot [[force-elements|FE]] can carry |
| **Stabber** | 3,000m | Red | **Only Russian Tracked [[force-elements|FEs]]** |

Both function as **gold Atk** when fired (can target any vehicle including [[force-elements|MBTs]]). See [[atgm]].

> [!tip] Stabbers are critical
> Since Russian [[force-elements|MBTs]] have purple (not gold) Atk, the Stabber [[atgm|ATGM]] is the **only way** for Russian ground forces to engage NATO [[force-elements|MBTs]] with direct fire. In most [[glossary|ORBATs]], Stabbers start **Depleted** (one shot only). Protect them and use them wisely.

---

## Force Comparison Summary

| Attribute | NATO | Russia | Advantage |
|-----------|------|--------|-----------|
| [[force-elements|Platoon (PL)]] Resilience | 4 | 3 | NATO |
| [[force-elements|PL]] [[force-elements|Troop Quality (TQ)]] | 6 | 4 | NATO |
| Move-Fire [[glossary|Dice Roll Modifier (DRM)]] | -1 | -2 | NATO |
| [[force-elements|Main Battle Tank (MBT)]] Atk type | Gold (targets everything) | Purple (can't target [[force-elements|MBTs]]) | NATO |
| Number of [[force-elements|FEs]] | Fewer | More | Russia |
| Artillery Fire Missions | Fewer | More (+bonus in Adv.) | Russia |
| [[support-assets|FPV]] Fire Missions | Fewer | More (+bonus in Adv.) | Russia |
| [[electronic-warfare|Electronic Warfare (EW)]] Chit draw | 1 | 2 (keep 1, Adv.) | Russia |
| Doctrine flexibility | [[mission-command\|Mission Command]] | [[red-doctrine\|Red Doctrine]] (rigid) | NATO |
