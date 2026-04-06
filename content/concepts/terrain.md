---
title: Terrain
type: concept
tags: [terrain, movement, maps, geography]
sources: [Rulebook - FINAL.pdf]
created: 2026-04-05
updated: 2026-04-05
---

# Terrain

BC:B maps are based on **Estonian satellite imagery** with overlaid borders identifying terrain types. Each 1cm = 100m. Grid Squares are 10cm × 10cm (1,000m × 1,000m).

## Terrain Types

| Terrain | [[line-of-sight|Line of Sight (LoS)]] Effect | Cover (Foot [[force-elements|Force Elements (FEs)]]) | Notes |
|---------|-----------|-------------------|-------|
| **Open** | None | None | Default if no border is drawn |
| **Light Wood** | Partial Obstruction (-2 [[glossary|Dice Roll Modifier (DRM)]]) | -1 [[glossary|DRM]] | Cover does NOT apply vs Artillery unless Shell Scrape |
| **Dense Wood** | Full Obstruction | -2 [[glossary|DRM]] | No-Go for Tracked and Wheeled (except on Roads) |
| **Light Urban** | Partial Obstruction (-2 [[glossary|DRM]]) | -1 [[glossary|DRM]] | Minor Roads ignored by Wheeled/Tracked |
| **Urban** | Full Obstruction | -2 [[glossary|DRM]] | Minor Roads ignored by Wheeled/Tracked |
| **Hills** | Elevated Terrain | — | Crests block [[line-of-sight|LoS]] between [[force-elements|FEs]] on opposite sides |

## Movement Allowance by Type

Movement Allowances are on the **Movement Table (Player Aid 2)**. Key values from the rulebook:

| Force Element (FE) Type | Open | Light Wood | Dense Wood | Minor Road in Dense Wood | Major Road |
|---------|------|------------|------------|--------------------------|------------|
| **Foot ([[force-elements|F]])** | 500m | 500m | Can enter | — | 1,000m |
| **Wheeled (W)** | — | — | No-Go* | 1,000m* | 2,000m+ |
| **Tracked (T)** | 2,000m | — | No-Go* | 1,000m | 2,000m+ |

*No-Go: can only fully enter (50%+ of counter) if on a Road

### Mixed Terrain Movement
When crossing multiple terrain types, calculate what **percentage** of the Movement Allowance each segment uses:

> Example: A Foot [[force-elements|FE]] moves 250m through Light Woods (50% of its 500m Light Woods allowance used). It can then move 500m on a Minor Road (50% of its 1,000m road allowance), using its remaining 50%.

### Column Move
A Wheeled or Tracked [[force-elements|FE]] on a **Major Road** throughout its Move, with **no enemy [[force-elements|FE]] in [[line-of-sight|LoS]]** at any point, may move up to **3,000m**.

## No-Go Terrain

**Dense Wood** is No-Go for Tracked and Wheeled [[force-elements|FEs]]:
- May only fully enter (50%+ of counter inside) if **on a Road**
- May **partially** enter (less than 50% of counter inside) even without a Road — useful for blocking [[line-of-sight|LoS]]
- Can move through visible gaps between No-Go sections that are smaller than the counter

## Rivers and Bridges

- Rivers are **No-Go** for all [[force-elements|FE]] types
- Cannot have more than 50% of counter across a River unless crossing at a **Bridge**
- Bridges count as Roads for Movement Allowance
- Scenario rules may restrict how many Tracked [[force-elements|Platoons (PLs)]] can cross a Bridge per turn
- [[force-elements|FEs]] on opposite sides of a River can be within 250m of each other (exception to normal 250m restriction)

## Roads

- Roads only count for **movement purposes** — in all other cases ([[line-of-sight|Line of Sight (LoS)]], Cover), the surrounding Terrain applies
- **Minor Roads** are ignored by Wheeled and Tracked [[force-elements|FEs]] in Light Wood, Light Urban, and Urban Terrain
- Only a **part** of the counter needs to be on the Road to count as using it

## Terrain Borders

Hills, Light Woods, Dense Woods, Light Urban, and Urban Terrain have **borders drawn around them** on the map. If there is no border, treat the Terrain as **Open**.

## Maps

| Map | Sides |
|-----|-------|
| Sheet 1 | Map A / Map B |
| Sheet 2 | Map C / Map D |

- Scenarios specify which map(s) to use
- Scenario 5 uses two maps placed side by side (aligning Northing Grid Lines)
- Maps are designed to be played with a sheet of transparent plastic on top (to protect and flatten)
