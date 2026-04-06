---
title: Russia Unit Catalog
type: unit
tags: [russia, units, counters, orbat, stats, tactics, asymmetry]
sources: [Rulebook - FINAL.pdf, RUSSIA SCENARIO 1.pdf, counter-scans]
created: 2026-04-05
updated: 2026-04-05
---

# Russia Unit Catalog

This page is the comprehensive reference for all [[russia|Russian]] [[force-elements|Force Element (FE)]] and [[support-assets|Support Asset (SA)]] types in Battlegroup Clash: Baltics (BC:B). Russian counters are **red/salmon** in colour.

Russia fields a combined arms force of mechanised infantry, main battle tanks, reconnaissance, artillery, and drones -- broadly modelled on the Russian **Motorised Rifle Battalion** structure. Compared to [[nato|NATO]], Russian units are **more numerous** but individually **worse** in almost every measurable stat: lower [[morale|Troop Quality (TQ)]], lower [[combat-effectiveness|Resilience]], worse [[move-fire|Move-Fire]] accuracy, and -- critically -- their [[force-elements|Main Battle Tanks (MBTs)]] carry only purple [[glossary|Anti-Tank (Atk)]] firepower, meaning they **cannot penetrate NATO MBT armour** with their main gun. Understanding these asymmetries, and how to fight despite them, is essential to playing Russia effectively.

**Acronym key (first use on this page):** All acronyms are expanded on first use and linked. Key terms: [[force-elements|Force Element (FE)]], [[support-assets|Support Asset (SA)]], [[glossary|Anti-Personnel (Apers)]], [[glossary|Anti-Tank (Atk)]], [[force-elements|Troop Quality (TQ)]], [[force-elements|Platoon (PL)]], [[force-elements|Section (SECT)]], [[force-elements|Headquarters (HQ)]], [[force-elements|Main Battle Tank (MBT)]], [[force-elements|Infantry Fighting Vehicle (IFV)]], [[force-elements|Armoured Personnel Carrier (APC)]], [[force-elements|Intelligence, Surveillance, Target Acquisition & Reconnaissance (ISTAR)]], [[glossary|Dice Roll Modifier (DRM)]], [[atgm|Anti-Tank Guided Missile (ATGM)]], [[line-of-sight|Line of Sight (LoS)]], [[glossary|Electronic Transmission (ETX)]], [[electronic-warfare|Electronic Warfare (EW)]], [[glossary|Command & Control (C2)]], [[glossary|Order of Battle (ORBAT)]], [[task-groups|Task Group (TGp)]], [[support-assets|First Person View drone (FPV)]], [[support-assets|Unmanned Aerial Support drone (UAS)]], [[indirect-fire|Fire Mission (FM)]].

---

## Understanding Russian Stats: The Systemic Disadvantage

Before diving into individual units, it is critical to understand how Russia's baseline stats translate into gameplay. Every Russian unit shares a set of structural disadvantages compared to its NATO counterpart. These compound across every engagement and every turn.

### Troop Quality (TQ): The Invisible Penalty

TQ is the single most important stat in BC:B. It applies as a DRM to:
- **Direct Fire rolls** (the main way to deal damage)
- **Assault rolls** (close-quarters combat resolution)
- **Rally tests** (recovering from Suppressed/Disrupted status)

The TQ DRM is calculated relative to a baseline of 4:

| TQ Value | DRM Effect | Who Has It |
|----------|------------|------------|
| **3** | **-1** (penalty) | Russian PLs at half Resilience |
| **4** | **0** (neutral, no modifier) | Russian PLs at full Resilience |
| **5** | **+1** (bonus) | NATO PLs at half Resilience; some Russian HQs |
| **6** | **+2** (bonus) | NATO PLs at full Resilience |

What this means in practice: a full-strength Russian PL firing at an enemy gets **no TQ bonus** (TQ 4 = 0 DRM). A full-strength NATO PL firing at the same target gets **+2 DRM** from TQ alone. That is a massive difference on a 2D6 roll -- it shifts the average result by two full columns on the Direct Fire Results Table. Russian units and NATO units may have the same printed Firepower Values (e.g. both have Apers 3 on infantry), but Russian shots consistently produce worse results because TQ drags their modified roll downward.

It gets worse: once a Russian PL takes enough Hits to flip to its half-Resilience side, its TQ drops to **3**, imposing a **-1 DRM**. A damaged Russian PL is rolling at -1 while a damaged NATO PL (TQ 5) is still rolling at +1. That is a three-point swing on every single die roll.

### Resilience 3 vs NATO's 4: One Hit Sooner

Russian PLs start with **Resilience 3**. NATO PLs start with **Resilience 4**. This means:

- A Russian PL is **Eliminated after 3 Hits**; a NATO PL survives until 4 Hits.
- A Russian PL reaches its weaker half-Resilience side (with reduced TQ) after just **2 Hits**; NATO requires 3.
- In a firefight between equal units, the Russian PL will degrade and die first.

The design notes state this reflects "lower Russian troop numbers in similar-sized units, and the attritional effects of the invasion by Russia being simulated."

### Move-Fire: -2 vs -1

When firing while moving (the [[move-fire|Move-Fire]] Action), Russian units suffer a **-2 DRM** penalty. NATO units suffer only **-1 DRM**. Combined with the TQ disadvantage, a moving Russian unit firing is at a catastrophic modifier deficit compared to a moving NATO unit: the Russian PL rolls at -2 (Move-Fire) + 0 (TQ 4) = **-2 total**, while NATO rolls at -1 (Move-Fire) + 2 (TQ 6) = **+1 total**. That is a three-point gap from identical positions.

This makes Russian "shoot and scoot" tactics far less effective. Russian units must either stop to fire accurately (making them vulnerable to return fire and Overwatch) or accept substantially degraded fire results while moving.

---

## Platoon-Sized Force Elements (PL -- 3 dots)

Platoons are the primary combat units of any force. They have higher Resilience (can take more Hits), stronger Firepower Values, and represent the bulk of combat power on the map.

---

### Infantry Platoon (Foot PL)

**Real-world equivalent:** A Russian motorised rifle platoon dismounted from its vehicles -- approximately 25-30 soldiers armed with assault rifles, machine guns, and RPGs. In BC:B, this represents the foot-mobile infantry component of a mechanised infantry platoon. Every Foot PL shares an ID with a corresponding Tracked PL (they are the dismounted and mounted halves of the same unit).

**Role on the battlefield:** Infantry is essential for Assaults (close-quarters combat) and for fighting in Dense Wood and Urban terrain where vehicles cannot operate effectively. Russian infantry has the same raw combat stats as NATO infantry (Apers 3, Assault 3) but worse TQ and Resilience, making it less effective at everything it does.

| Stat | Full Strength | Half Resilience |
|------|---------------|-----------------|
| **Apers** | 3 (green) | 3 |
| **Atk** | -- | -- |
| **Assault** | 3 | 3 |
| **TQ** | 4 | 3 |
| **Resilience** | 3 -> 2 | 1 |

| Attribute | Value |
|-----------|-------|
| FE Type | **F** (green diamond -- Foot) |
| NATO symbol | Infantry (crossed rifles) |
| Range (Apers) | 2,000m |
| Size | PL (3 dots) |
| Can target | Foot (green diamond), Wheeled (grey circle) |
| Targeted by | Apers (green) only |

#### How Each Stat Affects Gameplay

**Apers 3 (green):** When this unit fires at enemy Foot or Wheeled targets, you roll 2D6 and consult the **3 column** of the Direct Fire Results Table. The "green" colour means it can only target units with a green (Foot) or grey (Wheeled) FE Type icon -- it cannot fire at Tracked vehicles (purple or gold) at all without an ATGM. This is the same value as NATO infantry; the difference is in the DRMs applied to the roll.

**No Atk value:** Infantry has no inherent anti-vehicle capability. It cannot Direct Fire at any Tracked FE (IFVs, APCs, or MBTs) unless equipped with an ATGM (RPG or Stabber, carried as a separate marker). This is a critical limitation -- infantry alone cannot stop an armoured advance.

**Assault 3:** In an Assault, each side totals the Assault Values of all participating FEs to form a ratio. Assault 3 is the highest Assault Value in the game (shared with NATO infantry). In ratio calculations, more infantry means a higher total, which determines which row of the Assault Results Table you use. Two Russian Foot PLs assaulting together contribute 6 to the Attacker's ratio.

**TQ 4 (full) / TQ 3 (half):** At full strength, TQ 4 provides **0 DRM** -- no bonus and no penalty. This means Russian infantry relies entirely on other modifiers (Target markers, terrain, Cover) to improve its die rolls. At half Resilience (after 2 Hits), TQ drops to 3, imposing a **-1 DRM** on everything: fires, Assaults, and Rally tests. For Rally tests specifically, the unit must roll equal to or less than its TQ on 1D6 (after modifiers) to recover from Suppression/Disruption. With TQ 3 and a -2 modifier for Disrupted status, the effective target number is just 1 -- only a natural 1 passes (and 6 always fails). This makes Disrupted, damaged Russian infantry nearly impossible to Rally without an HQ nearby.

**Resilience 3:** This unit takes 3 Hits before Elimination. The first Hit flips the counter to its reverse side (Resilience 2). After the second Hit, the counter is replaced with the lower-value counter (Resilience 1, TQ 3). The third Hit Eliminates it. Compared to NATO's Resilience 4, Russian infantry dies one full Hit sooner.

#### Russia vs NATO Asymmetry

| Attribute | Russia Foot PL | NATO Foot PL | Impact |
|-----------|---------------|-------------|--------|
| Apers | 3 | 3 | Identical firepower column |
| Assault | 3 | 3 | Identical ratio contribution |
| TQ (full) | 4 (0 DRM) | 6 (+2 DRM) | NATO hits harder and rallies better |
| TQ (half) | 3 (-1 DRM) | 5 (+1 DRM) | Gap widens as units take damage |
| Resilience | 3 | 4 | Russia dies one Hit sooner |
| Terrain access | Same | Same | Both benefit from Dense Wood, Cover, Shell Scrapes |

The bottom line: Russian and NATO infantry are firing on the same column (3), but NATO infantry rolls with a +2 DRM advantage at full strength. On a bell curve of 2D6, this means NATO consistently scores Hits in situations where Russia scores nothing or only Suppression. Over the course of a game, this TQ gap is the single biggest factor in Russian infantry's underperformance.

#### Tactical Advice

- **Use numbers:** Russia typically fields more Foot PLs than NATO. Concentrate multiple PLs against a single NATO FE to achieve favourable Assault ratios. Two Russian PLs (total Assault Value 6) against one NATO PL (Assault Value 3) gives a 2:1 ratio before DRMs.
- **Soften before assaulting:** Use artillery and FPV strikes to Suppress or damage NATO infantry before sending Russian Foot PLs into an Assault. Suppression applies -1 to the Defender's TQ, partially closing the quality gap.
- **Exploit terrain:** Russian infantry benefits from the same Cover and Dense Wood bonuses as NATO infantry. Fighting from Dense Wood (-2 DRM to enemy fire) or Urban terrain helps offset the TQ disadvantage. The Vehicle Vulnerability bonus (+2 DRM when Foot fires at vehicles in Urban/Dense Wood) is equally available to Russian infantry.
- **Dig Shell Scrapes:** If you have a turn to spare, the Dig Shell Scrape Action provides -1 (Digging) / -2 (Shell Scrape) DRM against incoming fire and Assaults. This is one of the few ways Russian infantry can create a DRM advantage.
- **RPG ATGMs:** Most Russian Foot PLs carry an RPG (range 1,000m, gold Atk). This gives infantry the ability to engage NATO Tracked FEs and even MBTs at short range. RPGs are precious -- do not waste them on low-value targets.
- **Ammo management (Advanced):** With only 4 maximum Ammo, Russian Foot PLs run dry quickly if they fire and Assault. Plan resupply routes for the A1 Echelon ("Sect") to keep infantry combat-effective.

**Scenario 1 examples:** 1-A-1 F, 2-A-1 F, 1-B-1 F, 2-B-1 F, 3-A-1 F, 3-B-1 F (all carry RPG ATGMs)

---

### IFV/APC Tracked Platoon (Mechanised Infantry)

**Real-world equivalent:** A platoon of Russian Infantry Fighting Vehicles (IFVs) such as the **BMP-2** or **BMP-3**, or Armoured Personnel Carriers (APCs) such as the **BTR-80/82A**. These are the armoured vehicles that transport the infantry to the battlefield, provide fire support with autocannons and machine guns, and form the mobile backbone of the mechanised infantry force. In BC:B, the Tracked PL represents the vehicle component of a mechanised infantry platoon -- it shares an ID with the Foot PL that rides inside it.

**Role on the battlefield:** The IFV/APC provides two critical functions. First, it carries a Mounted Foot PL (and can carry one Embedded SECT), allowing rapid battlefield movement and protection for infantry. Second, it provides anti-vehicle firepower (purple Atk) that infantry lacks, capable of engaging enemy APCs and IFVs. However, its purple Atk **cannot** engage gold-type targets (MBTs), and its Apers value is lower than infantry's. It is a transport and fire-support platform, not a front-line assault unit.

| Stat | Full Strength | Half Resilience |
|------|---------------|-----------------|
| **Apers** | 2 (green) | 2 |
| **Atk** | 1 (purple) | 1 |
| **Assault** | 1 | 1 |
| **TQ** | 4 | 3 |
| **Resilience** | 3 -> 2 | 1 |

| Attribute | Value |
|-----------|-------|
| FE Type | **T** (purple square -- Tracked) |
| NATO symbol | Mechanised Infantry (crossed rifles with tracks) |
| Range (Apers / Atk) | 2,000m |
| Size | PL (3 dots) |
| Can target | Foot (green), Wheeled (grey), Tracked-purple (APCs/IFVs) |
| Targeted by | Any Atk (purple or gold) |
| Can carry | 1x Mounted Foot PL + 1x Embedded SECT |

#### How Each Stat Affects Gameplay

**Apers 2 (green):** Fires on the **2 column** of the Direct Fire Results Table against Foot and Wheeled targets. This is lower than infantry's Apers 3, meaning the IFV/APC is less effective at suppressing or killing enemy infantry. Use infantry for anti-infantry fights when possible.

**Atk 1 (purple):** Fires on the **1 column** -- the weakest possible -- when targeting enemy Tracked vehicles with a purple FE Type (other APCs/IFVs). The purple colour is critical: it means this unit **cannot target gold-type FEs** (MBTs) at all with its main gun. Against NATO IFVs/APCs, Atk 1 on the 1 column with TQ 4 (0 DRM) produces results that are marginal at best -- you will need good rolls or Target marker bonuses to score Hits. This is adequate for suppressing enemy APCs but unreliable for killing them.

**Assault 1:** Contributes only 1 to the Assault ratio. Tracked FEs can participate in Assaults but cannot be the sole Attacker (at least one Foot FE must be an Attacker). The low Assault Value means IFV/APCs are supporting elements in Assaults, not the main effort.

**TQ 4 / TQ 3:** Same TQ disadvantage as all Russian PLs. No bonus at full strength; penalty at half Resilience.

**Resilience 3:** Three Hits to Elimination. This is especially painful for a vehicle that must advance into enemy fire while carrying infantry. If the Tracked PL is Eliminated while carrying a Mounted Foot PL, the infantry Dismounts at the destroyed vehicle's location -- potentially exposed in the open, deep in enemy territory.

**Stacking:** The ability to carry Mounted Foot PLs and Embedded SECTs is enormously important. A single Stack of Tracked PL + Mounted Foot PL + Embedded SECT (e.g., HQ or Atk SECT with Stabber) moves as one unit, hides the composition of the force from the opponent (only the top counter is visible), and allows rapid deployment of infantry at the point of contact. The Embedded SECT is protected from direct targeting and can provide ISTAR while Embedded.

#### Russia vs NATO Asymmetry

| Attribute | Russia IFV/APC PL | NATO IFV/APC PL | Impact |
|-----------|-------------------|-----------------|--------|
| Apers | 2 | 2 | Identical |
| Atk | 1 (purple) | 1 (purple) | Identical |
| Assault | 1 | 1 | Identical |
| TQ (full) | 4 (0 DRM) | 6 (+2 DRM) | NATO far more accurate |
| TQ (half) | 3 (-1 DRM) | 5 (+1 DRM) | Gap widens under damage |
| Resilience | 3 | 4 | Russia destroyed one Hit sooner |
| Move-Fire DRM | **-2** | **-1** | Russia severely penalised when shooting on the move |
| Stacking | Same | Same | Both carry Foot PL + SECT |

The Move-Fire penalty is particularly devastating for IFV/APCs, which are often advancing toward objectives. A Russian IFV/APC performing a Move-Fire rolls with -2 (Move-Fire) + 0 (TQ 4) = **-2 total DRM**. A NATO IFV/APC rolls with -1 (Move-Fire) + 2 (TQ 6) = **+1 total DRM**. Three points of difference while doing the same action with the same base stats.

#### Tactical Advice

- **Advance with purpose, not aggression:** The -2 Move-Fire penalty means Russian IFV/APCs should avoid prolonged firefights while moving. Move to a position, stop, fire from static positions where possible (Direct Fire Action has no Move penalty).
- **Protect the cargo:** The Mounted Foot PL is your primary assault force. Losing the vehicle with infantry inside is catastrophic -- not only do you lose the vehicle, but the infantry may take additional Hits (roll 1D6 per Hit on the vehicle; on 4+ the Mounted PL takes an additional Hit). Dismount infantry before entering kill zones.
- **Embed high-value SECTs:** The Embedded slot is ideal for HQ SECTs (providing C2 DRM to the stack and ISTAR for Indirect Fire) or Atk SECTs with Stabber ATGMs (adding anti-MBT capability). An Embedded SECT can only be hit on a 1D6 roll of 1 per Hit the vehicle takes -- much safer than being out in the open.
- **Overwatch is your friend:** When not advancing, put IFV/APCs on Overwatch. This allows Reactive Fire against moving enemies. Even with weak Atk 1 against vehicles, Reactive Fire can Suppress an enemy during their move, halving their remaining movement -- potentially stranding them in the open.
- **Ammo matters (Advanced):** Vehicle PLs carry up to 5 Ammo. Each Direct Fire uses 1 Ammo; each Assault uses 2. With Atk 1 producing inconsistent results, you may fire many times before scoring Hits. Plan A1 Echelon resupply early.

**Scenario 1 examples:** 1-A-1 T, 2-A-1 T, 1-B-1 T, 2-B-1 T, 3-A-1 T, 3-B-1 T (all carry Stabber ATGMs, most Depleted)

---

### Main Battle Tank Platoon (MBT)

**Real-world equivalent:** A platoon of Russian main battle tanks such as the **T-72B3** or **T-80BV/BVM**, fitted with explosive reactive armour (ERA). These are the heaviest armoured vehicles in the Russian force, designed for armoured breakthrough and direct engagement of enemy vehicles. In BC:B, the gold FE Type icon represents their reactive armour, making them extremely difficult to kill -- only gold Atk weapons or ATGMs can penetrate their armour.

**Role on the battlefield:** The Russian MBT is a paradox. It has **gold armour** (the toughest in the game), making it immune to anything except NATO MBTs with gold Atk or ATGMs. But its main gun has only **purple Atk** -- it can destroy enemy APCs and IFVs but **cannot penetrate NATO MBT armour**. This is the defining asymmetry of the Russian force and the single most important thing to understand about playing Russia.

| Stat | Full Strength | Half Resilience |
|------|---------------|-----------------|
| **Apers** | 2 (green) | 2 |
| **Atk** | 3 (purple) | 3 |
| **Assault** | 1 | 1 |
| **TQ** | 4 | 3 |
| **Resilience** | 3 -> 2 | 1 |

| Attribute | Value |
|-----------|-------|
| FE Type | **T** (gold square -- MBT armour) |
| NATO symbol | Armour (rectangle with diagonal line) |
| Range (Atk) | 2,000m |
| Size | PL (3 dots) |
| Can target | Foot (green), Wheeled (grey), Tracked-purple (APCs/IFVs) -- **NOT** gold (MBTs) |
| Targeted by | Gold Atk only (or ATGMs) |

#### How Each Stat Affects Gameplay

**Apers 2 (green):** Can fire at Foot and Wheeled targets on the 2 column. Same as the IFV/APC -- adequate but not dominant against infantry. The MBT's real purpose is anti-vehicle, not anti-infantry.

**Atk 3 (purple):** This is the critical stat. The number 3 means it fires on the **3 column** of the Direct Fire Results Table -- a reasonably powerful column that can produce 1-2 Hits on good rolls. But the colour **purple** limits what it can target. Purple Atk can engage:
- Wheeled FEs (grey FE Type) -- easily
- Tracked FEs with purple FE Type (APCs/IFVs) -- yes, very effectively
- Tracked FEs with gold FE Type (MBTs) -- **NO. Absolutely cannot target.**

This means a Russian T-72B3 staring across the battlefield at a NATO Leopard 2 or Challenger 2 (gold FE Type, gold Atk 4) **cannot fire its main gun at it**. The NATO MBT can freely engage the Russian MBT (it has gold Atk which targets everything). The Russian MBT needs a Stabber ATGM to fight back.

However, against NATO IFVs and APCs (purple FE Type), the Russian MBT's Atk 3 is devastating -- it fires on the 3 column against targets that are far more fragile than an MBT.

**Assault 1:** Low Assault contribution. MBTs cannot be the sole Attacker in an Assault (requires at least one Foot FE). They provide supporting firepower in Assaults but are not the decisive element.

**TQ 4 / TQ 3:** The same crippling TQ disadvantage that affects all Russian units. When firing Atk 3 at a NATO IFV, the Russian MBT rolls with 0 DRM from TQ. A NATO MBT firing Atk 4 at the Russian MBT rolls with +2 DRM from TQ 6. On top of a higher Firepower column (4 vs 3), the TQ gap makes the matchup deeply one-sided.

**Resilience 3:** Three Hits to Elimination, same as every Russian PL. NATO MBTs have Resilience 4. In a head-to-head engagement (which the Russian MBT cannot even initiate against a NATO MBT without an ATGM), the Russian MBT dies first.

> [!warning] The Critical Asymmetry: Purple Atk on a Gold Chassis
> This is the defining feature of Russian forces in BC:B. Russian MBTs have:
> - **Gold armour** -- immune to NATO IFV/APC fire, immune to infantry Apers. Only NATO MBTs with gold Atk 4 or ATGMs (NLAW, Javelin) can kill them.
> - **Purple Atk** -- cannot penetrate NATO MBT armour. The 125mm main gun of a T-72B3 fires on the 3 column but is limited to purple targets.
>
> The consequences:
> 1. **Russian MBTs cannot engage NATO MBTs.** Without a Stabber ATGM, a Russian MBT platoon must watch helplessly as a NATO MBT destroys it.
> 2. **Russian MBTs are excellent against everything else.** Atk 3 on the purple column devastates NATO IFVs, APCs, and Recce vehicles.
> 3. **Stabber ATGMs are the only answer.** The Stabber fires as gold Atk and uses its own dedicated column on the ATGM Fire Results Table. It can kill NATO MBTs. But most Stabbers start Depleted (one shot only).
> 4. **NATO MBTs are the apex predator.** With gold Atk 4, TQ 6 (+2 DRM), Resilience 4, and 3,000m range, the NATO MBT outclasses the Russian MBT in every dimension. The Russian MBT's only advantage is quantity.

#### Russia vs NATO Asymmetry

| Attribute | Russia MBT PL | NATO MBT PL | Impact |
|-----------|-------------|-------------|--------|
| Apers | 2 | 2 | Identical |
| Atk | **3 (purple)** | **4 (gold)** | NATO targets everything; Russia cannot target MBTs |
| Atk Range | 2,000m | **3,000m** | NATO outranges Russia by 1,000m |
| Assault | 1 | 1 | Identical |
| TQ (full) | 4 (0 DRM) | 6 (+2 DRM) | NATO far more accurate |
| TQ (half) | 3 (-1 DRM) | 5 (+1 DRM) | Gap widens |
| Resilience | 3 | 4 | Russia dies one Hit sooner |
| Move-Fire DRM | -2 | -1 | Russia penalised moving |
| Can kill enemy MBT? | **No (main gun)** | **Yes** | Fundamental asymmetry |

This table reveals the full picture: the NATO MBT fires on a higher column (4 vs 3), at longer range (3,000m vs 2,000m), with a better DRM (+2 vs 0), with more survivability (Resilience 4 vs 3), with better accuracy on the move (-1 vs -2), **and** it can target the Russian MBT while the Russian MBT cannot target it back. The Russian MBT's only inherent advantage is that it, too, has gold armour -- making it hard for NATO's non-MBT forces to kill.

#### Tactical Advice

- **Do NOT joust with NATO MBTs.** The Russian MBT loses this fight 100% of the time without ATGMs. Avoid LoS to NATO MBTs whenever possible.
- **Hunt NATO IFVs and APCs.** Russian MBT Atk 3 on the purple column is excellent against NATO's purple-type vehicles. Use MBTs to strip away NATO's troop carriers and isolate their infantry.
- **Pair with Stabber ATGMs.** Embed an Atk SECT with a Stabber in a nearby IFV/APC, or ensure Stabber-equipped IFV/APCs operate alongside MBTs. The MBT draws fire (it is hard to kill), while the Stabber-carrying FE takes the critical anti-MBT shot.
- **Use terrain to deny LoS.** Position behind hills, in Light Wood edges, or behind Dense Wood to prevent NATO MBTs from engaging at range. Force close-range engagements where your superior numbers and infantry can be brought to bear.
- **Artillery first.** Before advancing MBTs into an area with NATO MBTs, use 152mm artillery and FPV drones to Suppress or damage the NATO MBTs. Even 1 Hit on a NATO MBT reduces its Resilience and eventually its TQ.
- **Accept losses.** Russia typically has more MBT PLs than NATO. You can trade MBTs if necessary -- but only if you are achieving objectives while doing so.
- **Range disadvantage.** NATO MBTs fire Atk at 3,000m; Russian MBTs fire Atk at 2,000m. NATO can engage Russian MBTs (with gold Atk) from beyond Russian Atk range. Close the distance or use terrain to negate this.

**Identified IDs:** 1-A-2 (from rulebook ORBAT examples -- appears in larger scenarios, not Scenario 1)

---

## Section-Sized Force Elements (SECT -- 1 dot)

Sections are smaller, more fragile units (Resilience 1-2) that provide specialised functions: command, reconnaissance, anti-tank, observation, and logistics. They cannot operate independently in combat and must be carefully protected.

---

### Headquarters Section (Main HQ / Tac HQ)

**Real-world equivalent:** The command element of a Russian battalion or company -- the commanding officer, staff, signallers, and their command vehicle. In BC:B, there are two HQ counters: the **Main HQ** (battalion-level command) and the **Tac HQ** (forward tactical headquarters). They provide Command & Control (C2) functions that are critical for coordinating the force.

**Role on the battlefield:** HQs are force multipliers. Their C2 Rating applies as a DRM to Initiative rolls, Assault rolls, and Rally tests (when within 250m). They enable Command Activations (activating multiple TGps simultaneously). They are ISTAR Assets (providing LoS for Indirect Fire). But they are extremely fragile (Resilience 1 = one Hit and they are Eliminated) and their loss cripples the force's ability to coordinate.

| Stat | Value |
|------|-------|
| **C2 Rating** | 3 (yellow circle) |
| **TQ** | 4-5 |
| **Resilience** | 1 |

| Attribute | Value |
|-----------|-------|
| Size | SECT (1 dot) |
| ISTAR | **Yes** (star symbol) |

**Main HQ vs Tac HQ:**

| | Main HQ | Tac HQ |
|-|---------|--------|
| Command Activation range | **Any** TGp on the map | TGps with an FE **within 1,000m** |
| Typical position | Rear area, protected | Forward with the main effort |

#### How C2 Rating Affects Gameplay

The C2 Rating of 3 provides a **+3 DRM** for:
- **Initiative rolls:** Both sides roll 1D6 + modifiers; the C2 Rating is one of the key modifiers. +3 is significant on a 1D6 roll.
- **Assault DRMs:** When an HQ is Embedded in a Stack participating in an Assault, its C2 Rating adds to the Assault roll. This can swing Assault outcomes significantly.
- **Rally tests:** When an HQ is within 250m of a Suppressed or Disrupted FE taking a Rally test, the C2 Rating applies as a positive DRM, potentially saving a unit from remaining Suppressed/Disrupted or from becoming Broken (Eliminated).

Both Russian and NATO HQs have **C2 Rating 3** -- this is one stat where Russia is not disadvantaged.

#### Red Doctrine Impact (Advanced Mode)

Under [[red-doctrine|Red Doctrine]], Russian HQs **cannot issue New Orders**. This is an enormous constraint. NATO HQs can issue New Orders (and one TGp per turn can receive New Orders for free via [[mission-command|Mission Command]], with no Reorg penalty and no ETX generated). Russian HQs are limited to:
- Initiative DRM
- Assault DRM
- Rally DRM
- Command Activations (activating multiple TGps at once)

The inability to issue New Orders means the entire Russian plan must be written during the Preparation Phase and cannot be amended mid-game, no matter how the situation evolves. This makes the Russian HQ a passive coordinator rather than an active decision-maker.

#### Tactical Advice

- **Always Embed the HQ.** Resilience 1 means one Hit Eliminates the HQ. Embedding it in a Tracked PL provides protection (the Embedded SECT only takes a Hit on a 1D6 roll of 1 per Hit on the vehicle). Losing an HQ mid-game cripples your Initiative and Rally capabilities.
- **Position the Tac HQ with the main effort.** Its 1,000m Command Activation range means it needs to be near the TGps it supports. Embed it in a Tracked PL that is advancing with the primary assault force.
- **Use as ISTAR.** While Embedded, the HQ provides ISTAR LoS for Indirect Fire targeting. This means your main advance can self-spot for artillery -- no need to risk a separate FST or Recce.
- **Plan for Rally support.** Position at least one HQ within 250m of units that will take fire. The +3 DRM on Rally tests can mean the difference between a Disrupted unit recovering and it becoming Broken (Eliminated).

**Scenario 1:** Tac/HQ 1 Embedded in 1-B-1 T PL (TGp 2)

---

### Reconnaissance Section (Recce SECT)

**Real-world equivalent:** A Russian reconnaissance element -- could represent a section from a reconnaissance company equipped with light armoured vehicles (e.g., BRM-1K, BRDM-2, or modern Tigr-M). Trained for forward observation, target acquisition, and screening.

**Role on the battlefield:** Recce units are the eyes of the Russian force. They have extended LoS range (4,000m vs the standard 3,000m), special ISTAR capabilities in Dense Wood and Urban terrain (can observe from 500m without the target having LoS back), and reduced Danger Close restrictions for Artillery (250m instead of the standard 500m). Their primary job is to find the enemy and call in Indirect Fire -- not to fight directly.

| Stat | Full Strength | Half Resilience |
|------|---------------|-----------------|
| **Apers** | 2 (green) | 2 |
| **Atk** | 2 (purple) | 2 |
| **Assault** | 1 | 1 |
| **TQ** | 4 | 3 |
| **Resilience** | 2 | 1 |

| Attribute | Value |
|-----------|-------|
| FE Type | T (purple square) |
| Size | SECT (1 dot) |
| ISTAR | **Yes** (star symbol) |
| LoS range | **4,000m** |
| ISTAR exception | 500m in Dense Wood/Urban (can observe without target seeing back) |
| Danger Close (Artillery) | **250m** (vs standard 500m) |

#### How Each Stat Affects Gameplay

**Apers 2 / Atk 2 (purple):** Moderate direct combat capability. The Recce can defend itself against Foot and Wheeled targets and even engage enemy APCs/IFVs on the 2 column. But combat is not its purpose -- engaging in firefights risks losing a critical ISTAR asset.

**4,000m LoS:** Recce sees further than any ground unit. Standard LoS is 3,000m; Recce gets an extra kilometre. This is invaluable for spotting targets for artillery strikes while staying outside the enemy's LoS range.

**500m ISTAR in Dense Wood/Urban:** This is a powerful special ability. Recce can observe targets within 500m even through Urban Terrain or Dense Wood (which normally completely blocks LoS). The target cannot draw LoS back to the Recce for Direct Fire purposes (only for ISTAR). This allows the Recce to call in artillery on enemies hiding in towns and forests.

**250m Danger Close for Artillery:** Normal Artillery Danger Close is 500m (meaning you cannot target an enemy within 500m of any friendly FE). For friendly Recce, this is reduced to 250m. The Recce can get closer to the artillery impact zone, allowing fire to be directed at enemies that are dangerously close.

#### Russia vs NATO Asymmetry

| Attribute | Russia Recce | NATO Recce | Impact |
|-----------|-------------|------------|--------|
| Apers | 2 | 2 | Identical |
| Atk | 2 (purple) | 2 (purple) | Identical |
| TQ (full) | 4 (0 DRM) | 6 (+2 DRM) | NATO more effective if forced to fight |
| Resilience | 2 | 2 | Identical |
| Special LoS | 4,000m | 4,000m | Identical |
| ISTAR in Dense Wood/Urban | 500m | 500m | Identical |
| Danger Close exception | 250m | 250m | Identical |

Recce is one of the few unit types where Russia is nearly at parity with NATO. The only disadvantage is TQ -- if forced into direct combat, the NATO Recce fires more accurately. But since Recce should rarely be fighting, the TQ gap is less impactful here than on other unit types.

#### Tactical Advice

- **Screen ahead of the advance.** Deploy Recce forward to locate NATO positions and call in 152mm artillery or FPV strikes. The 4,000m LoS means Recce can spot targets beyond most enemies' ability to fire back.
- **Exploit Urban/Dense Wood ISTAR.** If NATO infantry is dug in to a town or forest, push Recce within 500m to provide ISTAR targeting for artillery. NATO infantry hiding in Urban terrain gets -2 Cover DRM against Direct Fire -- but artillery ignores Cover in Light/Dense Wood (unless the target has Shell Scrapes). Use Recce to bypass the LoS limitations and hammer them with 152mm.
- **Do not engage in combat.** Resilience 2 means two Hits Eliminate the Recce. Losing Recce early blinds your artillery. Keep it alive at all costs.
- **Embed for protection.** Recce can Embed in a Tracked PL and still provide ISTAR while Embedded. This protects it from direct targeting.

**Scenario 1:** 1-Recce (TGp 4) -- screens ahead of the main force advance

---

### Anti-Tank Section (Atk SECT)

**Real-world equivalent:** A dedicated anti-tank element, possibly a section from the battalion's anti-tank platoon, equipped with vehicle-mounted or man-portable ATGMs (represented in-game by the Stabber). Could represent a Kornet or Konkurs ATGM team.

**Role on the battlefield:** The Atk SECT exists to solve Russia's biggest problem: **killing NATO MBTs.** It typically carries a Stabber ATGM, the only reliable ground-based weapon in the Russian arsenal that can engage gold-type targets. However, the Atk SECT is fragile (SECT-sized Resilience) and its Stabber often starts Depleted (one shot only). Protecting and positioning the Atk SECT correctly is one of the most important tactical decisions for the Russian player.

| Stat | Value |
|------|-------|
| **Atk** | 1 (purple) |
| **TQ** | ~4 |
| **Resilience** | 1-2 |

| Attribute | Value |
|-----------|-------|
| Size | SECT (1 dot) |
| Typical ATGM | Stabber (3,000m range, gold Atk, often Depleted) |

#### How the Stabber ATGM Works

When the Atk SECT fires its Stabber ATGM instead of using its inherent Atk 1 (purple):
- The Stabber counts as **gold Atk** -- it can target any vehicle, including NATO MBTs.
- It uses the **Stabber column** on the ATGM Fire Results Table (separate from the normal Direct Fire table).
- It has a range of **3,000m** -- longer than the standard 2,000m Atk range.
- After firing, a Full Stabber flips to Depleted. A Depleted Stabber is **removed from the game** after one shot.
- Firing an ATGM does **not** use Ammo.

The Stabber is the key to the entire Russian anti-armour strategy. Without it, Russian ground forces have no way to kill NATO MBTs except through Indirect Fire (artillery and FPV). But Indirect Fire against a single target is unreliable, and NATO MBTs have Resilience 4 -- they take a lot of killing.

#### The Stabber Problem in Detail

Most Stabber ATGMs in Russian ORBATs start **Depleted**. A Depleted marker means the ATGM can only be fired **once** before it is removed from the game entirely. In Scenario 1, Russia's ORBAT includes:
- 1-A-1 T: 1x Stabber (Full -- can fire twice)
- 2-A-1 T: 1x Stabber (Depleted -- one shot)
- 2-B-1 T: 1x Stabber (Depleted -- one shot) [note: ORBAT shows 2-A-1 T twice, second entry likely 2-B-1]
- 2-C-1 T: 1x Stabber (Depleted -- one shot)
- 1-Atk-1 SECT: 1x Stabber (Depleted -- one shot)

That is approximately **6 total Stabber shots** across the entire Russian force (1 Full = 2 shots, 4 Depleted = 4 shots). Each shot is a 2D6 roll on the Stabber column of the ATGM table with applicable DRMs. Missing a Stabber shot against a NATO MBT is devastating -- you have burned an irreplaceable resource.

This creates a critical **resource management challenge**: you must decide when, where, and against which target to commit each Stabber shot. Fire too early and you may waste shots on targets that could have been killed by other means. Fire too late and the NATO MBTs may have already destroyed your force. The Stabber is the single most valuable asset in the Russian arsenal, and its scarcity defines Russian anti-armour tactics.

**Resupply (Advanced mode):** A1 Echelon ("Sect") FEs can carry and deliver replacement ATGMs via the REPLENDEM Action. However, a SECT can only carry a **Depleted** ATGM marker -- meaning resupplied ATGMs only get one shot. Getting fresh Stabbers to the front line requires careful logistical planning and exposes the A1 Echelon to risk.

#### Tactical Advice

- **Embed the Atk SECT.** The safest place for a Stabber-equipped Atk SECT is Embedded in a Tracked PL. While Embedded, it cannot be directly targeted. It only takes a Hit on a 1D6 roll of 1 per Hit on the host vehicle. It can still fire while Embedded.
- **Do not fire until you have a high-probability shot.** With only one shot per Depleted Stabber, you want every possible DRM in your favour: static firing position (no Move-Fire penalty), Target marker (+1 or +2 DRM), no terrain penalties on the LoS, and ideally the target is Moved (which provides no DRM benefit to the firer, but at least means the target was not in Overwatch and cannot Reactive Fire).
- **Concentrate Stabbers near the expected NATO MBT axis.** Identify where NATO MBTs are likely to appear based on terrain and objectives, and position Stabber-carrying FEs on overwatch positions covering those approaches.
- **Combine with Indirect Fire.** Use artillery or FPV to damage or Suppress a NATO MBT before committing a Stabber shot. Even one Hit on the MBT reduces its Resilience, and Suppression imposes -1 TQ on its return fire.
- **Protect from NATO counter-fire.** An Atk SECT exposed in the open with Resilience 1-2 is trivially Eliminated by NATO Direct Fire. Always have a plan for where the SECT will be after firing.

**Identified IDs:** 1-Atk-1 (from rulebook ORBAT example)

---

### Fire Support Team Section (FST SECT)

**Real-world equivalent:** A forward observer team -- artillery spotters trained to identify targets and direct Indirect Fire. Could represent a team from the battalion's artillery battery or a dedicated fire coordination element.

**Role on the battlefield:** The FST is a pure ISTAR Asset. It exists to provide LoS for artillery and FPV strikes. It has no meaningful combat capability and is extremely fragile. Its value lies entirely in enabling the Russian artillery advantage.

| Attribute | Value |
|-----------|-------|
| Size | SECT (1 dot) |
| ISTAR | **Yes** (star symbol) |
| Resilience | 1 |

#### Tactical Advice

- **Embed for safety.** Resilience 1 = one Hit and it's gone. Embed it in a Tracked PL to protect it.
- **Position for ISTAR coverage.** The FST needs LoS to potential targets. Place it where it can observe the likely enemy positions -- ideally on elevated terrain or at terrain edges where it can see without being seen.
- **Supplement the UAS.** The UAS provides ISTAR for 4 Grid Squares around its position, but it can be moved by EW Chits or affected by weather. The FST provides a reliable, ground-based alternative.
- **Redundancy matters.** Between the HQ (ISTAR), Recce (ISTAR), FST (ISTAR), and UAS (ISTAR), Russia has multiple observation assets. Losing one should not blind your artillery -- but losing all of them will.

**Identified IDs:** FST 1 (from rulebook ORBAT example)

---

### A1 Echelon "Sect" (Logistics -- Advanced Mode)

**Real-world equivalent:** A Russian logistics element -- supply trucks carrying ammunition and replacement ATGMs. Called **"Sect"** in the Russian force (a potentially confusing naming convention, since SECT also refers to Section, the FE size category). Not to be confused with Section-sized FEs.

**Role on the battlefield:** The A1 Echelon exists to resupply front-line units with Ammo and ATGMs via the [[replendem|REPLENDEM]] Action. In Advanced mode, Ammo management becomes critical -- PLs have limited Ammo (Foot PLs max 4, Vehicle PLs max 5), and running out forces them to fire on the weakest column (1) and reduces Assault Values. The A1 Echelon is the only way to replenish these resources mid-game.

| Stat | Value |
|------|-------|
| **TQ** | 5 |
| **Resilience** | 1 |

| Attribute | Value |
|-----------|-------|
| FE Type | **W** (grey circle -- Wheeled) |
| Size | SECT (1 dot) |

#### How REPLENDEM Works

The A1 Echelon takes a REPLENDEM Action to transfer Ammo or ATGMs to any friendly FE within 250m. Both the A1 Echelon and the receiving FE get a Reorg marker (cannot be Activated that turn if they haven't already). The opposing side draws 1 ETX marker. Key constraints:
- The A1 Echelon **cannot fire** -- not even ATGMs it carries. It is a non-combat unit.
- A SECT (the size category) can only carry a **Depleted** ATGM. Resupplied Stabbers are always Depleted (one shot).
- If the A1 Echelon is **Eliminated**, all carried Ammo and ATGMs are lost.
- Wheeled FE Type means Dense Wood is No-Go (except on roads) and the A1 Echelon is vulnerable to any Atk fire (grey target type = can be targeted by anything).

#### Tactical Advice

- **Plan resupply routes during the Preparation Phase.** Under Red Doctrine, you cannot issue New Orders to adjust the A1 Echelon's path. Write Orders that position the A1 Echelon where front-line units will need resupply 2-3 turns into the game.
- **Keep the A1 Echelon behind cover.** It is Wheeled (slow off-road), has Resilience 1, and carries irreplaceable resources. Losing it can strand your front-line PLs without Ammo.
- **Prioritise ATGM resupply.** Ammo depletion is painful but not fatal (units can still fire on the 1 column). Stabber depletion means losing the ability to kill NATO MBTs. Delivering a replacement Stabber (even Depleted) to a Tracked PL near NATO MBTs can be game-changing.
- **Generate ETX wisely.** Each REPLENDEM generates 1 ETX for the opponent. If you resupply multiple units over several turns, the ETX accumulation can give NATO valuable Target markers and EW Chits.

---

## Mortar Force Element

### Mortar Platoon (Mor)

**Real-world equivalent:** A Russian mortar platoon, typically equipped with 82mm or 120mm mortars. Provides organic battalion-level Indirect Fire support. Unlike artillery, the mortar is an on-map FE that can be targeted and destroyed.

**Role on the battlefield:** The Mortar provides flexible Indirect Fire that can fire using its own LoS (no ISTAR Asset required, though one can be used). It has a maximum range of 8,000m, which covers most of the map. It always occupies its own TGp in the ORBAT, and receives both manoeuvre Orders (for positioning) and Fire Plans (for ETX-efficient firing).

| Attribute | Value |
|-----------|-------|
| Fire type | Mortar (Indirect Fire) |
| Max range | 8,000m |
| Danger Close | 250m |
| Auto Suppression | Dismounted Foot FEs within 250m of target |
| FMs | Set by ORBAT (typically 5) |

#### How Mortar Fire Works

Mortar fire uses the Mortar row of the Indirect Fire Results Table. Roll 2D6 + DRMs. Key DRMs:
- **Fire Plan:** If the target is in the pre-planned Fire Plan area on the Sync Matrix, the opponent draws only 1 ETX. If outside, 3 ETX.
- **Target markers:** Can be applied for a positive DRM.
- **Moved target:** Provides a negative DRM to the fire roll.
- **Auto Suppression:** Regardless of the fire result, any Dismounted Foot FE within 250m of the target receives a Suppression marker (if it doesn't already have one).

#### Russia vs NATO Mortar

Both sides have identical mortar mechanics. The only difference is:
- Russia's mortar crew TQ may differ from NATO's -- affecting Rally tests if the mortar comes under fire.
- Under Red Doctrine, Russia cannot change the mortar's Fire Plan mid-game. NATO can issue New Orders to redirect the mortar.

#### Tactical Advice

- **Pre-plan Fire Plans carefully.** Under Red Doctrine, the Fire Plan written in the Preparation Phase is permanent. Choose Grid Intersections that cover the most likely enemy positions for each turn. Getting this wrong wastes Fire Missions or generates excessive ETX.
- **Position early, fire often.** Use the first turn or two to move the Mortar to a good position (behind terrain, out of LoS), then switch to a Fire Plan for the remaining turns. Every turn spent moving is a turn not firing.
- **Use own LoS when possible.** The Mortar can fire using its own LoS, which does not require an ISTAR Asset. This frees up Recce, HQ, and FST assets for other tasks.
- **Suppress before assaults.** Auto Suppression on Foot FEs within 250m of the target is guaranteed. Drop mortar rounds on NATO infantry positions before your Foot PLs assault -- even if the mortar doesn't score Hits, the Suppression marker imposes -1 TQ on the defenders.

**Scenario 1:** Not in Russia's Scenario 1 ORBAT (Russia uses 152mm Artillery SA instead)

---

## Support Assets (Off-Map, Cannot Be Targeted)

Support Assets represent off-map or high-altitude assets that provide Indirect Fire and reconnaissance support. They cannot be directly targeted or destroyed (though EW Chits can interfere with them). They are activated instead of a TGp during the Action Round.

---

### 152mm Artillery Support Asset

**Real-world equivalent:** A battery of Russian 152mm self-propelled howitzers (e.g., 2S19 Msta-S or 2S3 Akatsiya), firing from positions well behind the front line. The 152mm calibre is the Russian standard for divisional/brigade-level artillery. In BC:B, artillery represents the massed fires that are a hallmark of Russian military doctrine.

**Role on the battlefield:** Artillery is Russia's most powerful offensive tool. It has unlimited range, can target any FE Type (including gold MBTs), applies Auto Suppression to **all FE types** within 250m of the target (not just Foot, like mortars), and Russia typically receives **more Fire Missions** than NATO in Advanced mode ORBATs. Artillery is the primary means of softening NATO positions before ground forces advance.

| Attribute | Value |
|-----------|-------|
| Range | **Unlimited** |
| Danger Close | 500m (250m for friendly Recce FEs) |
| Auto Suppression | **All FE types** within 250m of target |
| ISTAR required | **Always** (cannot fire without ISTAR LoS to target) |
| FMs (Scenario 1) | 4+1 = **5** (Advanced mode adds +1) |

#### How Artillery Affects Gameplay

**Unlimited range:** Artillery can hit anything on the map, provided an ISTAR Asset has LoS to the target. There is no positioning requirement -- the SA is off-map.

**All-type Auto Suppression:** Unlike mortars (which only auto-suppress Foot), 152mm artillery auto-suppresses **every FE type** -- including Tracked and Wheeled -- within 250m of the target. This means even if the artillery roll fails to score Hits, it still Suppresses nearby units. Suppression imposes -1 TQ and halves movement, which can be devastating for NATO units with tight operational timelines.

**ISTAR requirement:** Artillery always needs ISTAR LoS. This means your Recce, HQ, FST, or UAS must be able to see the target. Losing all ISTAR Assets effectively silences your artillery. This is a critical vulnerability.

**Danger Close 500m:** You cannot target enemies within 500m of any friendly FE (except Recce, where the restriction is reduced to 250m). This means as your forces close with the enemy, artillery becomes harder to use. Plan your Fire Plans for the approach phase, not the close-combat phase.

**Fire Plan ETX efficiency:** If the target is within the pre-planned Fire Plan area on the Sync Matrix, the opponent draws only **1 ETX**. If outside, they draw **3 ETX**. Under Red Doctrine, the Fire Plan cannot be changed -- making accurate pre-game planning essential.

#### Russia vs NATO Artillery

| Attribute | Russia 152mm | NATO 155mm | Impact |
|-----------|-------------|------------|--------|
| Range | Unlimited | Unlimited | Identical |
| Danger Close | 500m (250m Recce) | 500m (250m Recce) | Identical |
| Auto Suppression | All FE types, 250m | All FE types, 250m | Identical |
| FMs (Scenario 1) | **5** | **0 (none)** | Russia has massive advantage |
| FMs (Advanced general) | **More** | Fewer | Russia typically gets extra FMs |
| Fire Plan flexibility | **Fixed** (Red Doctrine) | Can be changed (New Orders) | NATO adapts; Russia cannot |

Russia's artillery advantage is one of its most important asymmetric strengths. In Scenario 1, Russia has 5 artillery FMs while NATO has **zero** (NATO's artillery is deployed elsewhere per the scenario briefing). Even in larger scenarios where NATO has artillery, Russia typically receives more FMs through Advanced mode ORBAT bonuses.

#### Tactical Advice

- **Use artillery in the first turns.** The approach phase -- before forces are in close contact -- is when artillery is most effective. Once your ground units close to within 500m of NATO forces, Danger Close restricts artillery use.
- **Write precise Fire Plans.** Under Red Doctrine, the Fire Plan Grid Intersection is locked for each turn. Study the map during the Preparation Phase and predict where NATO forces will be. Getting the Fire Plan right means 1 ETX per shot instead of 3.
- **Target NATO MBTs with artillery.** Russian ground forces struggle to kill NATO MBTs. Artillery can target gold-type FEs and does not care about armour colour -- Hits are Hits regardless. Even one Hit on a NATO MBT reduces its Resilience and eventually its TQ.
- **Combo with FPV.** Use artillery to Suppress a target, then follow up with an FPV Double-Tap to finish it. The Suppression from artillery degrades the target's ability to Rally and fight back.
- **Protect your ISTAR chain.** If NATO eliminates all your ISTAR Assets, your artillery goes silent. Ensure you have redundant observation: HQ (Embedded), Recce, FST, and UAS should cover different parts of the battlefield.

---

### FPV Drone Support Asset

**Real-world equivalent:** First Person View strike drones -- small, expendable unmanned aerial vehicles equipped with explosive payloads, piloted remotely via video feed. "FPV" in BC:B is a catch-all for any offensive drone capability. Russia has been a prolific user of FPV drones in recent conflicts, and this is reflected in their typically higher FM allocation.

**Role on the battlefield:** The FPV provides precision Indirect Fire with no Danger Close restriction, the ability to Double-Tap (fire twice at the same target in one activation), and no range limitation. It is particularly effective at picking off high-value targets (HQs, Recce, exposed ATGMs) or finishing off damaged units.

| Attribute | Value |
|-----------|-------|
| Range | **Unlimited** |
| Danger Close | **None** |
| Auto Suppression | Dismounted Foot FEs within 250m of target |
| ISTAR required | **Always** |
| Double-Tap | Can fire a second time at same target (uses 2 FMs total) |
| FMs (Scenario 1) | 4+2 = **6** (Advanced mode adds +2) |

#### The Double-Tap

The FPV's unique ability is the **Double-Tap**: after resolving the first FPV fire, it can immediately fire again at the **same target**. This uses a second FM but does not generate additional ETX. The second shot benefits from any EW Chit effects that were applied to the first shot (e.g., a Signal Jamming chit's DRM persists through both shots). The Double-Tap is ideal for ensuring a kill on a high-value target -- two chances to Hit with a single activation.

#### Russia vs NATO FPV

| Attribute | Russia FPV | NATO FPV | Impact |
|-----------|-----------|----------|--------|
| Range | Unlimited | Unlimited | Identical |
| Danger Close | None | None | Identical |
| Double-Tap | Yes | Yes | Identical |
| FMs (Scenario 1) | **6** | **4** | Russia has 50% more FMs |
| FMs (Advanced general) | **More** | Fewer | Russia typically gets extra FMs |

#### Tactical Advice

- **Double-Tap high-value targets.** The Double-Tap is most efficient against targets you absolutely must destroy: NATO HQs (Resilience 1), exposed Recce (Resilience 2), or damaged MBTs. Two shots at the same target dramatically increases the probability of Elimination.
- **No Danger Close = close support.** Unlike artillery, FPV can target enemies right next to your own forces. Use FPV to support Assaults by hitting the Defending FE immediately before your infantry closes in.
- **Budget FMs carefully.** 6 FMs sounds generous, but Double-Taps use 2 per activation. Three Double-Taps and you are out. Consider single shots against less critical targets to conserve FMs.
- **EW Chit interaction:** The FPV Jamming EW Chit (opponent rolls 1D6, applies as -DRM to FPV attack) and FPV Signal Boost (your FPV gains 1 extra FM) are critical. Russia's EW advantage (drawing 2 chits, keeping 1) increases the chance of drawing favourable FPV-related chits.

**Scenario 1:** FPV A, 4+2 = **6** Fire Missions

---

### UAS Drone Support Asset

**Real-world equivalent:** An Unmanned Aerial Support drone -- a medium-altitude reconnaissance UAV providing wide-area surveillance. Could represent an Orlan-10 or similar system.

**Role on the battlefield:** The UAS is a pure ISTAR platform. It provides LoS to the 4 Grid Squares adjacent to its position, **ignoring all Obstructions** (it sees everything from above). It is placed at a Grid Intersection and can move to any other Grid Intersection on the map with a Move Action. The UAS is critical for enabling artillery and FPV fires, especially against targets hidden behind terrain.

| Attribute | Value |
|-----------|-------|
| LoS | 4 adjacent Grid Squares (ignores all Obstructions) |
| Movement | Any Grid Intersection on the map |
| Combat capability | None |
| Targetable | No (SA) |

#### Tactical Advice

- **Position to cover the Fire Plan areas.** The UAS should be placed where it can provide ISTAR LoS for your planned artillery and FPV targets. If your Fire Plan targets Grid Intersection E32/N50, place the UAS at or near that intersection.
- **Reposition as the battle develops.** The UAS can move to any Grid Intersection with a Move Action. As the battle progresses and your forces advance, reposition the UAS to cover new target areas.
- **Beware EW effects.** Some EW Chits can force the UAS to move or reduce its effectiveness. The opponent may attempt to blind your UAS at a critical moment.
- **Supplement with ground ISTAR.** The UAS covers 4 Grid Squares but may not cover the specific location you need. Ground ISTAR Assets (Recce, HQ, FST) provide precise LoS where the UAS cannot.

**Scenario 1:** UAS A

---

## Russian Anti-Tank Guided Missiles (ATGMs)

ATGMs are the key weapons system that bridges the gap between Russian conventional firepower (purple Atk) and the need to engage gold-type targets (NATO MBTs). Understanding ATGMs is essential for Russian tactical success.

| ATGM | Range | Font Colour | Restriction | Fired As |
|------|-------|-------------|-------------|----------|
| **RPG** | 1,000m (short) | Red | Any Foot FE can carry | Gold Atk (ATGM column) |
| **Stabber** | 3,000m | Red | **Only Russian Tracked FEs** | Gold Atk (Stabber column) |

Both ATGMs function as **gold Atk** when fired -- they can target any vehicle type, including gold MBTs. They use dedicated columns on the ATGM Fire Results Table (separate from the standard Direct Fire Results Table). Firing an ATGM does not consume Ammo.

### RPG (Rocket Propelled Grenade)

- Carried by Foot PLs (standard equipment for Russian infantry).
- Range of only **1,000m** -- must get close to the target.
- Full RPG marker = 2 shots; Depleted = 1 shot, then removed.
- Fires on the RPG column of the ATGM table.
- Practical use: last-ditch anti-armour for infantry in close terrain (Urban, Dense Wood). The short range means infantry must be dangerously close to use it. Best used against APCs/IFVs rather than wasted on MBTs (the ATGM table odds are not great at the best of times).

### Stabber (Russian ATGM -- catch-all term)

- Can **only** be carried by Russian Tracked FEs (IFV/APCs and MBTs, or Atk SECTs).
- Range of **3,000m** -- outranges standard Atk (2,000m) and matches NATO MBT Atk range.
- Fires on the Stabber column of the ATGM table.
- Most start **Depleted** in ORBATs (one shot only).
- The Stabber is Russia's primary anti-MBT weapon and the most strategically important asset in the Russian arsenal.

> [!tip] Stabbers are irreplaceable
> In most scenarios, the total number of Stabber shots available to Russia is fixed and small (typically 5-6 across the entire force). Each shot that misses is a permanent loss of anti-MBT capability. Each shot that hits can neutralise a NATO MBT worth significantly more than the Stabber. This one-shot-one-kill dynamic makes Stabber fire the highest-stakes action in the game for the Russian player.

---

## How to Play Russia: Strategic Summary

Playing Russia in BC:B is fundamentally different from playing NATO. Where NATO relies on individual unit quality -- superior TQ, higher Resilience, better Move-Fire, Mission Command flexibility -- Russia relies on **system-level advantages**: more units, more artillery, more drones, better EW, and the discipline to execute a pre-set plan perfectly. Here is how to leverage those advantages.

### 1. Numerical Superiority Tactics

Russia puts more FEs on the map than NATO. This advantage must be actively exploited:

- **Concentrate force at the decisive point.** Do not spread your units evenly. Mass multiple TGps against a single NATO position to achieve overwhelming Assault ratios and multiple Direct Fire angles.
- **Accept losses at secondary points.** You have units to spare (relatively). A screening force that delays NATO at one location while your main effort crushes another is a valid trade.
- **Overwhelm Overwatch.** NATO units on Overwatch can Reactive Fire at one moving FE. If you move multiple FEs simultaneously (from the same TGp activation), the Overwatch unit can only react to one. The others advance freely.
- **Command Activations for mass.** Use HQ Command Activations to activate multiple TGps simultaneously. This allows coordinated Assaults with FEs from different TGps, creating Assault ratios that NATO cannot match with its fewer units.

### 2. Artillery-First Doctrine

Russian military doctrine emphasises massed fires before manoeuvre. BC:B rewards this approach:

- **Open with artillery.** In the first turns, before ground contact, use your 152mm FMs to Suppress or damage NATO positions along your axis of advance. The Auto Suppression effect (all FE types within 250m) degrades NATO's ability to react.
- **Fire Plan accuracy.** Write Fire Plans during the Preparation Phase that target the most likely NATO positions. Under Red Doctrine, you cannot change Fire Plans -- so study the map, anticipate NATO's setup, and place your Grid Intersections accordingly. Inside the Fire Plan area: 1 ETX. Outside: 3 ETX. Getting this right is the difference between efficient fire support and a flood of ETX that fuels NATO's EW against you.
- **Sequence fires before movement.** Activate your Artillery and FPV SAs before activating ground TGps. Suppress or damage the target area, then advance your ground forces into the softened position.
- **Use FPV to finish what artillery starts.** If artillery Suppresses a target but does not destroy it, follow up with FPV. The Double-Tap is ideal for finishing damaged or Suppressed FEs.

### 3. Protecting Stabber ATGMs

Stabbers are your only reliable anti-MBT weapon. Their protection is a strategic priority:

- **Embed Stabber-carrying SECTs.** The Atk SECT with its Stabber should be Embedded in a Tracked PL whenever possible. This hides it from direct targeting and protects it from all but the most catastrophic damage.
- **Do not fire early.** Resist the temptation to fire Stabbers at the first NATO vehicle you see. Wait until a NATO MBT is in range and you have maximum DRM advantage (static firing, Target markers, no terrain penalties).
- **Plan Stabber positioning in the Sync Matrix.** Since you cannot issue New Orders, the TGp carrying your Stabber must be on an Order path that brings it to where NATO MBTs are expected. Predict the armour engagement area and route your Stabber-carrying TGps there.
- **Resupply is possible but costly.** A1 Echelon ("Sect") can deliver replacement Stabbers (Depleted only) via REPLENDEM. Plan supply routes that intersect with your anti-armour TGps.

### 4. Managing Red Doctrine Constraints

Red Doctrine is both Russia's greatest weakness and its defining characteristic. Success requires embracing its constraints:

- **The plan must be perfect from the start.** Every Order, every Fire Plan, every TGp composition is locked during the Preparation Phase. Spend the majority of your Preparation Phase time studying the map, anticipating NATO positions, and writing detailed turn-by-turn Orders.
- **Write Orders that account for contingencies.** Use broad Order verbs that give your TGps flexibility within the constraint. "Seize Hill 55 via Route Alpha" is more flexible than "Move to E32/N50" because it allows different interpretations of how to achieve the objective.
- **Accept that some Orders will become irrelevant.** If a TGp cannot fulfil its Order due to losses or delay, it should attempt to do so on following turns or wait for a pre-written new Order to apply. This means writing realistic timelines -- do not assume your forces will arrive on schedule.
- **You cannot "Pull Back to Safety."** The Moving to Safety rule does not apply to Russia. If your TGp is caught in the open with enemies in LoS, it must continue following its Order. This makes route planning and terrain usage critical -- never advance through exposed ground without a plan for what happens if the enemy is waiting.
- **Leverage the advantages.** Red Doctrine is compensated by extra FMs and EW Chit draws. Use these aggressively.

### 5. Leveraging the EW Advantage

In Advanced mode, Russia draws **2 EW Chits** in the EW Activity step and keeps 1 (before NATO draws its chit). This is a significant advantage:

- **Choose wisely.** You see two chits and keep the better one. This means you are more likely to get high-impact effects (FPV Signal Boost for an extra FM, FPV Jamming to degrade NATO's FPV, or direct combat DRM effects).
- **Time your chits.** EW Chits can be played immediately or held for later in the turn. Hold chits for critical moments -- play FPV Jamming when NATO activates its FPV, or play a combat DRM chit when a key firefight occurs.
- **ETX management.** More ETX generated by your side means the opponent is more likely to draw a second EW Chit. Under Red Doctrine, you generate less ETX from New Orders (since you cannot issue them), but artillery and FPV fires still generate ETX. Fire within your Fire Plan areas to minimise ETX generation.

---

## Detailed Force Comparison Table: Russia vs NATO

This table provides a complete side-by-side comparison of every unit type, showing exactly where Russia is disadvantaged, where it is at parity, and where it has the edge.

### Platoon-Sized FEs (PL -- 3 dots)

| Stat | Russia Foot PL | NATO Foot PL | Russia IFV/APC PL | NATO IFV/APC PL | Russia MBT PL | NATO MBT PL |
|------|---------------|-------------|-------------------|-----------------|---------------|-------------|
| **Apers** | 3 (green) | 3 (green) | 2 (green) | 2 (green) | 2 (green) | 2 (green) |
| **Atk** | -- | -- | 1 (purple) | 1 (purple) | 3 (**purple**) | 4 (**gold**) |
| **Atk Range** | -- | -- | 2,000m | 2,000m | 2,000m | **3,000m** |
| **Assault** | 3 | 3 | 1 | 1 | 1 | 1 |
| **TQ (full)** | 4 (**0 DRM**) | 6 (**+2 DRM**) | 4 (**0 DRM**) | 6 (**+2 DRM**) | 4 (**0 DRM**) | 6 (**+2 DRM**) |
| **TQ (half)** | 3 (**-1 DRM**) | 5 (**+1 DRM**) | 3 (**-1 DRM**) | 5 (**+1 DRM**) | 3 (**-1 DRM**) | 5 (**+1 DRM**) |
| **Resilience** | 3 | **4** | 3 | **4** | 3 | **4** |
| **Move-Fire DRM** | N/A (Foot) | N/A (Foot) | **-2** | -1 | **-2** | -1 |
| **Can kill MBTs?** | No (ATGM only) | No (ATGM only) | No (ATGM only) | No (ATGM only) | **No (main gun)** | **Yes** |
| **FE Type** | F (green) | F (green) | T (purple) | T (purple) | T (**gold**) | T (**gold**) |

### Section-Sized FEs (SECT -- 1 dot)

| Stat | Russia HQ | NATO HQ | Russia Recce | NATO Recce | Russia Atk SECT | (NATO has no equivalent) |
|------|-----------|---------|-------------|------------|----------------|--------------------------|
| **C2 Rating** | 3 | 3 | -- | -- | -- | -- |
| **Apers** | -- | 2 | 2 | 2 | -- | -- |
| **Atk** | -- | 2 (purple) | 2 (purple) | 2 (purple) | 1 (purple) | -- |
| **TQ** | 4-5 | 6 | 4 | 6 | ~4 | -- |
| **Resilience** | 1 | 1 | 2 | 2 | 1-2 | -- |
| **ISTAR** | Yes | Yes | Yes | Yes | No | -- |
| **Special** | Red Doctrine limits | Mission Command | Same LoS rules | Same LoS rules | Carries Stabber | -- |

### Support Assets

| Stat | Russia 152mm Arty | NATO 155mm Arty | Russia FPV | NATO FPV | Russia UAS | NATO UAS |
|------|-------------------|-----------------|-----------|----------|-----------|----------|
| **Range** | Unlimited | Unlimited | Unlimited | Unlimited | N/A | N/A |
| **Danger Close** | 500m (250m Recce) | 500m (250m Recce) | None | None | N/A | N/A |
| **Auto Suppress** | All FE types, 250m | All FE types, 250m | Foot only, 250m | Foot only, 250m | N/A | N/A |
| **FMs (Scen. 1)** | **5** | **0** | **6** | 4 | N/A | N/A |
| **Fire Plan flex** | **Fixed** (Red Doctrine) | Changeable | **Fixed** | Changeable | N/A | N/A |
| **Double-Tap** | No | No | Yes | Yes | N/A | N/A |

### Systemic Advantages

| Factor | Russia | NATO | Impact |
|--------|--------|------|--------|
| **Total FEs** | More | Fewer | Russia can absorb more losses and concentrate more force |
| **Artillery FMs** | More (Adv. mode bonus) | Fewer | Russia has heavier preparatory fires |
| **FPV FMs** | More (Adv. mode bonus) | Fewer | Russia has more drone strike capability |
| **EW Chit draw** | 2 (keep 1) in Adv. mode | 1 | Russia gets better EW effects |
| **Doctrine** | Red Doctrine (rigid) | Mission Command (flexible) | NATO can adapt; Russia cannot |
| **MBT vs MBT** | Cannot engage (purple Atk) | Can engage (gold Atk) | NATO dominates the armour battle |
| **Move-Fire** | -2 DRM | -1 DRM | NATO more effective while moving |
| **TQ baseline** | 4 (0 DRM) | 6 (+2 DRM) | NATO rolls better on every test |
| **Resilience** | 3 per PL | 4 per PL | NATO survives longer per unit |
| **ATGM quality** | RPG (1,000m), Stabber (3,000m, scarce) | NLAW (1,000m), Javelin (3,000m+) | Similar capability but Stabbers are scarcer |

---

## Summary: The Russian Dilemma

Playing Russia in BC:B is an exercise in managing disadvantage through superior numbers and firepower. Your individual units are worse than NATO's at everything that involves dice rolls. Your MBTs cannot kill NATO MBTs. Your doctrine prevents mid-game adaptation. Your troops Rally worse, fire worse, and die sooner.

But you have **more of everything** -- more infantry, more vehicles, more artillery shells, more drone strikes, and better electronic warfare. The Russian player wins not by outfighting NATO unit-for-unit, but by **outplanning** them in the Preparation Phase, **outgunning** them with massed Indirect Fire, **overwhelming** them with numerical superiority at the point of attack, and **conserving** Stabber ATGMs for the critical moment when a NATO MBT must be destroyed.

The plan must be right from the start. There are no second chances under Red Doctrine.
