---
title: Game Turn
type: concept
tags: [turn, sequence, phases, structure]
sources: [Rulebook - FINAL.pdf]
created: 2026-04-06
updated: 2026-04-06
---

# Game Turn

A game of BC:B lasts **5 or 6 Turns** (set by the scenario). Each Turn represents **15-30 minutes** of real-time combat. A Turn follows the same structure every time: Command Phase, then Execution Phase.

## Turn Structure

```
TURN START
│
├── COMMAND PHASE
│   ├── 2.1 Rally ──────────── Both sides test Suppressed/Disrupted FEs
│   ├── 2.2 New Orders ─────── Both sides may change Orders on the Sync Matrix
│   └── 2.3 EW Activity ────── Reveal ETX → gain Target markers → draw EW Chits
│
├── EXECUTION PHASE
│   ├── 3.1 Determine Initiative ─── Both roll 1D6 + modifiers; winner chooses who goes first
│   ├── 3.2 Action Round ────────── Sides alternate activating Task Groups / Support Assets
│   │   ├── Activate TGp → each FE takes an Action (Move, Fire, Assault, etc.)
│   │   ├── Opponent may Reactive Fire (if Overwatch)
│   │   └── Repeat until all TGps/SAs activated (or a side passes)
│   └── 3.3 Clean-up
│       ├── Remove Smoke, Moved, Activated, Reorg markers
│       ├── Rally test for Assault Reorg markers
│       ├── Flip TGp markers to Unactivated
│       ├── Return unused EW Chits and Target markers
│       └── Advance Turn Tracker Die
│
TURN END → next Turn or Game Over
```

## Phase Details

### Command Phase

Happens at the **start** of each Turn. Both sides act simultaneously.

| Step | Mode Required | What Happens |
|------|--------------|--------------|
| **2.1 Rally** | Standard/Advanced | Each Suppressed/Disrupted [[force-elements|Force Element (FE)]] rolls 1D6 against its [[force-elements|Troop Quality (TQ)]]. Pass = improve [[morale|Morale]] one level. [[force-elements|Headquarters (HQ)]] within 250m gives +[[glossary|Command & Control (C2)]] bonus. See [[morale#Rally Tests]]. |
| **2.2 New Orders** | Standard/Advanced | Either side may change [[orders|Orders]] or [[fire-plans|Fire Plans]] on the [[sync-matrix|Sync Matrix]]. Cost: Reorg marker (lose activation for the Turn) + 1 [[electronic-warfare|Electronic Transmission (ETX)]] per [[task-groups|Task Group (TGp)]]/[[support-assets|Support Asset (SA)]]. [[mission-command|Mission Command]] (NATO) avoids this cost for 1 TGp. [[red-doctrine|Red Doctrine]] (Russia) forbids this entirely. |
| **2.3 EW Activity** | All modes | Flip [[electronic-warfare|ETX]] markers → exchange for Target markers → draw [[electronic-warfare|Electronic Warfare (EW)]] Chits. Side with more [[electronic-warfare|ETX]] draws an extra Chit. See [[electronic-warfare]]. |

> [!note] Turn 1
> On Turn 1, only step 2.3 applies, and within it only EW Chit drawing (no ETX to reveal yet). [[initiative|Initiative]] is set by the scenario, not rolled.

### Execution Phase

The **heart of the game**. This is where forces move and fight.

**3.1 Determine [[initiative|Initiative]]:** Both sides roll 1D6 + modifiers (including [[force-elements|HQ]] [[glossary|C2]] Rating). Highest wins. The Initiative side chooses **who activates first**.

**3.2 Action Round:** Sides alternate activating one [[task-groups|TGp]] or [[support-assets|SA]] at a time.

When a [[task-groups|TGp]] activates:
1. Choose which [[force-elements|FE]] goes first
2. That [[force-elements|FE]] takes one [[actions-overview|Action]] (Move, Move-Fire, Direct Fire, Indirect Fire, Assault, Hold, Overwatch, Dig Shell Scrape, or REPLENDEM)
3. Opponent may [[overwatch#Reactive Fire|Reactive Fire]] if they have an [[force-elements|FE]] with an Overwatch marker
4. Next [[force-elements|FE]] in the [[task-groups|TGp]] activates
5. Once all [[force-elements|FEs]] in the [[task-groups|TGp]] are done, the [[task-groups|TGp]] is flipped to Activated
6. Other side activates a [[task-groups|TGp]] or [[support-assets|SA]]

**Passing:** A side may pass instead of activating, but then makes **no more activations** that Turn (can still Reactive Fire).

**[[command-activation|Command Activation]]:** An [[force-elements|HQ]] can activate additional [[task-groups|TGps]] simultaneously (C2 Rating - 1 extra TGps). Costs 1 [[electronic-warfare|ETX]] per additional [[task-groups|TGp]].

**3.3 Clean-up:** Reset the board for the next Turn.

| Step | Action |
|------|--------|
| 1 | Remove all Smoke, Moved, Activated, and Reorg markers |
| 2 | Rally test for each Assault Reorg marker (pass = remove; fail = flip to Reorg) |
| 3 | Flip all [[task-groups|TGp]] markers to Unactivated side |
| 4 | Return unused [[electronic-warfare|EW]] Chits and Target markers to supply |
| 5 | Advance Turn Tracker Die by 1 |

> [!important]
> **Overwatch markers persist** — they are NOT removed in Clean-up. They stay until the [[force-elements|FE]] Reactive Fires, takes a different Action, or receives a Reorg marker.

## Typical Turn Flow (Example)

> Turn 2 of Scenario 1. Russia has [[initiative|Initiative]].
>
> **Command Phase:** NATO rallies a Suppressed [[force-elements|FE]] (passes). Russia draws its [[electronic-warfare|EW]] Chits. NATO got 1 [[electronic-warfare|ETX]] from Russian artillery last turn → becomes a Target marker.
>
> **Execution Phase:** Russia wins Initiative, chooses to go first. Activates [[support-assets|UAS]] (Move to new position). NATO activates [[task-groups|TGp]] 2 (Overwatch for both [[force-elements|FEs]]). Russia activates 152mm Artillery (Indirect Fire on NATO position). NATO activates Mortar (Indirect Fire on approaching Russians). Russia activates [[task-groups|TGp]] 1 (Move Stacks toward bridge — NATO Reactive Fires with Javelin). And so on until all forces activated.
>
> **Clean-up:** Remove markers, return Chits, advance Turn die to 3.

## Game Length

| Scenario | Turns | Approximate Real Time |
|----------|-------|-----------------------|
| Most scenarios | 5 | 75-150 min of game time |
| Scenario 5 | 6 | 90-180 min of game time |

The game ends after the **last Turn's Clean-up**. Both sides check their Commander's Intent objectives to determine victory level (Decisive > Substantive > Marginal > Fail).
