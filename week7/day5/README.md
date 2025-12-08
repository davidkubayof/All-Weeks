# Riddle Game
**Name:** <Your Name>  
**ID:** <Your ID>  
**Class:** <Your Class>  

## Description
A fully synchronous terminal-based riddle game in JavaScript using ES Modules.  
The game loads riddles from files, asks them one by one, measures solve time,  
and shows total and average solving time.

## Implementation
- Player utilities handle time tracking and statistics.
- Riddle utilities handle user interaction and answer checking.
- app.js coordinates the entire game using a single import of all riddles.

## Challenge
One of the main challenges was loading multiple riddles while following  
the requirement of “one import only”.  
I solved it by creating a single `allRiddles.js` file that imports all riddles  
and exports them as one array.
