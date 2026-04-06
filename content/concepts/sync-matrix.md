---
title: Sync Matrix
type: concept
tags: [planning, orders, fire-plans, preparation]
sources: [Rulebook - FINAL.pdf]
created: 2026-04-05
updated: 2026-04-05
---

# Sync Matrix

The **Sync Matrix** is the planning document that defines each side's plan for the entire game. It is produced during the [[preparation-phase|Preparation Phase]] (Standard/Advanced mode) and represents the pre-battle plan that forces are expected to follow.

> [!note]
> This is unique in commercial wargaming. Players must plan ahead and write down what each Task Group will do each turn, before the first shot is fired.

## Structure

The Sync Matrix is a grid with:
- **Rows**: one per [[task-groups|Task Group]] and [[support-assets|Support Asset (SA)]] (excluding [[support-assets|Unmanned Aerial Support drone (UAS)]])
- **Columns**: one per Turn (5 or 6 turns depending on scenario)

Each cell contains:
- **For Task Groups**: an [[orders|Order]] (e.g. "Seize Hill 55", "Screen the bridge")
- **For Artillery/[[support-assets|First Person View drone (FPV)]] [[support-assets|SAs]]**: a [[fire-plans|Fire Plan]] (a Grid Intersection reference)
- **For Mortar Task Groups**: both an Order and a Fire Plan
- **For [[support-assets|Unmanned Aerial Support drone (UAS)]]**: no entry needed ([[support-assets|UAS]] is a flexible asset)

## How to Fill It

1. Read the scenario's [[glossary|Order of Battle (ORBAT)]] — identify your Task Groups and [[support-assets|SAs]]
2. Write each [[task-groups|Task Group (TGp)]] and [[support-assets|SA]] name in the left column
3. For each Turn, assign:
   - **Orders** for Task Groups: choose Order Verbs from the Orders Table (Player Aid 6)
   - **Fire Plans** for Artillery/[[support-assets|First Person View drone (FPV)]]/Mortar: write a Grid Intersection (e.g. "GI E32/N50")
4. A1 Echelon Task Groups should always be given "Support Task Group(s)..."

## Detail Level

The required detail varies by play intent:

| Context | Detail Level | Example |
|---------|-------------|---------|
| Hobby game | Single broad Order for the whole game | "Seize Hill X" (Turns 1-6) |
| Learning exercise | Multiple Orders per game, with routes | "Manoeuvre to Hill 55 on Road 4" (T1-3), "Secure Hill 55" (T4-6) |
| PME simulation | Detailed Orders with specific routes and coordination | Full tactical detail per turn |

> [!tip]
> Scenario 1 provides a pre-generated Sync Matrix for each side as an example of how to fill it in.

## During the Game

Both sides refer to their Sync Matrix during the [[execution-phase#Action Round|Action Round]]:
- Task Groups must take Actions that correspond to their current Order
- Fire Plans determine [[electronic-warfare|Electronic Transmission (ETX)]] costs for Indirect Fires
- If an Order is no longer achievable or appropriate, issue [[orders#New Orders|New Orders]] in the Command Phase

## Modifying the Sync Matrix

Orders and Fire Plans can be changed via **New Orders** (see [[orders#New Orders]]):
- Strike through existing Orders/Fire Plans
- Write new ones
- [[force-elements|Force Elements (FEs)]] receive Reorg markers (cannot activate that turn)
- Opponent draws 1 [[electronic-warfare|ETX]] per Task Group/[[support-assets|SA]] receiving New Orders

**Exception — [[mission-command|Mission Command]] (Advanced, NATO only):** one Task Group per turn can receive New Orders without Reorg or [[electronic-warfare|ETX]] penalty.

**Exception — [[red-doctrine|Red Doctrine]] (Advanced, Russia):** Russian Task Groups and [[support-assets|SAs]] **cannot** issue New Orders or modify Fire Plans at all.

## Laminated Components

Each side receives:
- A double-sided, laminated Sync Matrix (write with dry-erase markers)
- Two double-sided, laminated Planning Maps (replicas of the four game maps for planning)
