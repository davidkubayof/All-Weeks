export function createPlayer(name){
    return {
        name,
        times: [] // array of durations per riddle in
        
    }
}

export function addSolveTime(player, seconds){
    player.times.push(seconds);
    }

export function showStats(player){
    const totalTime =  player.times.reduce((a, b) => a + b, 0)//
    const averageTime = totalTime / player.times.length;
    console.log(`\nGreat job, ${player.name}!`);
    console.log(`Total time: ${totalTime.toFixed(2)} seconds`);
    console.log(`Average per riddle: ${averageTime.toFixed(2)} seconds`);
}

