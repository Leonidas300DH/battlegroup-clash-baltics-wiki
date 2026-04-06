---
title: Line of Sight
type: concept
tags: [los, cover, obstruction, istar, visibility]
sources: [Rulebook - FINAL.pdf, Errata_FAQ 1.2 - Battlegroup Clash_ Baltics.pdf]
created: 2026-04-05
updated: 2026-04-05
---

# Line of Sight (LoS)

Line of Sight is drawn between **any part** of the sighting FE's counter to **any part** of the target FE's counter. BC:B uses a liberal approach to LoS, balanced by DRMs for Cover and partial obstructions.

## LoS Requirements

For LoS to exist, **all** of the following must be true:
1. Target [[force-elements|Force Element (FE)]] is **no more than 3,000m** away (exception: Recce = 4,000m)
2. There is **no Obstruction** along the line
3. There is **no more than one Partial Obstruction** along the line

## Obstructions (block LoS completely)

| Obstruction | Notes |
|-------------|-------|
| Dense Woods | Blocks LoS |
| Urban Terrain | Blocks LoS |
| Elevated Terrain | Hill crests crossing the LoS line |
| [[force-elements|FE]] counter | Any friendly or enemy counter on the same elevation |

> [!tip]
> If there's doubt about whether LoS exists: assume it **does** if the target is a **[[force-elements|Platoon (PL)]]** (3 dots), and **doesn't** if the target is a **[[force-elements|Section (SECT)]]** (1 dot).

## Partial Obstructions (Dice Roll Modifier (DRM) penalty, 2 max)

| Partial Obstruction | Dice Roll Modifier (DRM) Penalty |
|---------------------|-------------|
| Light Wood | -2 [[glossary|DRM]] |
| Light Urban | -2 [[glossary|DRM]] |
| Smoke marker | -3 [[glossary|DRM]] |

- LoS **can** be drawn through **one** Partial Obstruction (with the DRM penalty)
- LoS **cannot** be drawn through **two or more separate** Partial Obstructions
- A Partial Obstruction is defined by a single continuous border

> [!warning] Errata 1.2 Correction
> The original rulebook (p.19) incorrectly stated LoS could pass through "no more than two separate Partial Obstructions." The [[errata-faq-1-2|Errata 1.2]] corrects this to **one** Partial Obstruction maximum.

> [!note] Optional Rule
> [[optional-rules|LoS through Partial Obstacles]]: LoS cannot be drawn more than 250m through a single Partial Obstruction.

## 250m Exception

LoS can **always** be drawn without restriction or penalty if:
- Sighting and target FE are **within 250m** of each other
- For **ISTAR only**: the sighting FE is a Recce FE and the target is **within 500m**

This is critical for:
- [[move-fire|Move-Fire]] through Dense Woods/Urban (move within 250m, Fire, move out)
- Recce calling Indirect Fire on targets in Urban/Dense Woods without being seen back

## Cover

A **Foot [[force-elements|FE]]** is in Cover if more than 50% of its counter is in non-Open [[terrain|Terrain]]:

| Cover Type | DRM |
|------------|-----|
| Light Wood | -1 |
| Light Urban | -1 |
| Dense Wood | -2 |
| Urban | -2 |

> [!warning]
> Cover from Light Wood and Dense Wood **does not apply** against Artillery fire, **unless** the Foot FE has a [[dig-shell-scrape|Shell Scrape]] marker.

## Vehicle Vulnerability

A Foot [[force-elements|FE]] in **Urban or Dense Wood** (50%+ of counter) firing at a Tracked or Wheeled [[force-elements|FE]] **also in Urban or Dense Wood** (50%+ of counter) gains a **+2 [[glossary|DRM]]**.

> Infantry can stalk vehicles in close terrain, while vehicles have less capacity for evasive maneuver.

## UAS and LoS

The [[support-assets#UAS|UAS]] uses a different LoS system:
- Has LoS to the **4 Grid Squares adjacent** to its Grid Intersection position
- **Obstructions do not apply** — UAS can see everything within its Grid Squares
- If any part of a target FE's counter is in the Grid Square (even partially), UAS has LoS

## ISTAR LoS

[[force-elements#ISTAR Assets|Intelligence, Surveillance, Target Acquisition & Reconnaissance (ISTAR) Assets]] (Recce, FST, [[force-elements|HQ]], [[support-assets|UAS]]) provide LoS for [[indirect-fire|Indirect Fire]]:
- **Recce** FEs: 4,000m range, 500m exception for ISTAR (can call fire on targets in Dense Woods/Urban from 500m away without the target having LoS back)
- **Recce** does not trigger Danger Close for Artillery at 250m (only at 500m for other FEs)
- An **Embedded [[force-elements|ISTAR]] [[force-elements|SECT]]** can provide [[force-elements|ISTAR]] from within a [[stacking|Stack]]

## Hills and Elevation (FAQ)

> [!note] FAQ Clarification
> Hills **only** act as Obstructions when LoS crosses their crests. Being on a hill does **not** grant any additional LoS advantage — a [[force-elements|FE]] on a hill cannot ignore Obstructions or Partial Obstructions when targeting enemies at ground level.

## Practical Tips

> [!tip]
> At the end of a movement, the activating side should state the **intention** of the positioning: "I'm placing the counter here so that your FE cannot draw LoS to it." This prevents arguments about exact positioning.
