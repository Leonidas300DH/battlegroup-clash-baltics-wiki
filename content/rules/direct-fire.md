---
title: Direct Fire
type: rule
tags: [direct-fire, combat, apers, atk, action]
sources: [Rulebook - FINAL.pdf]
created: 2026-04-05
updated: 2026-04-05
---

# Direct Fire Action (4.3)

Direct Fire represents a [[force-elements|Force Element (FE)]] shooting at a visible enemy within range using its inherent weapons or [[atgm|Anti-Tank Guided Missiles (ATGMs)]].

## Resolution Sequence

1. **Declare** target and firing [[force-elements|FE]](s) — target must be within [[line-of-sight|Line of Sight (LoS)]] and Range
2. **Play** a [[electronic-warfare#Target Markers|Target marker]] (if available/desired)
3. **Roll 2D6**, apply DRMs from the Direct Fire DRM Table (Player Aid 3)
4. **Apply result** from the Direct Fire Results Table (Player Aid 3), using the column for the Firepower Value/ATGM used
5. **Reduce Ammo** by 1 (Advanced mode, not if ATGM used)
6. **Flip/remove ATGM** marker if used (Full → Depleted → Remove)

## Firepower and Targeting

The color-coded targeting system determines which weapons can target which FE Types:

| Target [[force-elements|FE]] Type | Background Color | Can be targeted by |
|---------------|-----------------|-------------------|
| Foot (F) | Green | **Apers (green)** only |
| Wheeled (W) | Grey | **Any** Firepower Value |
| Tracked (T) - [[force-elements|Armoured Personnel Carrier (APC)]]/[[force-elements|Infantry Fighting Vehicle (IFV)]] | Purple | **Any Atk** (purple or gold) |
| Tracked (T) - [[force-elements|Main Battle Tank (MBT)]] | Gold | **Gold Atk only** (or [[atgm|ATGMs]]) |

**Firing [[force-elements|FE]] must have** a Firepower Value box matching the required color. If it doesn't, it **cannot** Direct Fire at that target.

## Firepower Values

- **Apers Value** (green box): anti-personnel. Used against Foot FEs
- **Atk Value** (purple box): anti-tank. Used against vehicles
- **Atk Value** (gold box): heavy anti-tank. Can target MBTs (gold Tracked) and all purple targets

The number in the box determines the **column** on the Direct Fire Results Table.

## Range

| Weapon | Standard Range | Notes |
|--------|---------------|-------|
| Standard Apers/Atk | 2,000m | Default |
| Apers/Atk with small '1' | 1,000m | Marked on counter |
| Apers/Atk with small '3' | 3,000m | Marked on counter |
| ATGMs | Varies (1,000-3,000m) | Shown on ATGM marker |

## Key DRMs

From the Direct Fire DRM Table (Player Aid 3):

| Modifier | [[glossary|Dice Roll Modifier (DRM)]] | Notes |
|----------|-----|-------|
| Firing [[force-elements|FE]]'s [[force-elements|Troop Quality (TQ)]] | +/- ([[force-elements|TQ]] value as modifier) | [[force-elements|TQ]] of 6 = +2, [[force-elements|TQ]] of 4 = 0 (varies by scale) |
| [[electronic-warfare#Target Markers\|Target marker]] | +1 or +2 | One per fire action |
| [[overwatch\|Overwatch]] marker (firing FE) | +2 | Must have Overwatch marker |
| [[move-fire\|Move-Fire]] (NATO) | -1 [[glossary\|DRM]] | NATO has better fire-on-the-move |
| Move-Fire (Russia) | -2 [[glossary\|DRM]] | Russia has worse fire-on-the-move |
| [[line-of-sight#Partial Obstructions\|Partial Obstruction]] (Light Wood/Urban) | -2 | Through, from, or into |
| Partial Obstruction (Smoke) | -3 | Through, from, or into |
| [[line-of-sight#Cover\|Cover]] (Light Wood/Urban) | -1 | Foot FE with 50%+ in terrain |
| Cover (Dense Wood/Urban) | -2 | Foot FE with 50%+ in terrain |
| [[dig-shell-scrape\|Digging]] marker | -1 | Foot FE only |
| [[dig-shell-scrape\|Shell Scrape]] marker | -2 | Foot FE only |
| [[line-of-sight#Vehicle Vulnerability\|Vehicle Vulnerability]] | +2 | Foot in Urban/Dense firing at vehicle in same |
| [[morale\|Suppressed]] firing [[force-elements\|FE]] | -1 | Via [[force-elements\|TQ]] modifier |
| Disrupted firing [[force-elements\|FE]] | -2 | Via [[force-elements\|TQ]] modifier |

## Applying Hits

See [[combat-effectiveness]] for full details on how Hits reduce Resilience, affect [[morale|Morale]], and interact with [[stacking|Stacks]].

## Ammo (Advanced Mode)

Each Direct Fire action costs **1 Ammo** (except when using an [[atgm|ATGM]]). If a [[force-elements|Platoon (PL)]]-sized [[force-elements|FE]] has **0 Ammo**, it automatically uses the **'1' column** on the Results Table regardless of its Firepower Value.

See [[ammo]] for details.

## Using ATGMs

See [[atgm]] for details. An FE with an ATGM can use it as a **gold Atk value**, using the dedicated ATGM column on the Fire Results Table. After use: Full → Depleted (flip), or if already Depleted → Remove.
