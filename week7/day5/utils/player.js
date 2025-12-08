export default function createPlayer(name) {
    return {
        name,
        times: []
    };
}

export function addSolveTime(player, seconds) {
    player.times.push(seconds);
}

export function showStats(player) {
    const total = player.times.reduce((a, b) => a + b, 0);
    const avg = total / player.times.length;

    console.log(`\nTotal time: ${total.toFixed(2)} seconds`);
    console.log(`Average per riddle: ${avg.toFixed(2)} seconds`);
}
