---
title: Boundary Lines
type: rule
tags: [boundary-lines, orders, control-measures, supplement]
sources: [EWAdvSupp_Rules.pdf, EWAdvSupp_PlayerAids7&8.pdf]
created: 2026-04-05
updated: 2026-04-05
---

# Boundary Lines (1.2.1.4)

From the [[ew-adv-supp-rules|Advanced Rules Supplement]]. Each [[task-groups|Task Group (TGp)]] must be assigned a geographic area — a **Boundary Line** — on the [[sync-matrix|Sync Matrix]] for each Turn. [[force-elements|Force Elements (FEs)]] that leave this area generate [[electronic-warfare|Electronic Transmission (ETX)]].

> [!note] Design note
> Without geographic control measures, there would be greater battlefield chaos and friendly fire risk. The [[electronic-warfare|ETX]] cost for crossing reflects radio transmissions required to de-conflict the incident.

## Setting a Boundary Line

Boundary Lines can be expressed as:
- One or more Grid Squares
- Sections of Grid Squares
- Descriptive coordinates (e.g. "500m either side of the E20 Road")

Write them in the Boundary Line section of the Advanced [[sync-matrix|Sync Matrix]] for each [[task-groups|TGp]] per Turn.

### Suggested Frontages

| Order Type | Typical Boundary Width |
|------------|----------------------|
| Offensive Orders | 500m–1,500m (less in restrictive terrain, more in open with few enemies) |
| Defensive Orders | 1,000m–2,000m (more in defensible terrain or if stretched) |

## When Crossing Generates ETX

| Situation | [[electronic-warfare|ETX]] Generated |
|-----------|-----|
| **Overlapping Boundary Lines**: Two or more [[task-groups|TGps]] deliberately share the same area | 1 [[electronic-warfare|ETX]] per [[task-groups|TGp]] per Turn, when Activated |
| **Crossing during action**: An [[force-elements|FE]] or [[stacking|Stack]] crosses its [[task-groups|TGp]]'s Boundary Line via Move, [[assault|Assault]], or Pull Back | 1 [[electronic-warfare|ETX]] per [[force-elements|FE]]/[[stacking|Stack]] at the moment of crossing |
| **Activated outside Boundary**: An [[force-elements|FE]]/[[stacking|Stack]] is Activated while already outside its Boundary Line | 1 [[electronic-warfare|ETX]] per [[force-elements|FE]]/[[stacking|Stack]] at Activation |

> [!note]
> A [[stacking|Stack]] counts as a single unit for boundary crossing — 1 [[electronic-warfare|ETX]] per Stack, not per individual [[force-elements|FE]] in the Stack.

## Exceptions

| Exception | Reason |
|-----------|--------|
| **A1 Echelon [[task-groups|TGps]]** | Logistics units roam freely to resupply |
| **[[task-groups|TGps]] with Screen or Hold Order** | Screening forces track the enemy and cannot be geographically restricted (with [[advanced-orders|Advanced Orders]] rules) |
| **[[task-groups|TGps]] with permanent Scenario Orders** | Specific to certain Russian units in Scenarios 2–5 |

## Changing Boundary Lines

Boundary Lines can be changed by issuing [[orders#New Orders|New Orders]] (rule 2.2), with the same cost: Reorg marker, opponent draws 1 [[electronic-warfare|ETX]].

## Tactical Implications

- **Concentrating multiple [[task-groups|TGps]]** on one objective generates significant [[electronic-warfare|ETX]] from overlapping Boundary Lines
- **Alternative**: use the [[optional-rules|Flexible Task Groups]] rule to merge units into a single larger [[task-groups|TGp]] — avoids boundary overlap but reduces activation flexibility
- Plan Boundary Lines to account for **terrain and delays** — if a [[stacking|Stack]] is slowed by Suppression and ends up outside its boundary, it generates [[electronic-warfare|ETX]] every Turn until it's back inside
