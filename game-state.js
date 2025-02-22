// State initialization
export const state = {
    player: 'Wizard Martin',
    wizard: {
        x: 100,
        y: 100,
        width: 80,
        height: 80,
        lastMagicUse: 0,
        cooldown: 500,
    },
    isGameOver: false,
    score: 0,
    controls: {
        KeyW: false,
        KeyA: false,
        KeyS: false,
        KeyD: false,
        Space: false,
    },
    lastBugSpawn: 0,
    maxBugSpawnTime: 30000,
};