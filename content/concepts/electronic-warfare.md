---
title: Electronic Warfare
type: concept
tags: [ew, etx, target-markers, ew-chits, electronic-warfare]
sources: [Rulebook - FINAL.pdf]
created: 2026-04-05
updated: 2026-04-05
---

# Electronic Warfare (EW)

Electronic warfare is a **critical feature** of BC:B. It creates a sub-game around radio emissions: certain actions generate electronic transmissions (ETX), which the opponent can exploit for targeting bonuses and EW effects.

## The EW Cycle

```
Actions generate ETX → Opponent draws ETX markers
                          ↓
                    Command Phase: EW Activity
                          ↓
              ETX markers revealed → become Target markers
                          ↓
              EW Chits drawn (side with more ETX draws extra)
                          ↓
              Target markers used as DRM bonuses on Fires
              EW Chits played for various effects
```

## ETX Markers

**What they are:** 16 double-sided tokens with hidden values: 0 (×4), 1 (×9), 2 (×3).

**When drawn:** The **opposing side** draws ETX markers when the activating side takes certain actions. The markers are placed **face-down** in the opponent's play area.

> [!note] Design note
> Variable values create Fog of War — players cannot deterministically calculate how many ETX they can generate while staying below their opponent's total.

### ETX Generation (Basic Mode)

| Action | [[support-assets|Unmanned Aerial Support drone (UAS)]] has [[line-of-sight|Line of Sight (LoS)]] to target | [[support-assets|UAS]] has no [[line-of-sight|LoS]] |
|--------|----------------------|----------------|
| Mortar Indirect Fire | 1 [[electronic-warfare|ETX]] | 2 [[electronic-warfare|ETX]] |
| Artillery Indirect Fire | 1 [[electronic-warfare|ETX]] | 3 [[electronic-warfare|ETX]] |

### ETX Generation (Standard/Advanced Mode)

Uses different rules based on [[fire-plans|Fire Plans]]:

| [[support-assets|SA]]/[[force-elements|FE]] Type | In Fire Plan area | Not in Fire Plan area |
|------------|------------------|----------------------|
| Mortar | 1 [[electronic-warfare|ETX]] | 3 [[electronic-warfare|ETX]] |
| Artillery | 1 [[electronic-warfare|ETX]] | 3 [[electronic-warfare|ETX]] |
| [[support-assets|FPV]] | 0 [[electronic-warfare|ETX]] | 3 [[electronic-warfare|ETX]]* |

*If FPV takes a [[indirect-fire#FPV Double-Tap|Double-Tap]] outside the Fire Plan, the ETX is not drawn twice.

**Additional ETX sources (Standard/Advanced):**
- Issuing [[orders#New Orders|New Orders]]: opponent draws 1 [[electronic-warfare|ETX]] per Task Group/[[support-assets|SA]]
- [[command-activation|Command Activation]]: opponent draws 1 [[electronic-warfare|ETX]] per additional Task Group activated
- [[replendem|REPLENDEM]] action: opponent draws 1 [[electronic-warfare|ETX]]

## EW Activity Step (Command Phase)

Resolved each turn in the [[command-phase|Command Phase]]:

1. **Flip** all ETX markers in each side's play area face-up
2. **Exchange** non-zero ETX for **Target markers** of matching value
3. **Draw EW Chit** — each side draws 1 EW Chit from the pool
   - In **Advanced mode**, Russia draws **2 Chits** and keeps 1 (returns the other before NATO draws)
4. **Extra Chit** — the side with the **higher total ETX** draws a second EW Chit (Russia must draw randomly if it's drawing the extra; in Standard/Advanced initial Chit drawing)
   - If tied, neither draws a second Chit
5. **Immediate Chits** — if a drawn Chit has an "Immediate" effect, it must be played now (non-Initiative side from previous turn plays first)
6. **Return** all ETX markers face-down to the common pile and shuffle

> [!warning]
> On Turn 1, only step 3 (drawing EW Chits) applies — no ETX has been generated yet.

## Target Markers

- 12 markers with values of 1 (×9) and 2 (×3)
- Can be played when taking a Direct or Indirect Fire action to add a **positive [[glossary|Dice Roll Modifier (DRM)]]** equal to the marker's value
- Only **one** Target marker can be used per Fire action
- Unused Target markers are returned to the supply at end of turn

## EW Chits

7 unique double-sided chits, each with two effects:
- **Pink side**: negative effect on opponent
- **Green side**: positive effect for the playing side
- Only one side of the Chit can be used — the choice is made when the Chit is played
- Drawn Chits are **hidden** until played
- Once played, they are discarded, then returned to the draw pool in Clean-up

### Known EW Chit Effects (from rulebook examples)

| Chit | Effect (example from text) |
|------|---------------------------|
| 3A/B | +2 [[glossary|DRM]] on artillery, or -2 [[glossary|DRM]] against enemy artillery |
| 4A ([[support-assets|FPV]] signal boost) | Immediate: your [[support-assets|FPV]] gains 1 extra Fire Mission |
| 4B ([[support-assets|FPV]] jamming) | Hold: opponent's [[support-assets|FPV]] attack rolls 1D6 as a negative [[glossary|DRM]] |
| 6A/B | Indirect Fire outside Fire Plan for only 1 [[electronic-warfare|ETX]], or prevent opponent from doing so |
| Signal Jamming | Roll 1D6, apply as -[[glossary|DRM]] on opponent's Indirect Fire |

> [!note]
> EW Chits 6A/B and 7A/B are **removed** in Basic mode (only 5 Chits used). In Standard/Advanced, all 7 are used. Full Chit descriptions are on **Player Aid 6**.

### Chit Timing
- **Immediate**: must be played during the EW Activity step when drawn
- **Hold**: can be held and played at any point during the turn
- If both sides want to play Immediate Chits, the non-Initiative side from the previous turn goes first

## Strategic Implications

- **Firing within your Fire Plan** generates far less [[electronic-warfare|ETX]] than firing outside it — plan your fires carefully
- **New Orders and Command Activations** generate [[electronic-warfare|ETX]] — flexibility comes at a cost
- The side generating **more [[electronic-warfare|ETX]]** is more likely to suffer from the opponent's [[electronic-warfare|EW]] (draws fewer/more Chits)
- **Russia** gets an [[electronic-warfare|EW]] advantage in Advanced mode (draws 2 Chits, keeps 1) to compensate for [[red-doctrine|doctrinal rigidity]]
