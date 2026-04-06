---
title: NATO Unit Catalog
type: unit
tags: [nato, units, counters, orbat, stats, gameplay-guide]
sources: [Rulebook - FINAL.pdf, NATO SCENARIO 1.pdf, counter-scans]
created: 2026-04-05
updated: 2026-04-05
---

# NATO Unit Catalog

This page is a comprehensive reference for every [[nato|NATO]] unit type available in Battlegroup Clash: Baltics (BC:B). It covers the physical counters, the stats printed on them, what those stats mean in gameplay, and tactical advice for how to use each unit effectively.

All NATO counters are **grey**. Russian counters are red. For the Russian equivalents, see [[russia-units|Russian Unit Catalog]].

---

## Understanding the Counter System

Before diving into individual units, it is essential to understand what a player physically sees and handles when playing NATO forces.

### What Is on a Counter

Every [[force-elements|Force Element (FE)]] counter contains the following information, printed directly on its face:

- **Anti-Personnel (Apers) Value** -- top-left, in a green box. The column used on the Direct Fire Results Table when firing at Foot or Wheeled targets.
- **Anti-Tank (Atk) Value** -- top-centre, in a purple or gold box. The column used when firing at Tracked targets. The colour determines which vehicle types can be engaged (see the [[#Colour Targeting System]] section below).
- **Assault Value** -- top-right, in a white box. Used to calculate the ratio in close-quarters [[assault|Assaults]], not for Direct Fire.
- **[[force-elements|Troop Quality (TQ)]]** -- a white number inside a black circle. Determines the [[glossary|Dice Roll Modifier (DRM)]] applied to Direct Fire rolls, [[assault|Assault]] rolls, and [[morale|Rally tests]].
- **Resilience** -- a black number inside a white hexagon. The number of Hits the [[force-elements|Force Element (FE)]] can absorb before being Eliminated.
- **[[force-elements|Force Element (FE)]] Type icon** -- bottom-right. A diamond (Foot / F), circle (Wheeled / W), or square (Tracked / T). The background colour (green, grey, purple, or gold) determines what weapons can target this unit.
- **NATO symbol** -- an icon identifying the unit type (crossed rifles for infantry, rectangle with diagonal line for armour, etc.). Its only game effect is that the Armoured Personnel Carrier / Infantry Fighting Vehicle icon shows which Tracked [[force-elements|Force Elements (FEs)]] can carry [[stacking|Mounted]] Foot units.
- **[[force-elements|Force Element (FE)]] Size** -- dots below the NATO symbol. Three dots = [[force-elements|Platoon (PL)]]. One dot = [[force-elements|Section (SECT)]].
- **[[force-elements|Force Element (FE)]] ID** -- text identifying the specific unit (e.g. "1-A-1" translates roughly to Platoon-Company-Battalion).
- **[[force-elements|Intelligence, Surveillance, Target Acquisition & Reconnaissance (ISTAR)]] star** -- a coloured star, present only on certain [[force-elements|Sections (SECTs)]] (Recce, [[force-elements|Headquarters (HQ)]], Fire Support Team (FST)). Marks the unit as an [[force-elements|ISTAR]] Asset capable of providing [[line-of-sight|Line of Sight (LoS)]] for [[indirect-fire|Indirect Fire]].
- **[[glossary|Command & Control (C2)]] Rating** -- a black number in a yellow circle, present only on [[force-elements|Headquarters (HQ)]] counters. Used as a [[glossary|Dice Roll Modifier (DRM)]] for [[initiative|Initiative]] rolls, [[assault|Assault]] rolls, [[morale|Rally tests]], and [[command-activation|Command Activations]].

Some counters also have a small "1" or "3" next to their Anti-Personnel (Apers) or Anti-Tank (Atk) value, indicating a non-standard range of 1,000m or 3,000m instead of the default 2,000m.

### The Two-Counter System for Platoons

[[force-elements|Platoon (PL)]]-sized [[force-elements|Force Elements (FEs)]] have a starting Resilience of 3 or 4. Because a single counter can only show two Resilience values (front and back), each [[force-elements|Platoon (PL)]] requires **two physical counters** to represent its full Resilience track:

1. **Counter 1 (full strength):** Front shows Resilience 4 (or 3). Back shows Resilience 3 (or 2).
2. **Counter 2 (reduced strength):** Front shows Resilience 2 (or 1). Back shows Resilience 1.

When a [[force-elements|Platoon (PL)]] takes its first Hit, flip Counter 1 to its reverse side. When it takes a second Hit, **swap Counter 1 for Counter 2** (front side up). A third Hit flips Counter 2 to its reverse. A fourth Hit Eliminates the unit.

The second counter has a **lower [[force-elements|Troop Quality (TQ)]]** printed on it (typically TQ 5 instead of TQ 6 for NATO). This means that as a [[force-elements|Platoon (PL)]] takes losses and moves to its second counter, its combat effectiveness degrades -- it fires less accurately, is harder to rally, and contributes less to assaults.

[[force-elements|Sections (SECTs)]] only need one counter (Resilience 2/1 or just 1), so they use a single counter with a flip.

> [!tip] Keep the second counters organised
> During play, keep each [[force-elements|Platoon (PL)]]'s second counter in your play area, sorted by [[force-elements|Force Element (FE)]] ID. When a [[force-elements|Platoon (PL)]] takes its second Hit, you will need to swap counters quickly. Do not stack unused counters randomly -- you will lose time hunting for the right one.

### The Colour Targeting System

The colour of the Anti-Tank (Atk) box on the firing unit's counter must match or exceed the colour of the target's [[force-elements|Force Element (FE)]] Type icon. This is the core of the weapons-targeting system:

| Target FE Type colour | What it represents | Can be targeted by |
|---|---|---|
| **Green** (F diamond) | Dismounted infantry | Anti-Personnel (Apers) -- green column only |
| **Grey** (W circle) | Wheeled vehicles (trucks, supply) | Any weapon -- Anti-Personnel (Apers) or Anti-Tank (Atk) |
| **Purple** (T square) | Armoured Personnel Carriers (APCs), Infantry Fighting Vehicles (IFVs) | Any Anti-Tank (Atk) -- purple or gold |
| **Gold** (T square) | Main Battle Tanks (MBTs) with reactive armour | **Gold Anti-Tank (Atk) only** -- or [[atgm|Anti-Tank Guided Missiles (ATGMs)]] |

This hierarchy means that a unit with only a green Anti-Personnel (Apers) value (like a Foot [[force-elements|Platoon (PL)]]) literally **cannot shoot at** a purple or gold Tracked vehicle using its inherent weapons. It needs an [[atgm|Anti-Tank Guided Missile (ATGM)]] to engage armour.

Conversely, a [[force-elements|Main Battle Tank (MBT)]] with gold Anti-Tank (Atk) can shoot at anything on the battlefield -- Foot, Wheeled, purple Tracked, or gold Tracked.

### Troop Quality and the DRM

[[force-elements|Troop Quality (TQ)]] is one of the most important numbers in the game. It applies as a [[glossary|Dice Roll Modifier (DRM)]] to Direct Fire rolls, [[assault|Assault]] rolls, and [[morale|Rally tests]]. The DRM is calculated relative to TQ 4, which is the baseline (zero modifier):

| TQ Value | DRM | Typical units |
|---|---|---|
| **6** | **+2** | Most NATO [[force-elements|Platoons (PLs)]] and [[force-elements|Sections (SECTs)]] at full strength |
| **5** | **+1** | NATO [[force-elements|Platoons (PLs)]] at reduced strength; some Russian units at full strength |
| **4** | **0** | Russian [[force-elements|Platoons (PLs)]] at full strength (baseline) |
| **3** | **-1** | Russian [[force-elements|Platoons (PLs)]] at reduced strength |

This means a full-strength NATO [[force-elements|Platoon (PL)]] (TQ 6) fires with a **+2 advantage** over a full-strength Russian [[force-elements|Platoon (PL)]] (TQ 4). That is a massive swing on 2D6 -- it shifts the bell curve significantly in NATO's favour. Even at reduced strength (TQ 5), NATO still has a +1 edge.

However, [[morale|Suppression]] and [[morale|Disruption]] markers apply negative modifiers to TQ: Suppressed gives -1, Disrupted gives -2. So a Suppressed NATO unit at TQ 6 effectively fires at TQ 5 (+1 DRM), while a Disrupted one fires at TQ 4 (0 DRM) -- equivalent to a fresh Russian unit. **Keeping NATO units in good morale is critical to preserving this quality advantage.**

---

## Platoon-Sized Force Elements ([[force-elements|Platoon (PL)]] -- 3 dots)

Platoons are the main combat units in the game. They have the highest Resilience, the strongest firepower, and are required for [[assault|Assaults]]. Each Platoon counter has three dots below its NATO symbol.

---

### Infantry Platoon (Foot Platoon)

**What it represents:** A dismounted infantry platoon of roughly 25-30 soldiers, equipped with personal weapons (rifles, machine guns, grenade launchers) but no integral anti-armour weapons beyond what [[atgm|Anti-Tank Guided Missiles (ATGMs)]] provide. In real-world NATO terms, this is typically three rifle sections plus a platoon headquarters. On the counter, these soldiers are abstracted into a single green-diamond [[force-elements|Force Element (FE)]].

**Role on the battlefield:** The Foot [[force-elements|Platoon (PL)]] is the backbone of NATO ground forces. It is the only unit type that can initiate an [[assault|Assault]], it can enter Dense Wood freely (where vehicles cannot go), it can dig [[dig-shell-scrape|Shell Scrapes]] for defensive protection, and it benefits from [[line-of-sight#Cover|Cover]] in non-Open terrain. However, it is **completely helpless against armoured vehicles** unless equipped with an [[atgm|Anti-Tank Guided Missile (ATGM)]] such as the NLAW or Javelin. Without one, enemy Tracked [[force-elements|Force Elements (FEs)]] can fire on this unit with impunity and it cannot shoot back.

#### Stats Table

| Stat | Full Strength (Counter 1) | Reduced Strength (Counter 2) |
|------|---------------------------|------------------------------|
| **Anti-Personnel (Apers)** | 3 (green) | 3 |
| **Anti-Tank (Atk)** | -- | -- |
| **Assault Value** | 3 | 3 |
| **[[force-elements\|Troop Quality (TQ)]]** | 6 | 5 |
| **Resilience** | 4 / 3 (flip) | 2 / 1 (flip) |

| Attribute | Value |
|-----------|-------|
| [[force-elements\|Force Element (FE)]] Type | **F** (green diamond -- Foot) |
| NATO symbol | Infantry (crossed rifles) |
| Range (Anti-Personnel (Apers)) | 2,000m |
| Size | [[force-elements\|Platoon (PL)]] (3 dots) |
| Can target with inherent weapons | Foot (green), Wheeled (grey) |
| Targeted by | Anti-Personnel (Apers) green column only |
| Requires ATGM to engage | Purple or gold Tracked [[force-elements\|Force Elements (FEs)]] |

#### What the Stats Mean in Play

**Anti-Personnel (Apers) 3 (green):** When this unit fires at an enemy Foot or Wheeled [[force-elements|Force Element (FE)]], the player uses the **"3" column** on the Direct Fire Results Table, then rolls 2D6 and applies [[glossary|Dice Roll Modifiers (DRMs)]]. The "3" column is strong -- it is the highest inherent Anti-Personnel (Apers) value of any unit in the game. This means a full-strength NATO Foot [[force-elements|Platoon (PL)]] is devastating against enemy infantry. With TQ 6 providing a +2 DRM on top, an unmodified roll of 7 becomes a 9, which on the "3" column typically yields 1-2 Hits. The green colour means this weapon can only target Foot (green) and Wheeled (grey) targets -- it cannot target anything with a purple or gold [[force-elements|Force Element (FE)]] Type.

**No Anti-Tank (Atk):** The dash means this unit has **no inherent anti-vehicle capability**. It cannot fire at any Tracked [[force-elements|Force Element (FE)]] using Direct Fire. To engage armour, it must use an [[atgm|Anti-Tank Guided Missile (ATGM)]] placed on its counter (NLAW at 1,000m range or Javelin at 3,000m range), which acts as a gold Anti-Tank (Atk) shot using the ATGM Results Table column. Without an [[atgm|ATGM]], this unit must avoid or endure enemy vehicles.

**Assault Value 3:** This is the highest Assault Value in the game, tied with no other unit type. During an [[assault|Assault]], the Attacker's combined Assault Values are divided by the Defender's combined Assault Values to produce a ratio that determines the column on the Assault Results Table. A single Foot [[force-elements|Platoon (PL)]] with Assault Value 3 attacking a lone Tracked [[force-elements|Platoon (PL)]] with Assault Value 1 creates a 3:1 ratio -- highly favourable. This makes infantry the decisive force in close combat.

**Troop Quality (TQ) 6 / 5:** At full strength (Counter 1), TQ 6 grants a +2 DRM on every Direct Fire roll, every Assault roll, and every [[morale|Rally test]]. This is NATO's signature advantage. After taking enough Hits to move to Counter 2, TQ drops to 5 (+1 DRM). Still better than most Russian units, but the edge is diminishing. Protect these units from attrition.

**Resilience 4 / 3 / 2 / 1:** NATO Foot [[force-elements|Platoons (PLs)]] start at Resilience 4 in the standard [[glossary|Order of Battle (ORBAT)]]. They can absorb four Hits before Elimination. (Note: in Scenario 1, NATO [[force-elements|Platoons (PLs)]] start at Resilience 3, not 4, reflecting the reduced-strength nature of the defending force.) Each Hit flips or swaps the counter. Russian [[force-elements|Platoons (PLs)]] typically start at Resilience 3, so NATO infantry can absorb roughly 33% more punishment.

#### Key Traits and Interactions

- **Dense Wood access:** Foot [[force-elements|Platoons (PLs)]] can enter Dense Wood freely. Tracked and Wheeled [[force-elements|Force Elements (FEs)]] cannot enter Dense Wood except on Roads. This makes Dense Wood terrain a natural defensive position for infantry -- enemy vehicles must either go around or fight on unfavourable terms.
- **[[dig-shell-scrape|Shell Scrapes]]:** Only Foot [[force-elements|Force Elements (FEs)]] can take the Dig Shell Scrape Action. The first dig gives a -1 DRM against all incoming fire and Assaults; taking the action a second time flips the marker to Shell Scrape for -2 DRM. Combined with Cover from Dense Wood or Urban terrain (-2 DRM), a dug-in NATO Foot [[force-elements|Platoon (PL)]] forces the enemy to fire at -4 DRM total. That often makes even strong attacks miss entirely.
- **Cover bonus:** A Foot [[force-elements|Force Element (FE)]] with more than 50% of its counter in non-Open terrain gains a [[line-of-sight#Cover|Cover]] DRM: -1 for Light Wood / Light Urban, -2 for Dense Wood / Urban. Note that Cover from Light or Dense Wood does **not** apply against Artillery fire unless the Foot [[force-elements|FE]] has a Shell Scrape marker.
- **[[line-of-sight#Vehicle Vulnerability|Vehicle Vulnerability]] bonus:** A Foot [[force-elements|Force Element (FE)]] in Urban or Dense Wood (50%+ of counter) firing at a Tracked or Wheeled [[force-elements|FE]] in the same Urban or Dense Wood gains a +2 DRM. Infantry stalking vehicles in close terrain is extremely effective.
- **Paired with a Tracked [[force-elements|Platoon (PL)]]:** Every Foot [[force-elements|Platoon (PL)]] in the game shares an ID with a Tracked [[force-elements|Platoon (PL)]] (e.g., 1-A-1 F and 1-A-1 T). They are separate [[force-elements|Force Elements (FEs)]] for game purposes, but represent the dismounted and vehicle components of the same armoured infantry platoon. The Foot [[force-elements|PL]] can [[stacking|Mount]] inside the Tracked [[force-elements|PL]] to form a Stack.
- **[[stacking|Mounting]]:** When Mounted inside a Tracked [[force-elements|Platoon (PL)]], the Foot [[force-elements|PL]] cannot take any Action except Move to Dismount or [[assault|Assault]]. It automatically has the same [[morale|Morale Status]] as the Tracked [[force-elements|FE]]. It benefits from the vehicle's speed and protection but also takes additional Hits when the vehicle is hit (on a D6 roll of 4+).
- **[[ammo|Ammo]] (Advanced mode):** Foot [[force-elements|Platoons (PLs)]] have a maximum of 4 Ammo. Each Direct Fire uses 1 Ammo. Each Assault uses 2 Ammo. At 0 Ammo, the unit must use the "1" column for Direct Fire (regardless of its printed Anti-Personnel (Apers) value) and has an effective Assault Value of 1. Running out of ammunition devastates this unit's combat power. Keep [[replendem|A1 Echelons]] nearby for resupply.

#### Tactical Advice

- **Use terrain aggressively.** The Foot [[force-elements|Platoon (PL)]]'s greatest asset is its ability to occupy Dense Wood and Urban terrain where vehicles cannot follow. Position infantry in these areas early and dig in.
- **Always pair with ATGMs.** A Foot [[force-elements|Platoon (PL)]] without an [[atgm|ATGM]] is dangerously vulnerable to enemy armour. The Javelin (3,000m range) is the premier anti-tank weapon in the NATO arsenal. Even a depleted NLAW gives the infantry at least one shot.
- **Assault is your winning move.** With Assault Value 3 and TQ 6 (+2 DRM), NATO Foot [[force-elements|Platoons (PLs)]] are the best assault troops in the game. Combine two Foot [[force-elements|PLs]] (total Assault Value 6) against a lone enemy [[force-elements|Platoon (PL)]] and the ratio is overwhelmingly favourable.
- **Common mistake: leaving infantry exposed in Open terrain.** Without Cover or Shell Scrapes, infantry are easy targets for Artillery, Mortars, and enemy Direct Fire. Never leave Foot [[force-elements|Platoons (PLs)]] in the open unless they are moving through quickly.
- **Common mistake: forgetting that infantry cannot shoot vehicles.** New players often position Foot [[force-elements|Platoons (PLs)]] to block an enemy vehicle advance, then realise they have no [[atgm|ATGM]] and cannot fire back. Always check your ATGM allocation before positioning.

**Scenario 1 examples:** 1-A-1 F, 2-A-1 F, 1-B-1 F, 2-B-1 F, 3-A-1 F (all start at Resilience 3 in Scenario 1, not the standard 4)

---

### IFV/APC Tracked Platoon (Mechanised Infantry Vehicle)

**What it represents:** A platoon of 3-4 armoured vehicles -- either Infantry Fighting Vehicles (IFVs) with autocannons or Armoured Personnel Carriers (APCs) with mounted weaponry. In real-world NATO terms, this could be a platoon of CV90s, Bradleys, Warriors, or Boxers, depending on the contributing nation. The key point is that these vehicles carry the infantry platoon into battle and provide fire support with vehicle-mounted weapons.

**Role on the battlefield:** The IFV/APC Tracked [[force-elements|Platoon (PL)]] serves three functions: (1) it carries a [[stacking|Mounted]] Foot [[force-elements|Platoon (PL)]], protecting the infantry during movement and giving them vehicle-speed mobility; (2) it provides anti-vehicle firepower that dismounted infantry lacks -- its purple Anti-Tank (Atk) value lets it engage enemy APCs and IFVs; and (3) it acts as a mobile fire platform that can take [[move-fire|Move-Fire]] Actions with only a -1 DRM penalty (better than Russia's -2). However, it **cannot** engage [[force-elements|Main Battle Tanks (MBTs)]] (gold targets) with its inherent weapons, and Dense Wood terrain is No-Go except on Roads.

#### Stats Table

| Stat | Full Strength (Counter 1) | Reduced Strength (Counter 2) |
|------|---------------------------|------------------------------|
| **Anti-Personnel (Apers)** | 2 (green) | 2 |
| **Anti-Tank (Atk)** | 1 (purple) | 1 |
| **Assault Value** | 1 | 1 |
| **[[force-elements\|Troop Quality (TQ)]]** | 6 | 5 |
| **Resilience** | 4 / 3 (flip) | 2 / 1 (flip) |

| Attribute | Value |
|-----------|-------|
| [[force-elements\|Force Element (FE)]] Type | **T** (purple square -- Tracked) |
| NATO symbol | Mechanised Infantry (crossed rifles with vehicle track) |
| Range (Anti-Personnel (Apers)) | 2,000m |
| Range (Anti-Tank (Atk)) | 2,000m |
| Size | [[force-elements\|Platoon (PL)]] (3 dots) |
| Can target | Foot (green), Wheeled (grey), Tracked-purple (APCs/IFVs) |
| Targeted by | Any Anti-Tank (Atk) -- purple or gold |
| Can carry | 1x [[stacking\|Mounted]] Foot [[force-elements\|Platoon (PL)]] + 1x [[stacking\|Embedded]] [[force-elements\|Section (SECT)]] |

#### What the Stats Mean in Play

**Anti-Personnel (Apers) 2 (green):** Uses the "2" column on the Direct Fire Results Table against Foot and Wheeled targets. Less effective than the Foot [[force-elements|Platoon (PL)]]'s Anti-Personnel (Apers) 3, but still useful for suppressing enemy infantry. With TQ 6 (+2 DRM), it compensates somewhat for the lower column.

**Anti-Tank (Atk) 1 (purple):** Uses the "1" column -- the weakest -- on the Direct Fire Results Table against Tracked targets. The purple colour means it can only engage other purple-type Tracked [[force-elements|Force Elements (FEs)]] (APCs and IFVs), **not** gold-type [[force-elements|Main Battle Tanks (MBTs)]]. Even against valid targets, the "1" column requires high rolls to achieve Hits. This unit is not a tank killer; it provides light anti-vehicle capability sufficient to threaten enemy troop carriers but not much else.

**Assault Value 1:** Only contributes 1 to the Assault ratio. Vehicles support infantry in Assaults but are not the decisive element. The Foot [[force-elements|Platoon (PL)]] that Dismounts from this vehicle provides the real Assault punch.

**Troop Quality (TQ) 6 / 5:** Same as the Foot [[force-elements|PL]]. The +2 DRM at full strength makes even the weak "1" Anti-Tank (Atk) column somewhat threatening, as high modified rolls can still produce Hits.

**Resilience 4 / 3 / 2 / 1:** Same progression as the Foot [[force-elements|PL]]. Four Hits to Eliminate.

#### Key Traits and Interactions

- **Carrier capability:** This is the only Tracked [[force-elements|Platoon (PL)]] type with the APC/IFV NATO icon, meaning it can carry one [[stacking|Mounted]] Foot [[force-elements|Platoon (PL)]] and one [[stacking|Embedded]] [[force-elements|Section (SECT)]] simultaneously. The resulting Stack is a potent combined-arms package.
- **Purple targeting limitation:** Purple Anti-Tank (Atk) means it can engage other APCs/IFVs but **not** [[force-elements|Main Battle Tanks (MBTs)]]. Against a gold-type enemy, this unit is defenceless using inherent weapons. It needs an [[atgm|ATGM]] (Javelin or NLAW) to fight tanks.
- **Dense Wood is No-Go:** Like all Tracked and Wheeled [[force-elements|Force Elements (FEs)]], this unit cannot enter Dense Wood except on Roads. It must use Open terrain, Light Wood, or Roads, making it vulnerable to ambush by infantry positioned in dense terrain.
- **[[move-fire|Move-Fire]] penalty: -1 DRM:** NATO Tracked [[force-elements|Force Elements (FEs)]] have a -1 DRM penalty on [[move-fire|Move-Fire]] Actions, compared to Russia's -2 DRM. This reflects NATO's better-trained crews and superior fire-on-the-move platforms. Practically, this means NATO vehicles can conduct hit-and-run tactics more effectively -- move into sight, fire, and continue moving -- with a smaller accuracy penalty.
- **Hits on Mounted infantry:** When this vehicle takes a Hit, roll 1D6 for each Hit to see if the [[stacking|Mounted]] Foot [[force-elements|PL]] inside also takes damage. On a 4+, the Mounted [[force-elements|FE]] receives an additional Hit. This makes [[stacking|Mounting]] a calculated risk: you gain vehicle speed and protection, but vehicle Hits can cascade to the infantry inside.
- **Hits on [[stacking|Embedded]] [[force-elements|Sections (SECTs)]]:** For each Hit the Tracked [[force-elements|PL]] receives, roll 1D6. On a "1", that Hit is taken by the [[stacking|Embedded]] [[force-elements|Section (SECT)]] instead of the vehicle. This provides some protection to the [[force-elements|SECT]] but not much -- a 1-in-6 chance per Hit.
- **[[ammo|Ammo]] (Advanced mode):** Vehicle [[force-elements|Platoons (PLs)]] have a maximum of 5 Ammo, one more than Foot [[force-elements|PLs]]. At 0 Ammo, it must use the "1" column regardless of printed value (though its Anti-Tank (Atk) is already "1", so no change there) and its Assault Value drops to 1 (already 1).

#### Tactical Advice

- **Use as a taxi, then separate.** The classic tactic is to [[stacking|Mount]] your Foot [[force-elements|PL]] at the start, drive it to the objective area using the vehicle's speed, then Dismount the infantry into favourable terrain (Dense Wood, Urban) while the vehicle takes up a supporting [[overwatch|Overwatch]] position.
- **Keep the [[force-elements|HQ]] Embedded.** The IFV/APC Tracked [[force-elements|PL]] is the natural host for your [[force-elements|Headquarters (HQ)]] [[force-elements|Section (SECT)]]. An [[stacking|Embedded]] [[force-elements|HQ]] provides its [[glossary|C2]] DRM to Assaults involving the Stack, and the vehicle's Resilience protects the fragile [[force-elements|HQ]] (Resilience 1 alone).
- **Do not duel tanks.** With Anti-Tank (Atk) 1 (purple), this unit cannot target gold-type vehicles at all. If an enemy [[force-elements|MBT]] appears, either use an [[atgm|ATGM]], call [[indirect-fire|Indirect Fire]], or disengage. Trying to fight tanks with an IFV is futile.
- **[[move-fire|Move-Fire]] hit-and-run.** NATO's -1 Move-Fire penalty (vs Russia's -2) makes this vehicle excellent for aggressive manoeuvre. Move into [[line-of-sight|Line of Sight (LoS)]], fire at an enemy IFV, then continue moving out of sight. Even with -1 DRM, TQ 6 (+2) still gives a net +1 modifier.
- **Common mistake: over-stacking.** A Stack with a Mounted Foot [[force-elements|PL]], an Embedded [[force-elements|HQ]], and ATGMs on multiple components is a high-value target. If the vehicle is destroyed, both the [[force-elements|HQ]] and infantry are placed in the open, potentially Disrupted and in dire positions. Balance the benefits of consolidation against the risk of catastrophic loss.

**Scenario 1 example:** 3-A-1 T (the only NATO Tracked [[force-elements|Platoon (PL)]] in Scenario 1, typically carrying a [[stacking|Mounted]] Foot [[force-elements|PL]] and the [[stacking|Embedded]] Tac [[force-elements|HQ]])

---

### Main Battle Tank Platoon (MBT)

**What it represents:** A platoon of 3-4 main battle tanks -- Leopard 2s, Challenger 2s, Abrams, or similar NATO heavy armour. These are the most powerful ground weapons in any modern army. Each tank carries a 120mm smoothbore or rifled main gun capable of defeating any armoured vehicle, plus coaxial and turret-mounted machine guns for engaging infantry and soft targets.

**Role on the battlefield:** The [[force-elements|Main Battle Tank (MBT)]] [[force-elements|Platoon (PL)]] is the undisputed king of the battlefield. Its gold Anti-Tank (Atk) 4 value lets it fire on the highest-value column against **any** target type, including enemy [[force-elements|MBTs]]. Its gold [[force-elements|FE]] Type means only other [[force-elements|MBTs]] (with gold Anti-Tank (Atk)) or [[atgm|Anti-Tank Guided Missiles (ATGMs)]] can target it -- no other weapon in the game can scratch it. Its 3,000m Anti-Tank (Atk) range outranges most units (standard is 2,000m), allowing it to engage targets before they can fire back. The trade-off is that it cannot enter Dense Wood, does not carry infantry, and in larger scenarios it draws enormous enemy attention.

#### Stats Table

| Stat | Full Strength (Counter 1) | Reduced Strength (Counter 2) |
|------|---------------------------|------------------------------|
| **Anti-Personnel (Apers)** | 2 (green) | 2 |
| **Anti-Tank (Atk)** | 4 (gold) | 4 |
| **Assault Value** | 1 | 1 |
| **[[force-elements\|Troop Quality (TQ)]]** | 6 | 5 |
| **Resilience** | 4 / 3 (flip) | 2 / 1 (flip) |

| Attribute | Value |
|-----------|-------|
| [[force-elements\|Force Element (FE)]] Type | **T** (gold square -- Tracked, [[force-elements\|Main Battle Tank (MBT)]] armour) |
| NATO symbol | Armour (rectangle with diagonal line) |
| Range (Anti-Personnel (Apers)) | 2,000m |
| Range (Anti-Tank (Atk)) | **3,000m** (small "3" on counter) |
| Size | [[force-elements\|Platoon (PL)]] (3 dots) |
| Can target | **Everything** -- Foot, Wheeled, Tracked (purple and gold) |
| Targeted by | **Gold Anti-Tank (Atk) only** or [[atgm\|Anti-Tank Guided Missiles (ATGMs)]] |
| Can carry | **No** -- no APC/IFV icon, pure armour |

#### What the Stats Mean in Play

**Anti-Personnel (Apers) 2 (green):** Uses the "2" column against infantry. Respectable but not exceptional. The tank's machine guns can threaten dismounted troops, but the real damage comes from its main gun against vehicles.

**Anti-Tank (Atk) 4 (gold):** The **highest Anti-Tank (Atk) value in the game**, using the "4" column on the Direct Fire Results Table. The gold colour means it can target any [[force-elements|Force Element (FE)]] Type -- Foot, Wheeled, purple Tracked, and gold Tracked. With TQ 6 (+2 DRM), a roll of 7 becomes 9 on the "4" column, typically producing 2 Hits -- enough to cripple or destroy most targets in a single shot. At 3,000m range, the [[force-elements|MBT]] can engage targets a full 1,000m before they can fire back (unless they also have 3,000m range or a Javelin).

**Assault Value 1:** Tanks are not decisive in close combat. They support infantry Assaults but contribute only 1 to the ratio. The tank's value is in firepower at range, not in close quarters.

**TQ 6 / 5:** Same as other NATO units. At full strength, the +2 DRM on top of the "4" column makes this the deadliest Direct Fire platform in the game.

**Resilience 4 / 3 / 2 / 1:** Four Hits to destroy. Given that only gold Anti-Tank (Atk) weapons or [[atgm|ATGMs]] can target it, this Resilience goes further than it appears. Most enemies simply cannot engage it at all.

#### Key Traits and Interactions

- **Gold supremacy:** Gold [[force-elements|FE]] Type with gold Anti-Tank (Atk) creates a dual advantage. The [[force-elements|MBT]] can shoot everything, and almost nothing can shoot it back. The only threats are: other [[force-elements|MBTs]] with gold Anti-Tank (Atk), [[atgm|ATGMs]] (Javelin, NLAW, Stabber), and [[indirect-fire|Indirect Fire]] (which ignores the targeting colour system entirely -- Mortars, Artillery, and FPV drones can all target gold vehicles).
- **3,000m Anti-Tank (Atk) range:** Standard Anti-Tank (Atk) range is 2,000m. The [[force-elements|MBT]]'s 3,000m range (shown by the small "3" on the counter) creates a 1,000m "outrange zone" where it can fire at enemy vehicles that cannot fire back. Only the Javelin [[atgm|ATGM]] (also 3,000m) and the Stabber [[atgm|ATGM]] (3,000m) can match this range among anti-vehicle weapons.
- **No carrier capability:** Unlike the IFV/APC, the [[force-elements|MBT]] does not have the carrier NATO icon. It cannot [[stacking|Mount]] Foot [[force-elements|Platoons (PLs)]] or [[stacking|Embed]] [[force-elements|Sections (SECTs)]]. It operates as a standalone unit. This means it cannot benefit from having an [[stacking|Embedded]] [[force-elements|HQ]] directly, and it does not form the combined-arms Stacks that IFV/APC platoons create.
- **Dense Wood No-Go:** Same restriction as all Tracked and Wheeled units. The [[force-elements|MBT]] is a creature of Open terrain and roads.
- **[[move-fire|Move-Fire]] -1 DRM:** Same NATO advantage over Russian vehicles.
- **[[indirect-fire|Indirect Fire]] vulnerability:** While the colour system protects the [[force-elements|MBT]] from most Direct Fire, Indirect Fire (Artillery, Mortars, FPV drones) does not use the colour system at all. Any Indirect Fire can target a gold [[force-elements|FE]]. Furthermore, the Indirect Fire DRM Table includes a -3 DRM when targeting a vehicle with a Moved marker, making it harder to hit a moving tank, but a stationary [[force-elements|MBT]] is an attractive Artillery target.

#### Tactical Advice

- **Control the open ground.** The [[force-elements|MBT]] excels in Open terrain where its 3,000m range and immunity to most Direct Fire make it dominant. Position it on a hill crest or at the edge of a woodline overlooking open approaches.
- **Kill enemy armour first.** The [[force-elements|MBT]] is the only inherent weapon (besides [[atgm|ATGMs]]) that can destroy enemy [[force-elements|MBTs]]. Prioritise eliminating enemy tanks before they can close range. Each turn an enemy [[force-elements|MBT]] survives is a turn it can fire back.
- **Watch for ATGMs.** The Javelin (3,000m range, gold targeting) is the [[force-elements|MBT]]'s nightmare. A dismounted infantry [[force-elements|Platoon (PL)]] hidden in Dense Wood with a Javelin can ambush your [[force-elements|MBT]] from the maximum range of 3,000m. Because the infantry is in Dense Wood (an Obstruction), the [[force-elements|MBT]] may not even have [[line-of-sight|Line of Sight (LoS)]] to fire back. Always use Recce to scout ahead.
- **Do not push into Dense Wood or Urban alone.** The [[force-elements|MBT]] cannot enter Dense Wood at all, and in Urban terrain it is vulnerable to the +2 Vehicle Vulnerability DRM from enemy Foot [[force-elements|Force Elements (FEs)]]. Let infantry clear these areas.
- **Common mistake: ignoring Indirect Fire.** Players sometimes believe the [[force-elements|MBT]] is invincible because of its gold [[force-elements|FE]] Type. It is not. Artillery, Mortars, and FPV drones bypass the colour system entirely. A Russian 152mm Artillery barrage can damage the [[force-elements|MBT]] just as easily as it can damage infantry (though DRMs for targeting vehicles with Indirect Fire are unfavourable for the attacker).

**Identified IDs:** 1-A-2 (referenced in rulebook examples for larger scenarios)

---

## Section-Sized Force Elements ([[force-elements|Section (SECT)]] -- 1 dot)

Sections are smaller, specialised units. They have lower Resilience (typically 1-2), weaker combat stats, and fill support roles rather than frontline combat roles. Each Section counter has one dot below its NATO symbol.

---

### Headquarters Section (Main HQ / Tac HQ)

**What it represents:** The command element of the force -- an [[force-elements|Headquarters (HQ)]] vehicle (typically a modified APC or command vehicle) containing the commanding officer, operations staff, and communications equipment. Each side has two: a **Main [[force-elements|Headquarters (HQ)]]** and a **Tactical [[force-elements|Headquarters (HQ)]] (Tac [[force-elements|HQ]])**. In real-world terms, the Main [[force-elements|HQ]] is the battalion or company commander's vehicle, while the Tac [[force-elements|HQ]] is a forward command post positioned closer to the action.

**Role on the battlefield:** The [[force-elements|HQ]] is the most important [[force-elements|Section (SECT)]] in the game. Its [[glossary|Command & Control (C2)]] Rating (3 for NATO) provides a DRM that enhances [[initiative|Initiative]] rolls, [[assault|Assault]] results, and [[morale|Rally tests]]. Through [[command-activation|Command Activations]], the [[force-elements|HQ]] allows multiple [[task-groups|Task Groups (TGps)]] to activate simultaneously, enabling coordinated operations. It is also an [[force-elements|ISTAR]] Asset, providing [[line-of-sight|Line of Sight (LoS)]] for [[indirect-fire|Indirect Fire]]. However, it is extremely fragile (Resilience 1 -- one Hit and it is gone), so it should almost always be [[stacking|Embedded]] in a Tracked [[force-elements|Platoon (PL)]].

#### Stats Table

| Stat | Value |
|------|-------|
| **[[glossary\|Command & Control (C2)]] Rating** | 3 (yellow circle) |
| **Anti-Personnel (Apers)** | 2 (green) |
| **Anti-Tank (Atk)** | 2 (purple) |
| **Assault Value** | 1 |
| **[[force-elements\|Troop Quality (TQ)]]** | 6 |
| **Resilience** | 1 |

| Attribute | Value |
|-----------|-------|
| [[force-elements\|Force Element (FE)]] Type | T (purple square) |
| NATO symbol | [[force-elements\|Headquarters (HQ)]] flag |
| Size | [[force-elements\|Section (SECT)]] (1 dot) |
| [[force-elements\|Intelligence, Surveillance, Target Acquisition & Reconnaissance (ISTAR)]] | **Yes** (star symbol) |

#### What the Stats Mean in Play

**C2 Rating 3:** This is a +3 DRM applied in three key situations:
1. **[[initiative|Initiative]] rolls:** Each turn, both sides roll 1D6 for Initiative. The [[glossary|C2]] Rating is added as a modifier. NATO's C2 3 vs Russia's C2 (typically 2) gives NATO a consistent edge in winning Initiative, which lets them choose who activates first.
2. **[[assault|Assault]] rolls:** If the [[force-elements|HQ]] is [[stacking|Embedded]] in a Tracked [[force-elements|PL]] participating in an Assault, the C2 Rating applies as a +3 DRM to the Assault roll. This is massive -- it shifts the 2D6 result by 3 points, potentially turning a defeat into a victory.
3. **[[morale|Rally tests]]:** If a Main or Tac [[force-elements|HQ]] is within 250m of an [[force-elements|FE]]/Stack taking a Rally test, the C2 Rating applies as a +3 DRM. This makes it much easier to recover from [[morale|Suppression]] and [[morale|Disruption]].

**C2 Rating and [[command-activation|Command Activations]]:** When the [[force-elements|HQ]]'s [[task-groups|Task Group (TGp)]] is Activated, the player may also Command Activate up to **X-1 additional [[task-groups|Task Groups (TGps)]]** (where X = C2 Rating). With C2 3, that means up to **2 additional [[task-groups|TGps]]** can activate simultaneously. For the Main [[force-elements|HQ]], any [[task-groups|TGp]] on the map qualifies. For the Tac [[force-elements|HQ]], only [[task-groups|TGps]] with at least one [[force-elements|FE]] within 1,000m qualify. Each additional [[task-groups|TGp]] Command Activated causes the opponent to draw 1 Electronic Transmission (ETX) marker.

**Anti-Personnel (Apers) 2, Anti-Tank (Atk) 2 (purple):** Reasonable combat stats for a [[force-elements|Section (SECT)]], but the [[force-elements|HQ]] should almost never be used as a combat unit. Its value is in command, not firepower. If the [[force-elements|HQ]] is taking Direct Fire actions, something has gone wrong.

**Resilience 1:** One Hit and the [[force-elements|HQ]] is Eliminated. This is catastrophic -- losing the [[force-elements|HQ]] means losing the C2 DRM for Initiative, Assaults, and Rally tests, plus the ability to do Command Activations. **Always Embed the HQ in a Tracked [[force-elements|Platoon (PL)]] for protection.**

#### Main HQ vs Tac HQ

| Capability | Main [[force-elements\|Headquarters (HQ)]] | Tac [[force-elements\|HQ]] |
|---|---|---|
| [[command-activation\|Command Activation]] range | **Any** [[task-groups\|Task Group (TGp)]] on the map | Only [[task-groups\|TGps]] with an [[force-elements\|FE]] **within 1,000m** |
| Strategic flexibility | Highest -- can coordinate across the entire map | Limited to nearby units |
| Typical positioning | Behind the main line, with broad [[line-of-sight\|LoS]] | Close to the front line, within 1,000m of key [[task-groups\|TGps]] |
| Risk profile | Losing Main [[force-elements\|HQ]] is operationally devastating | Losing Tac [[force-elements\|HQ]] is serious but survivable if Main [[force-elements\|HQ]] remains |

#### Key Traits and Interactions

- **[[force-elements|ISTAR]] Asset:** The [[force-elements|HQ]] can provide [[line-of-sight|LoS]] for [[indirect-fire|Indirect Fire]]. If [[stacking|Embedded]] in a Tracked [[force-elements|PL]], it uses the Tracked [[force-elements|PL]]'s position for [[line-of-sight|LoS]] purposes. This means a well-positioned [[force-elements|HQ]] Stack can serve as both a fire support coordinator and a mobile command post.
- **[[stacking|Embedding]] rules:** A [[force-elements|SECT]] can [[stacking|Embed]] in any friendly Tracked [[force-elements|PL]] in the same [[task-groups|Task Group (TGp)]]. When Embedded, the [[force-elements|SECT]] takes the same Actions as the Tracked [[force-elements|PL]]. It rolls for Hit transfer on a "1" per Hit (i.e., there is only a 1-in-6 chance per Hit that the [[force-elements|SECT]] absorbs the blow instead of the vehicle). If the Tracked [[force-elements|PL]] is Eliminated, the [[force-elements|SECT]] is placed at the vehicle's last position.
- **[[morale|Morale]] synergy:** While [[stacking|Embedded]], the [[force-elements|HQ]] has the same [[morale|Morale Status]] as the Tracked [[force-elements|PL]]. If the Tracked [[force-elements|PL]] passes a [[morale|Rally test]], the [[force-elements|HQ]] benefits automatically. Conversely, if the [[force-elements|HQ]] were standalone and became [[morale|Disrupted]], it could [[stacking|Embed]] into a Stack at Good morale and immediately inherit the Good status -- a useful (if situational) trick.

#### Tactical Advice

- **Never leave the HQ alone.** Resilience 1 means a single Hit from any source Eliminates it. [[stacking|Embed]] it in a Tracked [[force-elements|Platoon (PL)]] at set-up and keep it there unless there is a compelling reason to Detach.
- **Position for [[line-of-sight|LoS]] and C2 coverage.** The [[force-elements|HQ]]'s value comes from being in the right place: within 250m of units needing Rally support, with [[line-of-sight|LoS]] to targets for [[indirect-fire|Indirect Fire]], and (for Tac [[force-elements|HQ]]) within 1,000m of [[task-groups|TGps]] needing Command Activation.
- **Use Command Activations for coordinated Assaults.** The most powerful use of Command Activation is to Activate multiple [[task-groups|TGps]] simultaneously to feed their [[force-elements|Force Elements (FEs)]] into a single Assault. This concentrates Assault Values for overwhelming ratios.
- **Common mistake: forgetting the ETX cost of Command Activations.** Each additional [[task-groups|TGp]] Command Activated gives the opponent 1 ETX marker. In a game where Electronic Warfare (EW) is critical, generating excessive ETX can give the enemy powerful EW Chits and Target markers.

**Scenario 1:** Tac/HQ 1 [[stacking|Embedded]] in 3-A-1 T [[force-elements|Platoon (PL)]]

---

### Reconnaissance Section (Recce SECT)

**What it represents:** A small reconnaissance element -- typically 2-3 light armoured vehicles (such as Scimitar, Fennek, or JLTV variants) equipped with advanced optics, thermal imaging, and organic drone assets. In real-world terms, Recce sections are the "eyes of the force," finding the enemy and directing fire onto them rather than fighting directly.

**Role on the battlefield:** The Recce [[force-elements|Section (SECT)]] is the premier observation unit. Its extended 4,000m [[line-of-sight|Line of Sight (LoS)]] (vs the standard 3,000m) lets it see further than any ground unit. As an [[force-elements|ISTAR]] Asset, it provides [[line-of-sight|LoS]] for [[indirect-fire|Indirect Fire]] -- Artillery, Mortars, and FPV drones all need an [[force-elements|ISTAR]] Asset to have [[line-of-sight|LoS]] to the target. The Recce's special 500m ISTAR exception in Dense Wood/Urban means it can spot targets that cannot see it back, directing devastating fire without exposing itself. Its reduced Danger Close distance (250m for Artillery, vs the normal 500m) means Artillery can land closer to it without risk. However, it is fragile (Resilience 2) and not a combat unit -- it should observe and direct, not fight.

#### Stats Table

| Stat | Full Strength | Reduced Strength |
|------|---------------|------------------|
| **Anti-Personnel (Apers)** | 2 (green) | 2 |
| **Anti-Tank (Atk)** | 2 (purple) | 2 |
| **Assault Value** | 1 | 1 |
| **[[force-elements\|Troop Quality (TQ)]]** | 6 | 5 |
| **Resilience** | 2 | 1 |

| Attribute | Value |
|-----------|-------|
| [[force-elements\|Force Element (FE)]] Type | T (purple square) |
| NATO symbol | Reconnaissance (diagonal slash) |
| Size | [[force-elements\|Section (SECT)]] (1 dot) |
| [[force-elements\|Intelligence, Surveillance, Target Acquisition & Reconnaissance (ISTAR)]] | **Yes** (star symbol) |
| [[line-of-sight\|Line of Sight (LoS)]] range | **4,000m** (vs standard 3,000m) |
| [[force-elements\|ISTAR]] exception | 500m in Dense Wood/Urban (does not need [[line-of-sight\|LoS]] back) |
| Danger Close (Artillery) | **250m** (vs standard 500m for other [[force-elements\|Force Elements (FEs)]]) |

#### What the Stats Mean in Play

**Anti-Personnel (Apers) 2, Anti-Tank (Atk) 2 (purple):** Reasonable stats for a [[force-elements|Section (SECT)]], but Recce should rarely be shooting. If it is in Direct Fire combat, it is probably in the wrong place. Reserve its Ammo and position for observation.

**4,000m LoS:** This means the Recce can draw [[line-of-sight|Line of Sight (LoS)]] to targets up to 4,000m away, a full 1,000m beyond the standard 3,000m limit. Combined with its [[force-elements|ISTAR]] status, this lets it spot for Artillery and FPV strikes on targets that no other ground unit can see.

**500m ISTAR exception in Dense Wood/Urban:** Normally, [[line-of-sight|LoS]] cannot be drawn through Dense Wood or Urban terrain (these are Obstructions). However, a Recce [[force-elements|FE]] can provide [[force-elements|ISTAR]] [[line-of-sight|LoS]] to targets within 500m, even in Dense Wood or Urban, **without the target needing [[line-of-sight|LoS]] back to the Recce**. This represents the Recce's organic optical and drone capabilities. In practice, this means a Recce can sneak up to the edge of an Urban area, spot enemy infantry inside it, and call in Artillery or FPV strikes on targets that have no idea they are being watched -- and cannot fire back.

**Danger Close 250m (Artillery):** Normally, Artillery cannot target an enemy [[force-elements|FE]] if any friendly [[force-elements|FE]] is within 500m of the target. For Recce, this restriction is reduced to 250m. This means the Recce can get closer to the target and still allow Artillery fire, which is critical when targets are in dense terrain where the Recce needs to be within 500m to use its [[force-elements|ISTAR]] exception.

**Resilience 2 / 1:** Fragile. Two Hits and the Recce is Eliminated. It should not be in positions where it takes fire. Its value is in what it sees, not what it shoots.

#### Tactical Advice

- **Position for observation, not combat.** Place the Recce where it has [[line-of-sight|LoS]] to likely enemy approach routes but is not exposed to Direct Fire. Hilltops, wood edges, and positions behind Light Wood (which is a Partial Obstruction, not a full one) are ideal.
- **Use the 500m ISTAR exception aggressively.** Moving the Recce within 500m of Urban or Dense Wood positions allows Artillery or FPV strikes on targets that are otherwise invisible. This is one of NATO's most powerful capabilities.
- **Can [[stacking|Embed]] for safety.** If the Recce is in danger, it can [[stacking|Embed]] in a friendly Tracked [[force-elements|PL]] in the same [[task-groups|TGp]]. While [[stacking|Embedded]], it still provides [[force-elements|ISTAR]] [[line-of-sight|LoS]] from the vehicle's position.
- **Common mistake: using Recce as a fighting unit.** New players sometimes see the Anti-Tank (Atk) 2 and think the Recce can contribute to a firefight. It can, technically, but losing it removes your ability to direct Indirect Fire effectively. The observation capability is worth far more than the meagre combat contribution.

---

### Fire Support Team Section (FST SECT)

**What it represents:** A Fire Support Team -- a small group of specialised observers (usually 2-4 soldiers with advanced targeting equipment) whose sole purpose is to locate targets and coordinate fire support. In real-world NATO armies, FSTs are attached to manoeuvre units to provide a dedicated link to artillery and air support.

**Role on the battlefield:** The FST is a pure [[force-elements|ISTAR]] Asset. It provides [[line-of-sight|Line of Sight (LoS)]] for [[indirect-fire|Indirect Fire]], similar to the Recce and [[force-elements|HQ]]. It has minimal combat capability and extremely low Resilience. It should always be [[stacking|Embedded]] in a Tracked [[force-elements|PL]] for protection.

#### Stats Table

| Stat | Value |
|------|-------|
| **[[force-elements\|Troop Quality (TQ)]]** | ~5-6 |
| **Resilience** | 1 |

| Attribute | Value |
|-----------|-------|
| Size | [[force-elements\|Section (SECT)]] (1 dot) |
| [[force-elements\|Intelligence, Surveillance, Target Acquisition & Reconnaissance (ISTAR)]] | **Yes** (star symbol) |

#### What the Stats Mean in Play

The FST has almost no independent combat value. Its TQ provides a marginal DRM if it is forced to fire, but that should never happen. Its sole purpose is to be an [[force-elements|ISTAR]] Asset -- providing [[line-of-sight|LoS]] for Artillery, Mortars, and FPV drone strikes.

**Resilience 1:** One Hit and it is gone. **Always [[stacking|Embed]] this unit.** A standalone FST on the map is a liability -- any incoming fire Eliminates it immediately.

#### Tactical Advice

- **[[stacking|Embed]] at set-up and leave it Embedded.** The FST should ride inside a Tracked [[force-elements|PL]] for the entire game, providing [[force-elements|ISTAR]] while the vehicle protects it.
- **Position the host vehicle for [[line-of-sight|LoS]].** Since the [[stacking|Embedded]] FST uses the Tracked [[force-elements|PL]]'s position for [[line-of-sight|LoS]] calculations, place the vehicle where the FST can see priority target areas.
- **Redundancy with HQ and Recce.** NATO has multiple [[force-elements|ISTAR]] Assets (HQ, Recce, FST, and the UAS drone). Having the FST [[stacking|Embedded]] in a different [[task-groups|TGp]] than the [[force-elements|HQ]] provides [[force-elements|ISTAR]] coverage across multiple parts of the map simultaneously.

---

### A1 Echelon Section (Logistics -- Advanced Mode Only)

**What it represents:** A logistics convoy of 2-3 supply trucks carrying ammunition and [[atgm|Anti-Tank Guided Missiles (ATGMs)]]. In real-world NATO terms, the A1 Echelon is the forward logistics element responsible for resupplying combat units during the battle. The term "A1" refers to the logistical element assigned to a combat unit in British Army terminology.

**Role on the battlefield:** The A1 Echelon exists solely to conduct [[replendem|REPLENDEM]] Actions -- resupplying friendly [[force-elements|Force Elements (FEs)]] with [[ammo|Ammo]] and [[atgm|ATGMs]]. It has no combat capability at all (it cannot fire, even if it carries [[atgm|ATGMs]]). It is used only in Advanced mode, where Ammo tracking becomes a critical consideration.

#### Stats Table

| Stat | Value |
|------|-------|
| **Anti-Personnel (Apers)** | -- |
| **Anti-Tank (Atk)** | -- |
| **Assault Value** | -- |
| **[[force-elements\|Troop Quality (TQ)]]** | 5 |
| **Resilience** | 1 |

| Attribute | Value |
|-----------|-------|
| [[force-elements\|Force Element (FE)]] Type | **W** (grey circle -- Wheeled) |
| NATO symbol | Supply/Logistics |
| Size | [[force-elements\|Section (SECT)]] (1 dot) |

#### What the Stats Mean in Play

**No combat values at all:** The dashes for Anti-Personnel (Apers), Anti-Tank (Atk), and Assault Value mean this unit **cannot fire or participate in Assaults under any circumstances**. It cannot even fire [[atgm|ATGMs]] it is carrying -- it is purely a transport.

**Wheeled (W) type with grey background:** The grey background means this unit can be targeted by any weapon -- Anti-Personnel (Apers) or Anti-Tank (Atk). It is the most vulnerable vehicle type.

**Resilience 1:** One Hit Eliminates it, and **all Ammo and ATGMs it is carrying are lost.** This is a potentially devastating loss in Advanced mode, where running out of Ammo cripples combat units.

#### Key Traits and Interactions

- **[[replendem|REPLENDEM]] Action:** The A1 Echelon transfers [[ammo|Ammo]] and/or [[atgm|ATGMs]] to any friendly [[force-elements|Force Elements (FEs)]] within 250m. Both the A1 Echelon and receiving [[force-elements|FE]] receive Reorg markers (cannot Activate that turn), and the opponent draws 1 Electronic Transmission (ETX) marker. This means resupply must be timed carefully -- it costs both an activation and generates enemy intelligence.
- **Wheeled movement:** Subject to Dense Wood No-Go (same as Tracked) and terrain-based movement restrictions. Wheeled [[force-elements|FEs]] are slower off-road than Tracked [[force-elements|FEs]] but can use Major Roads for Column Move (up to 3,000m if no enemy in [[line-of-sight|LoS]]).
- **Ammo capacity limits:** Foot [[force-elements|Platoons (PLs)]] can carry a maximum of 4 Ammo. Tracked [[force-elements|Platoons (PLs)]] can carry a maximum of 5 Ammo. The A1 Echelon cannot exceed these caps when resupplying.

#### Tactical Advice

- **Keep the A1 Echelon behind the front line.** It has no way to defend itself. Position it on a road behind Cover, close enough to reach forward units within one Move Action's distance.
- **Time your resupply.** The REPLENDEM Action gives both units a Reorg marker. Plan the resupply for a turn when the receiving [[force-elements|FE]] does not need to Activate (e.g., it has already Activated, or its [[task-groups|TGp]] is not needed this turn).
- **Protect the supply line.** If the enemy destroys your A1 Echelon, you lose all carried supplies permanently. In long games (5-6 turns), this can mean your combat units run dry and fight at "1" column for the rest of the game.
- **1-3 A1 Echelons per [[task-groups|Task Group (TGp)]]** in Advanced mode [[glossary|Order of Battle (ORBAT)]]s, depending on the scenario.

---

## Mortar Force Element

### Mortar Platoon (Mor)

**What it represents:** A platoon of 120mm mortars (the standard NATO calibre) with their crews, positioned on the map as a firing unit. In real-world terms, a mortar platoon of 4-6 tubes can deliver rapid, high-angle indirect fire on targets within its range. Mortars are responsive, flexible, and under the direct control of the local commander, unlike artillery which is often controlled at a higher echelon.

**Role on the battlefield:** The Mortar [[force-elements|Platoon (PL)]] is NATO's primary on-map [[indirect-fire|Indirect Fire]] asset. Unlike the Artillery [[support-assets|Support Asset (SA)]], the Mortar is a [[force-elements|Force Element (FE)]] that occupies a position on the map, can be targeted by the enemy, and has limited range (8,000m). It has its own [[task-groups|Task Group (TGp)]] and receives both manoeuvre [[orders|Orders]] (for movement) and [[fire-plans|Fire Plans]] (for firing) on the [[sync-matrix|Sync Matrix]].

#### Stats Table

| Attribute | Value |
|-----------|-------|
| Fire type | Mortar ([[indirect-fire\|Indirect Fire]]) |
| Max range | 8,000m |
| Danger Close | 250m |
| Auto Suppression | Dismounted Foot [[force-elements\|Force Elements (FEs)]] within 250m of target |
| [[indirect-fire\|Fire Missions (FM)]] | Set by scenario [[glossary\|Order of Battle (ORBAT)]] (typically 5) |

#### What the Stats Mean in Play

**Mortar Indirect Fire:** Mortars use the Mortar row on the Indirect Fire Results Table. The player rolls 2D6 and applies DRMs from the Indirect Fire DRM Table. Key modifiers include: +2 if a [[support-assets|Unmanned Aerial Support drone (UAS)]] has [[line-of-sight|LoS]] to the target, +1 if a Recce [[force-elements|SECT]] has [[line-of-sight|LoS]], and negative DRMs for targeting vehicles with Moved markers (-3), Cover, and Shell Scrapes.

**8,000m range:** Sufficient to cover most of a single map (maps are approximately 4,000m x 4,000m). In multi-map scenarios, the Mortar's position matters -- it may need to move to reach targets in far areas.

**Danger Close 250m:** The Mortar can fire at enemy [[force-elements|Force Elements (FEs)]] as long as no friendly [[force-elements|FE]] is within 250m of the target. This is tighter than Artillery's 500m restriction, making Mortars more usable in close-quarters situations.

**Automatic Suppression:** Regardless of whether the Mortar's fire achieves any Hits, all Dismounted Foot [[force-elements|Force Elements (FEs)]] within 250m of the targeted [[force-elements|FE]] automatically receive a [[morale|Suppression]] marker (if they do not already have one). This makes Mortars excellent for disrupting enemy infantry concentrations even when the dice do not cooperate.

**Fire Missions:** Each Mortar fire uses one Fire Mission from a limited pool (set by the [[glossary|ORBAT]]). When the pool reaches 0, the Mortar cannot fire again. In Advanced mode, Fire Missions are tracked on the Fire Mission / Ammo Card.

#### Key Traits and Interactions

- **On the map and targetable:** Unlike Artillery and FPV [[support-assets|Support Assets (SAs)]], the Mortar is physically on the map and can be targeted by enemy Direct and Indirect Fire. Position it behind terrain that blocks enemy [[line-of-sight|LoS]] -- behind a hill, in Light Wood, or behind a Dense Wood block.
- **Own [[line-of-sight|LoS]] or [[force-elements|ISTAR]]:** The Mortar can fire using its own [[line-of-sight|LoS]] (3,000m standard) or the [[line-of-sight|LoS]] of any friendly [[force-elements|ISTAR]] Asset. Using its own [[line-of-sight|LoS]] risks exposing it to enemy fire, so [[force-elements|ISTAR]]-directed fire is generally preferable.
- **Can fire [[indirect-fire#Smoke|Smoke]]:** Smoke markers create Partial Obstructions (-3 DRM for Direct Fire through them) and provide a DRM for the Attacker in Assaults. Smoke placement does not require a roll -- it is automatic. Using Smoke to screen an Assault approach or block enemy [[line-of-sight|LoS]] to key positions is extremely powerful.
- **Has its own [[task-groups|TGp]]:** The Mortar receives both Orders (for movement phases) and Fire Plans (for firing). On the [[sync-matrix|Sync Matrix]], it might show "Manoeuvre to position X" for Turn 1, then "Fire Plan GI E32/N50" for Turns 2-6. Firing within the Fire Plan area generates only 1 ETX marker for the opponent; firing outside generates 3 ETX.

#### Tactical Advice

- **Position early, fire often.** Get the Mortar to its firing position in Turn 1, then keep it there firing for the rest of the game. Every turn spent moving is a turn not firing.
- **Use Smoke to support Assaults.** Before a major Assault, fire Smoke between the enemy and any [[force-elements|Force Elements (FEs)]] that could provide supporting Direct Fire. This blocks [[line-of-sight|LoS]] and prevents Reactive Fire from units outside the Assault area.
- **Coordinate Fire Plans with anticipated enemy positions.** Firing within the Fire Plan area generates only 1 ETX (vs 3 outside). Plan your Fire Plans around where you expect the enemy to be, not where you hope they will be.

**Scenario 1:** Mor-1 ([[task-groups|TGp]] 4), 5 [[indirect-fire|Fire Missions (FM)]], starts at Grid Square (GS) E202/N235

---

## Support Assets (Off-Map -- Cannot Be Targeted)

[[support-assets|Support Assets (SAs)]] are not [[force-elements|Force Elements (FEs)]]. They represent assets controlled by higher headquarters that support the player's force. They cannot be targeted by enemy fire. They are Activated like [[task-groups|Task Groups (TGps)]] but can only take Hold, Move (UAS only), or Indirect Fire (Artillery, FPV) Actions.

---

### 155mm Artillery Support Asset

**What it represents:** A battery of 155mm howitzers -- the standard NATO heavy artillery calibre. These guns are positioned far behind the front line (off-map) and fire high-explosive or smoke shells at targets identified by [[force-elements|ISTAR]] Assets. In real-world terms, a 155mm battery can deliver devastating firepower at ranges exceeding 20km, but in the game the range is unlimited (the battery is off-map and can reach anywhere).

**Role on the battlefield:** The most powerful [[indirect-fire|Indirect Fire]] asset in the game. It Auto Suppresses **all [[force-elements|Force Element (FE)]] types** within 250m of the target (not just Foot [[force-elements|FEs]] like Mortar and FPV). Its Hits bypass the colour targeting system entirely, meaning it can damage gold-type [[force-elements|Main Battle Tanks (MBTs)]]. However, it always requires an [[force-elements|ISTAR]] Asset to have [[line-of-sight|LoS]] to the target, and its Danger Close restriction of 500m (250m for Recce) means it cannot fire near friendly units.

#### Stats Table

| Attribute | Value |
|-----------|-------|
| Range | **Unlimited** (off-map) |
| Danger Close | 500m (250m for friendly Recce) |
| Auto Suppression | **All [[force-elements\|Force Element (FE)]] types** within 250m |
| [[force-elements\|Intelligence, Surveillance, Target Acquisition & Reconnaissance (ISTAR)]] required | **Always** |
| [[indirect-fire\|Fire Missions (FM)]] | Set by [[glossary\|Order of Battle (ORBAT)]] |
| [[fire-plans\|Fire Plan]] ETX | 1 ETX in Fire Plan area; 3 ETX outside Fire Plan area |

#### What the Stats Mean in Play

**Unlimited range:** The Artillery can reach any target on the map, regardless of distance. This makes it a truly strategic asset -- it can respond to threats anywhere, provided an [[force-elements|ISTAR]] Asset has [[line-of-sight|LoS]].

**Auto Suppression of all FE types:** This is unique to Artillery. Mortar and FPV only Auto Suppress Dismounted Foot [[force-elements|FEs]]. Artillery Auto Suppresses **everything** -- Foot, Wheeled, and Tracked -- within 250m of the target. This means even if the Artillery roll misses, every enemy unit nearby receives a [[morale|Suppression]] marker, halving their movement and applying -1 to their TQ for subsequent actions.

**500m Danger Close:** NATO cannot fire Artillery at an enemy target if any friendly [[force-elements|FE]] is within 500m of that target. This is a significant restriction in close engagements. The exception is Recce, which only has a 250m Danger Close -- this makes the Recce [[force-elements|SECT]]'s ability to get close to targets and still allow Artillery fire particularly valuable.

**Note:** NATO does **not** have Artillery in Scenario 1 (it is deployed elsewhere per the scenario briefing). This is a significant disadvantage.

---

### First Person View Drone (FPV) Support Asset

**What it represents:** A drone with offensive capability -- a First Person View (FPV) drone armed with an explosive payload that can be piloted into a target. In real-world terms, FPV drones have become a defining weapon of modern warfare, cheap and disposable but highly effective against both vehicles and infantry positions.

**Role on the battlefield:** The FPV provides precision strike capability without the Danger Close restrictions of Artillery. It can target any [[force-elements|Force Element (FE)]] type, requires [[force-elements|ISTAR]] [[line-of-sight|LoS]], and has a unique Double-Tap capability allowing it to strike the same target twice in one Activation.

#### Stats Table

| Attribute | Value |
|-----------|-------|
| Range | **Unlimited** (off-map) |
| Danger Close | **None** |
| Auto Suppression | Dismounted Foot [[force-elements\|Force Elements (FEs)]] within 250m |
| [[force-elements\|Intelligence, Surveillance, Target Acquisition & Reconnaissance (ISTAR)]] required | **Always** |
| [[indirect-fire#FPV Double-Tap\|Double-Tap]] | Can fire twice at same target in one Activation |
| [[indirect-fire\|Fire Missions (FM)]] | Set by [[glossary\|Order of Battle (ORBAT)]] |
| [[fire-plans\|Fire Plan]] ETX | 0 ETX in Fire Plan area; 3 ETX outside Fire Plan area |

#### What the Stats Mean in Play

**No Danger Close:** Unlike Artillery and Mortars, the FPV has no Danger Close restriction. It can target an enemy [[force-elements|FE]] even if a friendly [[force-elements|FE]] is adjacent. This makes the FPV the ideal fire support weapon for close engagements where Artillery cannot fire.

**Double-Tap:** The FPV can immediately fire a second time at the same target after the first shot is resolved. This uses a second Fire Mission but does not generate additional ETX. It is resolved as a separate roll, meaning both shots have independent chances of success. Against a high-priority target, this is effectively two attempts to Hit for the price of one Activation.

**0 ETX in Fire Plan area:** When firing within the Fire Plan area, the FPV generates **zero** ETX for the opponent -- it is completely silent electronically. This makes it the most ETX-efficient Indirect Fire option. Outside the Fire Plan area, it generates 3 ETX, same as other Indirect Fire types.

**Scenario 1:** FPV A, 4 [[indirect-fire|Fire Missions (FM)]]

---

### Unmanned Aerial Support Drone (UAS) Support Asset

**What it represents:** A surveillance drone providing persistent aerial observation over the battlefield. In real-world terms, this could be a Shadow, Scan Eagle, or similar medium-altitude tactical drone providing real-time video feed to commanders.

**Role on the battlefield:** The UAS is the ultimate observation platform. It has [[line-of-sight|LoS]] to the 4 Grid Squares (GS) adjacent to its Grid Intersection, ignoring all Obstructions (it sees through Dense Wood, Urban, Hills -- everything). It can be moved to any Grid Intersection on the map each turn. It is critical for providing [[force-elements|ISTAR]] [[line-of-sight|LoS]] for [[indirect-fire|Indirect Fire]], and its presence adds a +2 DRM to Indirect Fire rolls.

#### Stats Table

| Attribute | Value |
|-----------|-------|
| [[line-of-sight\|Line of Sight (LoS)]] | 4 adjacent Grid Squares (ignores all Obstructions) |
| Movement | Any Grid Intersection on the map |
| Begins | Off-map (placed on first Move Action) |
| [[force-elements\|ISTAR]] | **Yes** -- provides [[line-of-sight\|LoS]] for [[indirect-fire\|Indirect Fire]] |

#### What the Stats Mean in Play

**4 adjacent Grid Squares, ignoring Obstructions:** The UAS is placed on a Grid Intersection. It has [[line-of-sight|LoS]] to everything in the four Grid Squares surrounding that intersection. Dense Wood, Urban terrain, Hills -- none of it blocks the UAS's view. If any part of an enemy [[force-elements|FE]]'s counter is in one of those Grid Squares, the UAS has [[line-of-sight|LoS]] to it. This makes the UAS the most reliable [[force-elements|ISTAR]] Asset in the game.

**+2 DRM on Indirect Fire:** When the UAS has [[line-of-sight|LoS]] to the target, it provides a +2 DRM to the Indirect Fire roll. This is the single largest positive modifier available for Indirect Fire. Always try to position the UAS to cover your primary fire targets.

**Any Grid Intersection:** The UAS can be moved to any point on the map in a single Move Action. There is no movement restriction. This means the player can reposition it every turn to cover different sectors of the battlefield.

**Scenario 1:** UAS A

---

## NATO Anti-Tank Guided Missiles (ATGMs)

[[atgm|Anti-Tank Guided Missiles (ATGMs)]] are represented by triangular markers placed on top of or adjacent to the [[force-elements|Force Element (FE)]] counter that possesses them. They are double-sided: the non-striped side is "Full" (two uses), the striped side is "Depleted" (one use). After the first use, flip to Depleted. After the second use, remove the marker entirely.

ATGMs function as **gold Anti-Tank (Atk)** when fired, meaning they can target any vehicle type including gold-type [[force-elements|Main Battle Tanks (MBTs)]]. They use dedicated columns on the ATGM Fire Results Table (separate from the standard Direct Fire Results Table), and their range is printed on the marker (the number x 1,000m).

| [[atgm\|Anti-Tank Guided Missile (ATGM)]] | Range | Font Colour | Uses per Full Marker | Key Notes |
|---|---|---|---|---|
| **NLAW** | 1,000m | Blue | 2 (Full) or 1 (Depleted) | Short range, infantry-standard, effective ambush weapon at close range |
| **Javelin** | 3,000m | Blue | 2 (Full) or 1 (Depleted) | Long range, matches [[force-elements\|MBT]] gun range, devastating fire-and-forget weapon |

### NLAW (Next generation Light Anti-tank Weapon)

**Range: 1,000m.** The NLAW is a short-range anti-tank weapon designed for infantry use at close quarters. Its 1,000m range means it can only engage targets within the same or adjacent Grid Squares. This is effective in defensive positions (especially in Dense Wood or Urban terrain where vehicles must approach closely) but limits its use in open engagements. The NLAW uses its own column on the ATGM Fire Results Table.

### Javelin

**Range: 3,000m.** The Javelin is NATO's signature long-range anti-tank weapon. Its 3,000m range matches the [[force-elements|Main Battle Tank (MBT)]]'s gun range, meaning a Foot [[force-elements|Platoon (PL)]] with a Javelin can engage enemy tanks before they can close to Direct Fire range (most vehicles have only 2,000m Anti-Tank (Atk) range). The Javelin's fire-and-forget capability is abstracted in the game through its dedicated ATGM column and its gold targeting.

**The Javelin is one of NATO's most important weapons.** In the Example of Play, the NATO player's Javelin Reactive Fire from 1-B-1 against the advancing Russian 2-A-1 Stack scores 2 Hits on the Tracked [[force-elements|FE]] and 1 Hit on the [[stacking|Mounted]] Foot [[force-elements|PL]], crippling an entire Russian [[force-elements|Platoon (PL)]] in a single shot. The 3,000m range means NATO can threaten approaching Russian armour long before they close to engagement distance.

### ATGM Interactions

- **Any [[force-elements|FE]] can carry an [[atgm|ATGM]]:** The marker is placed on or adjacent to the [[force-elements|FE]]'s counter. The [[force-elements|FE]] chooses each time it fires whether to use its inherent Firepower Values or the [[atgm|ATGM]].
- **[[force-elements|Sections (SECTs)]] can only carry Depleted [[atgm|ATGMs]]:** A [[force-elements|SECT]] can carry an [[atgm|ATGM]] but only on its Depleted side (one use only).
- **Using an [[atgm|ATGM]] does not cost Ammo:** In Advanced mode, firing an [[atgm|ATGM]] does not reduce the [[force-elements|FE]]'s Ammo count. This makes [[atgm|ATGMs]] precious -- they provide firepower without consuming the limited Ammo supply.
- **Resupply via [[replendem|REPLENDEM]]:** A1 Echelons can carry and deliver [[atgm|ATGMs]] to front-line units.

---

## What Makes NATO Distinctive (vs Russia)

Understanding how NATO differs from Russia is essential to playing either side effectively. The asymmetry is the heart of Battlegroup Clash: Baltics.

### NATO's Advantages

| Factor | NATO | Russia | Impact |
|--------|------|--------|--------|
| **[[force-elements\|Troop Quality (TQ)]]** | 6 (full) / 5 (reduced) | 5 (full) / 4 or 3 (reduced) | NATO rolls with +2 DRM at full strength vs Russia's +1 or +0. This affects Direct Fire, Assaults, and Rally tests. NATO shoots more accurately, fights harder in close combat, and recovers from Morale effects more easily. |
| **Resilience** | 4 (standard for [[force-elements\|PLs]]) | 3 (standard for [[force-elements\|PLs]]) | NATO [[force-elements\|Platoons (PLs)]] absorb one extra Hit before Elimination. This 33% increase in staying power compounds over multiple engagements. |
| **[[move-fire\|Move-Fire]] penalty** | **-1 DRM** | **-2 DRM** | NATO vehicles can fire while moving with only -1 penalty, vs Russia's -2. With TQ 6 (+2), a NATO vehicle on Move-Fire fires at net +1 DRM. A Russian vehicle with TQ 4 (+0) and -2 Move-Fire fires at net -2 DRM. That is a **3-point swing** on the same roll. |
| **Javelin range** | **3,000m** | Stabber: 3,000m, but NATO [[force-elements\|MBTs]] also have 3,000m gun range | NATO Foot [[force-elements\|PLs]] with Javelins can threaten Russian armour at the same range as [[force-elements\|MBTs]], creating multiple overlapping threat zones. |
| **[[mission-command\|Mission Command]]** | Can issue New Orders to 1 [[task-groups\|TGp]] per turn **without Reorg or ETX** | [[red-doctrine\|Red Doctrine]]: **Cannot deviate** from Orders or Fire Plans at all | NATO can adapt one [[task-groups\|TGp]]'s orders every turn at zero cost. Russia is locked into its pre-battle plan with no ability to change. This gives NATO enormous tactical flexibility. |
| **[[glossary\|C2]] Rating** | 3 | 2 (typical) | +3 DRM vs +2 DRM for Initiative, Assaults, and Rally tests. NATO wins Initiative ties and gets a bigger bonus in Assaults. |

### Russia's Advantages

| Factor | Russia | NATO | Impact |
|--------|--------|------|--------|
| **More units** | More [[force-elements\|Force Elements (FEs)]] in most scenarios | Fewer [[force-elements\|FEs]] | NATO's qualitative edge is offset by Russia's numerical superiority. Russia can absorb losses that NATO cannot. |
| **More Artillery** | Typically more [[indirect-fire\|Fire Missions (FM)]] for 152mm | Often no Artillery (e.g., Scenario 1) | Russia's fire support advantage is significant. In Scenario 1, NATO has no Artillery at all, while Russia has 5 Fire Missions of 152mm. |
| **Better Electronic Warfare (EW)** | Draws 2 EW Chits (keeps 1) in Advanced mode; more FPV Fire Missions | Draws 1 EW Chit | Russia's EW advantage reflects the doctrinal emphasis on electronic warfare. More FPV Fire Missions and better EW Chit selection create a non-kinetic advantage. |
| **Attack Platoon (Russia-only)** | Dedicated anti-tank [[force-elements\|Section (SECT)]] with embedded Stabber [[atgm\|ATGM]] | No equivalent | Russia has purpose-built anti-tank units that NATO lacks. |

### The Fundamental Asymmetry

From the designer's notes: *"In the Scenarios represented you have the cream of European NATO fighting against poorer trained, motivated and equipped Russian forces. Hence the NATO forces have greater resilience and troop quality. However, the Russians have greater numbers and are better at drone and electronic warfare. Overall it is intended to balance out, though this may only really become clear in the Advanced mode."*

The NATO player must fight a **quality-over-quantity** battle. Every NATO [[force-elements|Force Element (FE)]] is individually superior, but there are fewer of them. Losing a single NATO [[force-elements|Platoon (PL)]] is proportionally far more devastating than Russia losing one. The NATO player must preserve their forces while using their qualitative edge (TQ, Resilience, Move-Fire, Mission Command) to achieve objectives efficiently.

---

## How to Play NATO: Strategic Guidance

This section synthesises the rulebook's design notes, the Example of Play, and the tactical principles embedded in the game mechanics into practical guidance for the NATO player.

### 1. Plan Defensively, Strike Selectively

NATO's smaller force means it cannot afford a war of attrition. In most scenarios, the NATO player is either defending (waiting for Russian forces to approach) or conducting a deliberate advance with limited forces. The Example of Play in Scenario 1 shows NATO's approach perfectly: Sean (the NATO player) gives all three [[task-groups|Task Groups (TGps)]] [[overwatch|Overwatch]] Actions in Turn 1, waiting to see where the Russian forces appear before committing. He is "playing a waiting game."

**Key principle:** Do not commit your forces until you know where the enemy is. Use [[overwatch|Overwatch]] to maintain Reactive Fire capability while you gather intelligence.

### 2. Exploit the Overwatch/Reactive Fire Cycle

[[overwatch|Overwatch]] Actions persist between Turns -- the marker is only removed when the [[force-elements|FE]] Reactive Fires, takes a different Action, or receives Reorg. This means a NATO [[force-elements|FE]] on [[overwatch|Overwatch]] can threaten Russian movement every turn without spending Activations. With TQ 6 (+2 DRM) and the +2 DRM for having an Overwatch marker, a NATO [[force-elements|FE]] on Overwatch fires at +4 DRM net -- devastating.

In the Example of Play, 1-B-1's Reactive Fire with a Javelin against the moving Russian 2-A-1 Stack produces 2 Hits (roll of 6 +2 TQ +2 Overwatch = 10). This single shot cripples an entire Russian platoon.

**Key principle:** Keep as many units on [[overwatch|Overwatch]] as possible. The threat of Reactive Fire constrains Russian movement far more than Direct Fire from your turn.

### 3. Use Terrain Aggressively

NATO infantry can enter Dense Wood freely. Vehicles cannot (except on Roads). This means a Foot [[force-elements|Platoon (PL)]] in Dense Wood with a Shell Scrape is extremely difficult to dislodge:

- Dense Wood provides -2 [[line-of-sight#Cover|Cover]] DRM
- Shell Scrape provides -2 DRM
- Total: **-4 DRM** against incoming fire

In the Example of Play, Sean positions his 1-A-1 [[force-elements|FE]] dug into Dense Wood. When Tom considers attacking it with the FPV, he calculates the total DRM (-4 for Cover + Shell Scrape, +1 for Recce [[line-of-sight|LoS]] = -3 net) and decides he would need to roll 11 on 2D6 to achieve a Hit. He decides it is not worth the Fire Mission.

**Key principle:** Get infantry into Dense Wood or Urban terrain, dig Shell Scrapes, and force the enemy to waste fire trying to dislodge them.

### 4. Protect Your ATGMs -- They Are Irreplaceable (in Basic/Standard)

In Basic and Standard mode, there is no resupply mechanic. Once an [[atgm|ATGM]] is used up (both shots from a Full marker, or one shot from a Depleted marker), it is gone forever. The Javelin in particular is NATO's primary anti-tank weapon -- losing it or wasting shots is catastrophic.

**Key principle:** Never fire an [[atgm|ATGM]] at a low-priority target. Save Javelins for enemy [[force-elements|Main Battle Tanks (MBTs)]] or high-value Stacks. Save NLAWs for enemy IFVs/APCs that approach within 1,000m.

### 5. Use Mission Command to Adapt

In Advanced mode, NATO's [[mission-command|Mission Command]] rule allows issuing New Orders to one [[task-groups|Task Group (TGp)]] per turn without Reorg or ETX cost. Russia has no equivalent -- [[red-doctrine|Red Doctrine]] locks Russian forces into their pre-battle plan.

This is NATO's strategic trump card. If a Russian force appears where you did not expect it, you can redirect one [[task-groups|TGp]] to respond immediately, with no penalty. Meanwhile, the Russian player cannot change their plan at all.

**Key principle:** Keep a [[task-groups|TGp]] in reserve (on a flexible Order like "Screen" or "Secure") that you can redirect using Mission Command when the situation demands it.

### 6. Coordinate Indirect Fire with ISTAR

NATO has multiple [[force-elements|ISTAR]] Assets: the [[force-elements|HQ]], Recce, FST, and UAS. Each provides [[line-of-sight|LoS]] for [[indirect-fire|Indirect Fire]]. The UAS is the most powerful (+2 DRM on Indirect Fire when it has [[line-of-sight|LoS]]), but it reveals your intentions when placed on the map (the opponent can see where it is pointing).

**Key principle:** Position the UAS to cover your Fire Plan areas. Use Recce's 4,000m [[line-of-sight|LoS]] and 500m Dense Wood/Urban exception to spot for fires in areas the UAS cannot reach. Keep the [[force-elements|HQ]] [[stacking|Embedded]] but positioned with [[line-of-sight|LoS]] to alternative firing targets.

### 7. Manage the ETX Economy

Every time NATO fires Artillery or Mortars, moves its UAS, Command Activates additional [[task-groups|TGps]], or issues New Orders, the Russian player draws ETX markers. High ETX totals give Russia more Target markers (+DRM on their fires) and additional EW Chits (which can jam your FPV, reduce your movement, or boost Russian fire).

**Key principle:** Minimise unnecessary ETX generation. Fire within your [[fire-plans|Fire Plan]] area whenever possible (1 ETX vs 3 ETX). Use Mission Command for one free Order change per turn. Be selective about Command Activations -- each extra [[task-groups|TGp]] activated costs 1 ETX.

### 8. Win the Initiative

NATO's C2 Rating of 3 provides a +3 DRM to the Initiative roll (vs Russia's typical +2). Winning Initiative lets you choose who activates first in the Action Round. Usually, you want to go second -- this lets you see what Russia does before committing, and ensures your Overwatch [[force-elements|Force Elements (FEs)]] can Reactive Fire against Russian movement before Russia can remove the threat.

However, sometimes you want to go first -- for example, to give a key [[force-elements|FE]] an Overwatch marker before Russia can target it, or to fire Artillery before Russian forces move out of position.

**Key principle:** Think about Initiative every turn. If you win it, consider whether going first or forcing Russia to go first serves your plan better.

### 9. Accept Losses, But Not Recklessly

NATO will take losses. The Russian player has more units, more Artillery, and more FPV drones. The key is ensuring that each NATO loss is traded for disproportionate Russian losses. A 1:1 exchange ratio favours Russia because Russia has more to lose. NATO needs 2:1 or 3:1 exchange ratios to win.

From the design notes: *"These forces will need to live with scarcity."*

**Key principle:** Trade space for time. Pull Back before a unit is Eliminated if it can fight again later from a better position. A Foot [[force-elements|Platoon (PL)]] at Resilience 1 still has Anti-Personnel (Apers) 3 and Assault Value 3 -- it fights at full firepower even when barely alive. Do not let it die needlessly.
