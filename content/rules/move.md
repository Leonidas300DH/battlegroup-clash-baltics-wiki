---
title: Move Action
type: rule
tags: [move, movement, terrain, action]
sources: [Rulebook - FINAL.pdf]
created: 2026-04-05
updated: 2026-04-05
---

# Move Action (4.1)

An activating [[force-elements|Force Element (FE)]]/Stack moves up to its **Movement Allowance**, which varies by [[force-elements|FE]] Type (Foot, Wheeled, Tracked) and [[terrain|Terrain]]. The [[force-elements|FE]] receives a **Moved marker** after completing movement.

## Movement Allowance

Movement Allowances are on the **Movement Table (Player Aid 2)**. Key values:
- **Foot in Open**: 500m
- **Tracked in Open**: 2,000m
- **Column Move** (Tracked/Wheeled on Major Road, no enemy in [[line-of-sight|Line of Sight (LoS)]]): up to 3,000m

### [[morale|Morale]] Effects on Movement
- **Suppressed**: 50% Movement Allowance (does not apply for [[assault|Assaults]])
- **Disrupted**: 50% Movement Allowance AND may not move **toward** any enemy [[force-elements|FE]] in [[line-of-sight|LoS]]

## Movement Restrictions

1. **Minimum distance**: Must end at least **250m** from starting position (prevents gaming the Moved [[glossary|Dice Roll Modifier (DRM)]] for Indirect Fire; if you want to stay within 250m, use [[hold|Hold]] instead)
2. **Blocking**: Enemy [[force-elements|FE]] counters block movement — cannot move through them (but does not block placement at an [[assault|Assault Location]])
3. **End position**:
   - Cannot overlap counters with another friendly [[force-elements|FE]] (unless [[stacking|Mounting/Embedding]])
   - Cannot end within **250m** of an enemy [[force-elements|FE]] (unless on the other side of a River)

> [!note]
> If these restrictions can't be met due to [[electronic-warfare|Electronic Warfare (EW)]] Chit effects or Suppression/Disruption received during the Move, the [[force-elements|FE]] should be positioned as close as possible while meeting the criteria.

## No-Go Terrain

- **Dense Wood**: No-Go for Tracked and Wheeled (can only enter if on a Road; may partially enter < 50% of counter)
- **Rivers**: No-Go for all [[force-elements|FE]] types (must cross at a Bridge)

## UAS Movement

The [[support-assets#UAS|Unmanned Aerial Support drone (UAS)]] moves differently:
- Can be placed at **any Grid Intersection** on the map
- May coexist with an enemy [[support-assets|UAS]]
- Begins off-map; placed on first Move Action

## Moving Off-Map

An [[force-elements|FE]] moved off the map is **removed from the game**. It does not count as Eliminated but cannot re-enter play.

## Mixed Terrain

When crossing multiple terrain types, calculate the **percentage** of Movement Allowance used in each terrain type. Total across all terrain must not exceed 100%.

## Related

- [[move-fire|Move-Fire]] — move and fire in the same action
- [[stacking#Mounting|Mounting]] / [[stacking#Embedding|Embedding]] — can occur at the end of a Move Action
- [[overwatch#Reactive Fire|Reactive Fire]] — opponents with Overwatch can fire at moving [[force-elements|FEs]]
